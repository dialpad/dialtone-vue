<template>
  <div
    role="combobox"
    :aria-expanded="isExpanded.toString()"
    :aria-controls="listId"
    :aria-owns="listId"
    aria-haspopup="listbox"
    @keydown.esc.stop="onEscapeKey"
    @keydown.enter="onEnterKey"
    @keydown.up.stop.prevent="onUpKey"
    @keydown.down.stop.prevent="onDownKey"
    @keydown.home.stop.prevent="onHomeKey"
    @keydown.end.stop.prevent="onEndKey"
  >
    <div data-qa="dt-combobox-input-wrapper">
      <!-- @slot Slot for the combobox input element -->
      <slot
        name="input"
        :input-props="inputProps"
      />
    </div>
    <div
      ref="listWrapper"
      data-qa="dt-combobox-list-wrapper"
      @mouseleave="clearHighlightIndex"
      @focusout="clearHighlightIndex"
    >
      <!-- @slot Slot for the combobox list element -->
      <slot
        name="list"
        :list-props="listProps"
        :get-item-props="getItemProps"
        :active-item-index="highlightIndex"
        :set-highlight-index="setHighlightIndex"
      />
    </div>
  </div>
</template>

<script>
import KeyboardNavigation from '../mixins/keyboard_list_navigation';
import { getUniqueString } from '../utils';

export default {
  name: 'DtCombobox',

  mixins: [
    KeyboardNavigation({
      itemsKey: 'items',
      indexKey: 'highlightIndex',
      afterHighlightMethod: 'afterHighlight',
      beginningOfListMethod: 'beginningOfListMethod',
      endOfListMethod: 'endOfListMethod',
      activeItemKey: 'activeItemEl',
    }),
  ],

  props: {
    /**
     * String to use for the list's aria-label.
     */
    listAriaLabel: {
      type: String,
      required: true,
    },

    /**
     * An array of items to be shown in the list. This should include only items
     * that are selectable, i.e. not dividers or subheaders.
     */
    items: {
      type: Array,
      default: () => [],
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

  computed: {
    inputProps () {
      return {
        'aria-activedescendant': this.activeItemId,
        'aria-controls': this.listId,
        'aria-autocomplete': 'list',
      };
    },

    listProps () {
      return {
        role: 'listbox',
        id: this.listId,
        // The list has to be positioned relatively so that the auto-scroll can
        // calculate the correct offset for the list items.
        class: 'd-ps-relative',
        'aria-label': this.listAriaLabel,
      };
    },

    /*
     * These props are wrapped in a function that expects that an index is passed.
     */
    getItemProps () {
      return (i) => ({
        role: 'option',
        // The ids have to be generated here since we use them for activeItemId.
        id: this.getItemId(i),
      });
    },

    beginningOfListMethod () {
      return this.onBeginningOfList || this.jumpToEnd;
    },

    endOfListMethod () {
      return this.onEndOfList || this.jumpToBeginning;
    },

    isExpanded () {
      return !!this.items.length;
    },

    activeItemId () {
      if (!this.isExpanded || this.highlightIndex < 0) {
        return;
      }
      return this.getItemId(this.highlightIndex);
    },

    activeItemEl () {
      return this.$refs.listWrapper.querySelector(`#${this.activeItemId}`);
    },
  },

  watch: {
    isExpanded (isExpanded, wasExpanded) {
      // When the list is expanded set the highlight onto the first item.
      if (isExpanded && !wasExpanded) {
        this.setHighlightIndex(0);
      }
    },
  },

  created () {
    this.listId = `${getUniqueString('dt-combobox-list')}`;
  },

  methods: {
    clearHighlightIndex () {
      this.setHighlightIndex(-1);
    },

    getItemId (i) {
      return `${this.listId}-item${i}`;
    },

    afterHighlight () {
      this.$emit('highlight', this.highlightIndex);
    },

    onEnterKey () {
      if (this.isExpanded && this.highlightIndex >= 0) {
        this.$emit('select', this.highlightIndex);
      }
    },

    onEscapeKey () {
      this.$emit('escape');
    },
  },
};
</script>
