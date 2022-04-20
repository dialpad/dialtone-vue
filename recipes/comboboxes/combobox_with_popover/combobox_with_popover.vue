<template>
  <dt-combobox
    :show-list="showList"
    :on-beginning-of-list="onBeginningOfList"
    :on-end-of-list="onEndOfList"
    :list-aria-label="listAriaLabel"
  >
    <template
      #input
    >
      <slot name="input" />
    </template>
    <template #list="{ opened }">
      <dt-popover
        :open="true"
        :hide-on-click="false"
        :max-height="maxHeight"
        :max-width="maxWidth"
        placement="bottom-start"
        padding="small"
        :modal="false"
        :auto-focus="false"
        @opened="opened"
      >
        <template #anchor>
          <div class="d-h0 d-vi-hidden" />
        </template>

        <template #headerContent>
          <slot name="header" />
        </template>

        <template #content>
          <ul
            :id="listId"
            ref="listWrapper"
            :class="['d-ps-relative', 'd-px0', DROPDOWN_PADDING_CLASSES[padding], listClass]"
          >
            <slot name="list" />
          </ul>
        </template>

        <template #footerContent>
          <slot name="footer" />
        </template>
      </dt-popover>
    </template>
  </dt-combobox>
</template>

<script>
import { DtCombobox, DtPopover } from '@';
import { getUniqueString } from '@/common/utils';
import {
  DROPDOWN_PADDING_CLASSES,
} from '@/components/dropdown/dropdown_constants';
import {} from './combobox_with_popover_constants.js';
import KeyboardNavigation from '@/common/mixins/keyboard_list_navigation';

export default {
  name: 'DtRecipeComboboxWithPopover',

  components: {
    DtCombobox,
    DtPopover,
  },

  mixins: [
    KeyboardNavigation({
      indexKey: 'highlightIndex',
      idKey: 'highlightId',
      listElementKey: 'getListElement',
      afterHighlightMethod: 'afterHighlight',
      beginningOfListMethod: 'beginningOfListMethod',
      endOfListMethod: 'endOfListMethod',
      activeItemKey: 'activeItemEl',
    }),
  ],

  /* inheritAttrs: false is generally an option we want to set on library
    components. This allows any attributes passed in that are not recognized
    as props to be passed down to another element or component using v-bind:$attrs
    more info: https://vuejs.org/v2/api/#inheritAttrs */
  // inheritAttrs: false,

  props: {
    /**
     * String to use for the list's aria-label.
     */
    listAriaLabel: {
      type: String,
      required: true,
    },

    /**
     * Determines when to show the list element and also controls the aria-expanded attribute.
     */
    showList: {
      type: Boolean,
      default: false,
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
     * Additional class for the wrapper list element.
     */
    listClass: {
      type: [String, Array, Object],
      default: '',
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

    /**
     * Determines maximum height for the popover before overflow.
     * Possible units rem|px|em
     */
    maxHeight: {
      type: String,
      default: '',
    },

    /**
     * Determines maximum width for the popover before overflow.
     * Possible units rem|px|%|em
     */
    maxWidth: {
      type: String,
      default: '',
    },

    /**
     * Vertical padding size around the list element.
     */
    padding: {
      type: String,
      default: 'small',
      validator: (padding) => {
        return Object.keys(DROPDOWN_PADDING_CLASSES).some((item) => item === padding);
      },
    },
  },

  data () {
    return {
      DROPDOWN_PADDING_CLASSES,
    };
  },

  computed: {},

  watch: {},

  methods: {
    getListElement () {
      return this.$refs.listWrapper;
    },
  },
};
</script>

<style lang="less">

</style>
