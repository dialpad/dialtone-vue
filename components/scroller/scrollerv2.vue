<template>
  <div
    class="vue-recycle-scroller"
    :class="{
      ready,
      [`direction-${direction}`]: true,
    }"
    @scroll.passive="handleScroll"
  >
    <component
      :is="listTag"
      ref="wrapper"
      :style="{ [direction === 'vertical' ? 'minHeight' : 'minWidth']: `${totalSize}px` }"
      class="vue-recycle-scroller__item-wrapper"
      :class="listClass"
    >
      <component
        :is="itemTag"
        v-for="view of pool"
        :key="view.nr.id"
        :style="ready ? {
          transform: `translate${direction === 'vertical' ? 'Y' : 'X'}(${view.position}px) translate${direction === 'vertical' ? 'X' : 'Y'}(${view.offset}px)`,
          width: undefined,
          height: undefined,
        } : null"
        class="vue-recycle-scroller__item-view"
        :class="[
          itemClass,
          {
            hover: !skipHover && hoverKey === view.nr.key,
          },
        ]"
        v-on="skipHover ? {} : {
          mouseenter: () => { hoverKey = view.nr.key },
          mouseleave: () => { hoverKey = null },
        }"
      >
        <slot
          :item="view.item"
          :index="view.nr.index"
          :active="view.nr.used"
        />
      </component>
    </component>
  </div>
</template>

