<template>
  <!-- slot with list item content goes here -->
  <li
    :id="id"
    :class="['dt-list-item', 'd-fs14', 'd-lh6', 'd-py6', 'd-px16', 'd-d-flex', 'd-ai-center',
             { 'dt-list-item--clickable': clickable, 'dt-list-item--highlighted': isHighlighted }]"
    :tabindex="clickable ? 0 : -1"
    :role="role"
    :aria-selected="isHighlighted"
    @keydown.enter="onClick"
    @keydown.space="onClick"
    @click="onClick"
    @[maybeMouseMove]="onMouseMove"
  >
    <span
      v-if="$slots.iconLeft"
      class="d-d-inline-flex d-pr8"
      data-qa="dt-list-item-left-icon-wrapper"
    >
      <slot name="iconLeft" />
    </span>
    <div
      class="d-fl-grow1"
      data-qa="dt-list-item-content-wrapper"
    >
      <slot />
    </div>
    <span
      v-if="$slots.iconRight"
      class="d-d-inline-flex d-pl8"
      data-qa="dt-list-item-right-icon-wrapper"
    >
      <slot name="iconRight" />
    </span>
  </li>
</template>

<script>
import utils from '../utils';
import Dom from '../mixins/dom';

export default {
  name: 'ListItem',

  mixins: [Dom],

  props: {
    /**
     * Id for the item.
     */
    id: {
      type: String,
      default () { return utils.getUniqueString(); },
    },

    /**
     * String to use for the item's role.
     */
    role: {
      type: String,
      default: 'listitem',
    },

    /**
     * Sets the tabindex and hover/focus styles for the item. Does not prevent
     * emitting click events.
     */
    clickable: {
      type: Boolean,
      default: true,
    },

    /**
     * For keyboard navigation, the index of this item within it's parent list.
     */
    absoluteIndex: {
      type: Number,
      default: null,
    },

    /**
     * For keyboard navigation, the index of the currently highlighted item.
     */
    highlightIndex: {
      type: Number,
      default: null,
    },

    /**
     * For keyboard navigation, method to update the highlight index on the parent.
     */
    setHighlightIndex: {
      type: Function,
      default: null,
    },

    /**
     * For keyboard navigation, the immediate parent component/element a.k.a the common
     * wrapper for this item and its siblings. Used in the calculations when checking
     * whether we should scroll this item into view when it receives highlight.
     */
    parentElement: {
      type: [Object, HTMLElement],
      default: null,
    },
  },

  emits: ['click'],

  data () {
    return {
      // Keep track of when the highlight came from mouse events.
      highlightedByMouse: false,
    };
  },

  computed: {
    /**
     * These props are required for the highlighting to work properly, so use them
     * to determine if this item is highlightable or not.
     */
    isHighlightable () {
      return Number.isInteger(this.absoluteIndex) && Number.isInteger(this.highlightIndex) && this.setHighlightIndex;
    },

    isHighlighted () {
      return this.isHighlightable && this.highlightIndex === this.absoluteIndex;
    },

    /**
     * Since this event listener can be resource heavy, only attach it when needed.
     * https://github.com/vuejs/vue/issues/7349#issuecomment-458405684
     */
    maybeMouseMove () {
      return this.isHighlightable && !this.isHighlighted ? 'mousemove' : null;
    },
  },

  watch: {
    highlightIndex (newIndex, oldIndex) {
      // If the index didn't change, do nothing.
      if (newIndex !== this.absoluteIndex) {
        return;
      }

      // Scroll the item into view only if the highlight wasn't triggered by mouse events.
      if (!this.highlightedByMouse) {
        this.$nextTick().then(() => {
          // this.parentElement can be a Vue component, in which case we need to target
          // the $el property, or it can simply be an html element. When it's not
          // passed scrollElementIntoViewIfNeeded will default to this.$el.parentElement.
          const parentElement = this.parentElement?.$el || this.parentElement;
          this.scrollElementIntoViewIfNeeded(this.$el, null, null, parentElement);
        });
      } else {
        this.highlightedByMouse = false;
      }
    },
  },

  methods: {
    onClick () {
      this.$emit('click');

      // Reset the highlight when the item is clicked.
      if (this.isHighlightable) {
        this.highlight(-1);
      }
    },

    /**
     * While you hover over an item, always set the highlight index to that item.
     */
    onMouseMove () {
      this.highlight(this.absoluteIndex, true);
    },

    /**
     * Update the highlight index.
     */
    highlight (i, highlightedByMouse = false) {
      if (this.isHighlightable && this.highlightIndex !== i) {
        this.highlightedByMouse = highlightedByMouse;
        this.setHighlightIndex(i);
      }
    },
  },
};
</script>

<style lang="less">
.dt-list-item[tabindex="-1"]:focus {
  outline: none;
}

.dt-list-item--clickable:hover,
.dt-list-item--clickable:focus,
.dt-list-item--highlighted {
  background-color: hsla(var(--primary-color-h), var(--primary-color-s), var(--primary-color-l), 0.1);
  cursor: pointer;
}
</style>
