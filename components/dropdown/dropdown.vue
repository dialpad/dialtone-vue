<template>
  <dt-popover
    ref="popover"
    :content-width="contentWidth"
    :open="open"
    :has-caret="false"
    :fixed-vertical-alignment="fixedVerticalAlignment"
    :fixed-alignment="fixedAlignment"
    :padding="padding"
    role="menu"
    v-on="$listeners"
    @update:open="updateInitialHighlightIndex"
    @keydown.esc.stop="onEscapeKey"
    @keydown.enter="onEnterKey"
    @keydown.space="onSpaceKey"
    @keydown.up.stop.prevent="onUpKeyPress"
    @keydown.down.prevent="onDownKeyPress"
    @keydown.home.stop.prevent="onHomeKey"
    @keydown.end.stop.prevent="onEndKey"
  >
    <template #anchor="props">
      <!-- @slot Anchor element that activates the dropdown -->
      <slot
        ref="anchor"
        name="anchor"
        v-bind="props"
      />
    </template>
    <template #content>
      <ul
        :id="listId"
        ref="listWrapper"
        class="d-p0 d-ps-relative"
        data-qa="dt-dropdown-list-wrapper"
        @mouseleave="clearHighlightIndex"
      >
        <!-- @slot Slot for the list component -->
        <slot
          name="list"
        />
      </ul>
    </template>
  </dt-popover>
</template>

<script>
import KeyboardNavigation from '../mixins/keyboard_list_navigation';
import { DtPopover } from '../popover';
import { LIST_ITEM_NAVIGATION_TYPES } from '../list_item/list_item_constants';
import { getUniqueString } from '../utils';

export default {
  name: 'DtDropdown',

  components: {
    DtPopover,
  },

  mixins: [
    KeyboardNavigation({
      indexKey: 'highlightIndex',
      idKey: 'highlightId',
      listElementKey: 'getListElement',
      listItemRole: 'menuitem',
      afterHighlightMethod: 'afterHighlight',
      beginningOfListMethod: 'beginningOfListMethod',
      endOfListMethod: 'endOfListMethod',
      activeItemKey: 'activeItemEl',
      focusOnKeyboardNavigation: true,
    }),
  ],

  props: {
    /**
     * Whether the dropdown should be shown. Supports .sync modifier.
     */
    open: {
      type: Boolean,
      required: true,
    },

    /**
     * Padding size class for the dropdown.
     */
    padding: {
      type: String,
      default: 'none',
    },

    /**
     * Width configuration for the dropdown. 'anchor' is one possible string value.
     * If passed, the dropdown will be set same width with anchor element
     */
    contentWidth: {
      type: String,
      default: null,
    },

    /**
     * Sets an ID on the list element of the component. Used by several aria attributes
     * as well as when deriving the IDs for each item.
     */
    listId: {
      type: String,
      default () { return getUniqueString(); },
    },

    /**
     * The type of navigation that this component should support.
     * - "arrow-keys" for items that are navigated with UP/DOWN keys.
     * - "tab" for items that are navigated using the TAB key.
     * - "none" for static items that are not interactive.
     */
    navigationType: {
      type: String,
      default: LIST_ITEM_NAVIGATION_TYPES.ARROW_KEYS,
      validator: (t) => Object.values(LIST_ITEM_NAVIGATION_TYPES).includes(t),
    },

    /**
     * Fixed vertical alignment of the dropdown content. If passed, the dropdown
     * will always display anchored to the top or bottom of the anchor element.
     * If null, the content will be positioned on whichever side has the most
     * available space relative to the root Vue element. String values must be
     * one of `top` or `bottom`.
     */
    fixedVerticalAlignment: {
      type: String,
      default: null,
    },

    /**
     * Fixed horizontal alignment of the dropdown content. If passed, the
     * dropdown will always display anchored to the left, center or right of the
     * anchor element. If null, the content will be positioned on whichever
     * side has the most available space relative to the root Vue element.
     */
    fixedAlignment: {
      type: String,
      default: 'left',
    },

    /**
     * A method that will be called when the selection goes past the beginning of the list.
     */
    onBeginningOfList: {
      type: Function,
      default: null,
    },

    /**
     * A method that will be called when the selection goes past the end of the list.
     */
    onEndOfList: {
      type: Function,
      default: null,
    },
  },

  emits: ['select', 'escape', 'highlight'],

  data () {
    return {
      LIST_ITEM_NAVIGATION_TYPES,
      shouldFocusFirstElement: false,
    };
  },

  computed: {
    beginningOfListMethod () {
      return this.onBeginningOfList || this.jumpToEnd;
    },

    endOfListMethod () {
      return this.onEndOfList || this.jumpToBeginning;
    },

    activeItemEl () {
      return this.getListElement().querySelector('#' + this.highlightId);
    },
  },

  methods: {
    getListElement () {
      return this.$refs.listWrapper;
    },

    clearHighlightIndex () {
      this.setHighlightIndex(-1);
    },

    afterHighlight () {
      this.$emit('highlight', this.highlightIndex);
    },

    updateInitialHighlightIndex (isOpen) {
      if (isOpen) {
        if (this.shouldFocusFirstElement) {
          // Focus first item on keyboard navigation
          this.$refs.popover.focusFirstElement(this.getListElement());

          if (this.navigationType === this.LIST_ITEM_NAVIGATION_TYPES.ARROW_KEYS) {
            this.setHighlightIndex(0);
          }
        }
      } else {
        this.clearHighlightIndex();
        if (this.shouldFocusFirstElement) {
          this.setFocusFirstElement(false);
          this.$refs.popover.focusFirstElement(this.$refs.anchor);
        }
      }
    },

    setFocusFirstElement (val) {
      this.shouldFocusFirstElement = val;
    },

    onSpaceKey () {
      this.setFocusFirstElement(true);
    },

    onEnterKey () {
      if (this.open && this.highlightIndex >= 0) {
        this.$emit('select', this.highlightIndex);
      }
      this.setFocusFirstElement(true);
    },

    onUpKeyPress () {
      if (this.navigationType === this.LIST_ITEM_NAVIGATION_TYPES.ARROW_KEYS) {
        return this.onUpKey();
      }
    },

    onDownKeyPress () {
      if (this.navigationType === this.LIST_ITEM_NAVIGATION_TYPES.ARROW_KEYS) {
        return this.onDownKey();
      }
    },

    onEscapeKey () {
      this.$emit('escape');
    },
  },
};
</script>