<script>
import { markRaw, shallowReactive } from 'vue';
import { ObserveVisibility } from 'vue-observe-visibility';
let uid = 0;
export default {
  name: 'RecycleScroller',
  directives: {
    ObserveVisibility,
  },

  // mixins: [idState],
  props: {
    /**
     * List of items you want to display in the scroller.
     */
    items: {
      type: Array,
      required: true,
    },

    /**
     *
     * Field used to identify items and optimize managing rendered views
     */
    keyField: {
      type: String,
      default: 'id',
    },

    /**
     * Direction of the scroller. Can be either `vertical` or `horizontal`.
     */
    direction: {
      type: String,
      default: 'vertical',
      validator: (value) => ['vertical', 'horizontal'].includes(value),
    },

    /**
     * Size of the items in the list.
     * If it is set to null (the default value), it will use variable size mode.
     */
    itemSize: {
      type: Number,
      default: null,
    },

    /**
     * Minimum size used if the height (or width in horizontal mode) of an item is unknown.
     */
    minItemSize: {
      type: [Number, String],
      default: null,
    },

    /**
     * Field used to get the item's size in variable size mode.
     */
    sizeField: {
      type: String,
      default: 'size',
    },

    /**
     * Amount of pixel to add to edges of the scrolling visible area to start rendering items further away.
     */
    buffer: {
      type: Number,
      default: 200,
    },

    /**
     * If true, the hover state will be skipped.
     * This can be useful if you want to use the hover state for other purposes.
     */
    skipHover: {
      type: Boolean,
      default: false,
    },

    /**
     * The element to render as the list's wrapper.
     */
    listTag: {
      type: String,
      default: 'div',
    },

    /**
     * The element to render as the list item.
     */
    itemTag: {
      type: String,
      default: 'div',
    },

    /**
     * The custom classes added to the item list wrapper.
     */
    listClass: {
      type: [String, Object, Array],
      default: '',
    },

    /**
     * The custom classes added to each item.
     */
    itemClass: {
      type: [String, Object, Array],
      default: '',
    },
  },

  emits: [
    'scroll-start',
    'scroll-end',
  ],

  data () {
    return {
      pool: [],
      totalSize: 0,
      ready: false,
      hoverKey: null,
    };
  },

  computed: {
    sizes () {
      if (this.itemSize === null) {
        const sizes = {
          '-1': { accumulator: 0 },
        };
        const items = this.items;
        const field = this.sizeField;
        const minItemSize = this.minItemSize;
        let computedMinSize = 10000;
        let accumulator = 0;
        let current;
        for (let i = 0, l = items.length; i < l; i++) {
          current = items[i][field] || minItemSize;
          if (current < computedMinSize) {
            computedMinSize = current;
          }
          accumulator += current;
          sizes[i] = { accumulator, size: current };
        }
        // console.log(computedMinSize)
        // eslint-disable-next-line
        this.$_computedMinItemSize = computedMinSize
        return sizes;
      }
      return [];
    },

    simpleArray () {
      return this.items.length && typeof this.items[0] !== 'object';
    },

    itemIndexByKey () {
      const { keyField, items } = this;
      const result = {};
      for (let i = 0, l = items.length; i < l; i++) {
        result[items[i][keyField]] = i;
      }
      return result;
    },
  },

  watch: {
    items () {
      this.updateVisibleItems(true);
    },

    sizes: {
      handler () {
        this.updateVisibleItems(false);
      },

      deep: true,
    },
  },

  created () {
    this.$_startIndex = 0;
    this.$_endIndex = 0;
    this.$_views = new Map();
    this.$_unusedViews = new Map();
    this.$_scrollDirty = false;
    this.$_lastUpdateScrollPosition = 0;
    this._undefinedSizes = 0;
  },

  mounted () {
    this.$nextTick(() => {
      // In SSR mode, render the real number of visible items
      this.updateVisibleItems(true);
      this.ready = true;
    });
  },

  methods: {
    addView (pool, index, item, key, type) {
      const nr = markRaw({
        id: uid++,
        index,
        used: true,
        key,
        type,
      });
      const view = shallowReactive({
        item,
        position: 0,
        nr,
      });
      pool.push(view);
      return view;
    },

    unuseView (view, fake = false) {
      const unusedViews = this.$_unusedViews;
      const type = view.nr.type;
      let unusedPool = unusedViews.get(type);
      if (!unusedPool) {
        unusedPool = [];
        unusedViews.set(type, unusedPool);
      }
      unusedPool.push(view);
      // console.log(unusedViews);
      if (!fake) {
        view.nr.used = false;
        view.position = -9999;
      }
    },

    handleScroll () {
      if (!this.$_scrollDirty) {
        this.$_scrollDirty = true;
        if (this.$_updateTimeout) return;
        const requestUpdate = () => requestAnimationFrame(() => {
          this.$_scrollDirty = false;
          const { continuous } = this.updateVisibleItems(false, true);
          // It seems sometimes chrome doesn't fire scroll event :/
          // When non continous scrolling is ending, we force a refresh
          if (!continuous) {
            clearTimeout(this.$_refreshTimout);
            this.$_refreshTimout = setTimeout(this.handleScroll, 100);
          }
        });
        requestUpdate();
      }
    },

    updateVisibleItems (checkItem, checkPositionDiff = false) {
      const itemSize = this.itemSize;
      const minItemSize = this.$_computedMinItemSize;
      const keyField = this.simpleArray ? null : this.keyField;
      const items = this.items;
      const count = items.length;
      const sizes = this.sizes;
      const views = this.$_views;
      // console.log(this.$_unusedViews);
      const unusedViews = this.$_unusedViews;
      const pool = this.pool;
      const itemIndexByKey = this.itemIndexByKey;
      let startIndex, endIndex;
      let totalSize;
      let visibleStartIndex, visibleEndIndex;

  // console.log(minItemSize)


      if (!count) {
        startIndex = endIndex = visibleStartIndex = visibleEndIndex = totalSize = 0;
      } else {
        const scroll = this.getScroll();
        // Skip update if use hasn't scrolled enough
        if (checkPositionDiff) {
          let positionDiff = scroll.start - this.$_lastUpdateScrollPosition;
          if (positionDiff < 0) positionDiff = -positionDiff;
          if ((itemSize === null && positionDiff < minItemSize) || positionDiff < itemSize) {
            return {
              continuous: true,
            };
          }
        }
        this.$_lastUpdateScrollPosition = scroll.start;
        const buffer = this.buffer;
        scroll.start -= buffer;
        scroll.end += buffer;

        // Variable size mode
        if (itemSize === null) {
          let h;
          let a = 0;
          let b = count - 1;
          let i = ~~(count / 2);
          let oldI;
          // Searching for startIndex
          do {
            oldI = i;
            h = sizes[i].accumulator;
            if (h < scroll.start) {
              a = i;
            } else if (i < count - 1 && sizes[i + 1].accumulator > scroll.start) {
              b = i;
            }
            i = ~~((a + b) / 2);
          } while (i !== oldI);
          i < 0 && (i = 0);
          startIndex = i;
          // For container style
          totalSize = sizes[count - 1].accumulator;


          // console.log(sizes);
          // console.log(totalSize)

          // Searching for endIndex
          for (endIndex = i; endIndex < count && sizes[endIndex].accumulator < scroll.end; endIndex++);
          if (endIndex === -1) {
            endIndex = items.length - 1;
          } else {
            endIndex++;
            // Bounds
            endIndex > count && (endIndex = count);
          }

          // search visible startIndex
          for (visibleStartIndex = startIndex; visibleStartIndex < count && (sizes[visibleStartIndex].accumulator) < scroll.start; visibleStartIndex++);
          // search visible endIndex
          for (visibleEndIndex = visibleStartIndex; visibleEndIndex < count && (sizes[visibleEndIndex].accumulator) < scroll.end; visibleEndIndex++);
        } else {
          // Fixed size mode
          startIndex = ~~(scroll.start / itemSize);
          const remainer = startIndex % 1;
          startIndex -= remainer;
          endIndex = Math.ceil(scroll.end / itemSize);
          visibleStartIndex = Math.max(0, Math.floor((scroll.start) / itemSize));
          visibleEndIndex = Math.floor((scroll.end) / itemSize);
          // Bounds
          startIndex < 0 && (startIndex = 0);
          endIndex > count && (endIndex = count);
          visibleStartIndex < 0 && (visibleStartIndex = 0);
          visibleEndIndex > count && (visibleEndIndex = count);
          totalSize = Math.ceil(count) * itemSize;
        }
      }
      // items limit 1000
      if (endIndex - startIndex > 1000) {
        this.itemsLimitError();
      }
      this.totalSize = totalSize;

      // console.log(this.totalSize)
      let view;
      const continuous = startIndex <= this.$_endIndex && endIndex >= this.$_startIndex;
      // Unuse views that are no longer visible
      if (continuous) {
        for (let i = 0, l = pool.length; i < l; i++) {
          view = pool[i];
          if (view.nr.used) {
            // Update view item index
            if (checkItem) {
              view.nr.index = itemIndexByKey[view.item[keyField]];
            }
            // Check if index is still in visible range
            if (
              view.nr.index == null ||
              view.nr.index < startIndex ||
              view.nr.index >= endIndex
            ) {
              // console.log('call unuseView');
              this.unuseView(view);
            }
          }
        }
      }
      const unusedIndex = continuous ? null : new Map();
      let item, type;
      let v;
      for (let i = startIndex; i < endIndex; i++) {
        item = items[i];
        const key = keyField ? item[keyField] : item;
        if (key == null) {
          throw new Error(`Key is ${key} on item (keyField is '${keyField}')`);
        }
        view = views.get(key);
        if (!itemSize && !sizes[i].size) {
          if (view) this.unuseView(view);
          continue;
        }
        type = item.type;

        // console.log(type);
        // console.log(unusedViews);
        let unusedPool = unusedViews.get(type);
        // console.log(unusedPool);
        let newlyUsedView = false;
        // No view assigned to item
        if (!view) {
          if (continuous) {
            // Reuse existing view
            if (unusedPool && unusedPool.length) {
              view = unusedPool.pop();
            } else {
              view = this.addView(pool, i, item, key, type);
            }
          } else {
            // Use existing view
            // We don't care if they are already used
            // because we are not in continous scrolling
            v = unusedIndex.get(type) || 0;
            if (!unusedPool || v >= unusedPool.length) {
              view = this.addView(pool, i, item, key, type);
              this.unuseView(view, true);
              unusedPool = unusedViews.get(type);
            }
            view = unusedPool[v];
            unusedIndex.set(type, v + 1);
          }
          // Assign view to item
          views.delete(view.nr.key);
          view.nr.used = true;
          view.nr.index = i;
          view.nr.key = key;
          view.nr.type = type;
          views.set(key, view);
          newlyUsedView = true;
        } else {
          // View already assigned to item
          if (!view.nr.used) {
            view.nr.used = true;
            newlyUsedView = true;
            if (unusedPool) {
              const index = unusedPool.indexOf(view);
              if (index !== -1) unusedPool.splice(index, 1);
            }
          }
        }
        // Always set item in case it's a new object with the same key
        view.item = item;
        if (newlyUsedView) {
          if (i === items.length - 1) this.$emit('scroll-end');
          if (i === 0) this.$emit('scroll-start');
        }
        // Update position
        if (itemSize === null) {
          view.position = sizes[i - 1].accumulator;
          view.offset = 0;
        } else {
          view.position = Math.floor(i) * itemSize;
          view.offset = (i % 1) * itemSize;
        }
      }
      this.$_startIndex = startIndex;
      this.$_endIndex = endIndex;
      // After the user has finished scrolling
      // Sort views so text selection is correct
      clearTimeout(this.$_sortTimer);
      this.$_sortTimer = setTimeout(this.sortViews, 300);
      return {
        continuous,
      };
    },

    getScroll () {
      const { $el: el, direction } = this;
      const isVertical = direction === 'vertical';
      let scrollState;
      if (isVertical) {
        scrollState = {
          start: el.scrollTop,
          end: el.scrollTop + el.clientHeight,
        };
      } else {
        scrollState = {
          start: el.scrollLeft,
          end: el.scrollLeft + el.clientWidth,
        };
      }
      return scrollState;
    },

    scrollToItem (index) {
      let scroll;
      if (this.itemSize === null) {
        scroll = index > 0 ? this.sizes[index - 1].accumulator : 0;
      } else {
        scroll = Math.floor(index) * this.itemSize;
      }
      this.scrollToPosition(scroll);
    },

    scrollToPosition (position) {
      const direction = this.direction === 'vertical'
        ? { scroll: 'scrollTop', start: 'top' }
        : { scroll: 'scrollLeft', start: 'left' };
      const viewport = this.$el;
      const scrollDirection = direction.scroll;
      viewport[scrollDirection] = position;
    },
  },

  itemsLimitError () {
    setTimeout(() => {
      console.log('It seems the scroller element isn\'t scrolling, so it tries to render all the items at once.', 'Scroller:', this.$el);
      console.log('Make sure the scroller has a fixed height (or width) and \'overflow-y\' (or \'overflow-x\') set to \'auto\' so it can scroll correctly and only render the items visible in the scroll viewport.');
    });
    throw new Error('Rendered items limit reached');
  },

  sortViews () {
    this.pool.sort((viewA, viewB) => viewA.nr.index - viewB.nr.index);
  },
};
</script>

<style>
.vue-recycle-scroller{
    position:relative
}
.vue-recycle-scroller.direction-vertical:not(.page-mode){
    overflow-y:auto
}
.vue-recycle-scroller.direction-horizontal:not(.page-mode){
    overflow-x:auto
}
.vue-recycle-scroller.direction-horizontal{
    display:flex
}
.vue-recycle-scroller__slot{
    flex:auto 0 0
}
.vue-recycle-scroller__item-wrapper{
    flex:1;
    box-sizing:border-box;
    overflow:hidden;
    position:relative
}
.vue-recycle-scroller.ready .vue-recycle-scroller__item-view{
    position:absolute;
    top:0;
    left:0;
    will-change:transform
}
.vue-recycle-scroller.direction-vertical .vue-recycle-scroller__item-wrapper{
    width:100%
}
.vue-recycle-scroller.direction-horizontal .vue-recycle-scroller__item-wrapper{
    height:100%
}
.vue-recycle-scroller.ready.direction-vertical .vue-recycle-scroller__item-view{
    width:100%
}
.vue-recycle-scroller.ready.direction-horizontal .vue-recycle-scroller__item-view{
    height:100%
}
 </style>