<template>
  <dt-popover
    width-content="anchor"
    :open="open"
    :has-caret="false"
    :fixed-alignment="fixedAlignment"
    fixed-vertical-alignment="bottom"
    padding="small"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #anchor="{ attrs }">
      <!-- @slot Anchor element that activates the dropdown. -->
      <slot name="anchor"></slot>
    </template>
    <template #content>
      <!-- @slot default content -->
      <slot
        name="list"
        :list-props="listProps"
        :get-item-props="getItemProps"
      />
    </template>
  </dt-popover>
</template>

<script>
import {} from './dropdown_constants.js';
import {DtPopover, POPOVER_HORIZONTAL_ALIGNMENT} from '../popover';
import { DtLink } from '../link';
import { DtListItem } from '../list_item';
import {LIST_ITEM_NAVIGATION_TYPES} from "../list_item/list_item_constants";
import { getUniqueString } from '../utils';

export default {
  name: 'DtDropdown',

  components: { DtPopover, DtLink, DtListItem },

  mixins: [],

  props: {
    /**
     * Whether or not the popover content is shown. Supports .sync modifier.
     */
    open: {
      type: Boolean,
      required: true,
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
      default: LIST_ITEM_NAVIGATION_TYPES.TAB,
      validator: (t) => Object.values(LIST_ITEM_NAVIGATION_TYPES).includes(t),
    },

    /**
     * Fixed horizontal alignment of the popover content. If passed, the
     * popover will always display anchored to the left or right of the
     * anchor element. If null, the content will be positioned on whichever
     * side has the most available space relative to the root Vue element.
     * String values must be one of `left` or `right`.
     */
    fixedAlignment: {
      type: String,
      default: 'left',
      validator: (align) => {
        return POPOVER_HORIZONTAL_ALIGNMENT.includes(align);
      },
    },

    /**
     * An array of items to be shown in the list. This should include only items
     * that are selectable, i.e. not dividers or subheaders.
     */
    /* eslint-disable vue/no-unused-properties */
    items: {
      type: Array,
      default: () => [],
    },
    /* eslint-enable vue/no-unused-properties */
  },

  data () {
    return {
    };
  },

  computed: {
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
    }
  },

  watch: {},

  methods: {
    getItemId (i) {
      return `${this.listId}-item${i}`;
    },
  },
};
</script>

<style lang="less">

</style>
