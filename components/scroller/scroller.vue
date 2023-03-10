<template>
  <component
    :is="dynamic ? 'dynamic-scroller' : 'core-scroller'"
    ref="scroller"
    :items="items"
    :item-size="itemSize"
    :min-item-size="minItemSize"
    :direction="direction"
    key-field="id"
    :list-tag="listTag"
    :item-tag="itemTag"
    v-bind="$attrs"
    :style="computedStyle"
  >
    <template
      #default="{ item, index, active }"
    >
      <slot
        v-bind="{
          item: item,
          index,
          active,
        }"
      />
    </template>
  </component>
</template>

<script>
import CoreScroller from './modules/core-scroller.vue';
import DynamicScroller from './modules/dynamic-scroller.vue';

export default {
  name: 'DtScroller',

  components: {
    CoreScroller,
    DynamicScroller,
  },

  inheritAttrs: false,

  props: {
    /**
      * The items to render.
      * If the items are simple arrays, the index will be used as the key.
      * If the items are objects, the keyField will be used as the key.
     */
    items: {
      type: Array,
      required: true,
    },

    /**
      * The width of the scroller.
      * Can be a number (in pixels) or a string (in CSS units).
     */
    scrollerWidth: {
      type: [String, Number],
      default: '100%',
    },

    /**
      * The height of the scroller.
      * Can be a number (in pixels) or a string (in CSS units).
     */
    scrollerHeight: {
      type: [String, Number],
      default: '100%',
    },

    /**
      * Indicates if the items are dynamic.
      * If true, the items will be wrapped in a DtScrollerItem component.
      * This is required for dynamic items to be able to react to changes in their size.
     */
    dynamic: {
      type: Boolean,
      default: false,
    },

    /**
      * The key field to use for the items.
      * If the items are objects, the scroller needs to be able to identify them.
      * By default it will look for an id field on the items.
      * This can be configured with this prop if you are using another field name.
     */
    keyField: {
      type: String,
      default: 'id',
    },

    /**
      * The direction of the scroller.
      * Can be either 'vertical' or 'horizontal'.
     */
    direction: {
      type: String,
      default: 'vertical',
      validator: (value) => ['vertical', 'horizontal'].includes(value),
    },

    /**
      * The tag to use for the list.
     */
    listTag: {
      type: String,
      default: 'div',
    },

    /**
      * The tag to use for the items.
     */
    itemTag: {
      type: String,
      default: 'div',
    },

    /**
      * Display height (or width in horizontal mode) of the items in pixels
      * used to calculate the scroll size and position.
     */
    itemSize: {
      type: Number,
      default: null,
    },

    /**
      * Minimum size used if the height (or width in horizontal mode) of a item is unknown.
      * Is required for the initial render of items in DYNAMIC size mode.
     */
    minItemSize: {
      type: [Number, String],
    },
  },

  computed: {
    computedStyle () {
      return {
        width: typeof this.scrollerWidth === 'number' ? `${this.scrollerWidth}px` : this.scrollerWidth,
        height: typeof this.scrollerHeight === 'number' ? `${this.scrollerHeight}px` : this.scrollerHeight,
      };
    },
  },

  methods: {
    scrollToItem (index) {
      const scroller = this.$refs.scroller;
      if (scroller) scroller.scrollToItem(index);
    },
  },
};
</script>
