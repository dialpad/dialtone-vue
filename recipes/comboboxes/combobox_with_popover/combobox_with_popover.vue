<template>
  <dt-combobox
    :show-list="true"
    :on-beginning-of-list="onBeginningOfList"
    :on-end-of-list="onEndOfList"
    :list-aria-label="listAriaLabel"
    @select="onSelect"
    @escape="onEscape"
    v-on="$listeners"
  >
    <template
      #input
    >
      <div
        id="externalAnchor"
        @keydown.tab="closeComboboxList"
        @focusin="showComboboxList"
      >
        <slot
          name="input"
          :input-props="inputProps"
        />
      </div>
    </template>
    <template #list="{ opened }">
      <dt-popover
        v-model:open="isListShown"
        :hide-on-click="true"
        :max-height="maxHeight"
        :max-width="maxWidth"
        placement="bottom-start"
        padding="small"
        role="listbox"
        external-anchor="externalAnchor"
        :content-width="contentWidth"
        :content-tabindex="null"
        :modal="false"
        :auto-focus="false"
        @opened="opened($event, arguments[1]);"
      >
        <template #anchor>
          <div class="d-h0 d-vi-hidden" />
        </template>

        <template #headerContent>
          <slot name="header" />
        </template>

        <template #content>
          <div
            ref="listWrapper"
            :class="[DROPDOWN_PADDING_CLASSES[padding], listClass]"
          >
            <slot
              name="list"
              :list-props="listProps"
            />
          </div>
        </template>

        <template #footerContent>
          <slot name="footer" />
        </template>
      </dt-popover>
    </template>
  </dt-combobox>
</template>

<script>
import { DtCombobox, DtPopover, POPOVER_CONTENT_WIDTHS } from '@';
import { getUniqueString } from '@/common/utils';
import {
  DROPDOWN_PADDING_CLASSES,
} from '@/components/dropdown/dropdown_constants';

export default {
  name: 'DtRecipeComboboxWithPopover',

  components: {
    DtCombobox,
    DtPopover,
  },

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
     * Leaving this null will have the combobox trigger on input focus by default.
     * If you set this value, the default trigger behavior will be disabled and you can
     * control it as you need.
     */
    showList: {
      type: Boolean,
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

    /**
     * Width configuration for the popover content. When its value is 'anchor',
     * the popover content will have the same width as the anchor.
     */
    contentWidth: {
      type: String,
      default: null,
      validator: contentWidth => POPOVER_CONTENT_WIDTHS.includes(contentWidth),
    },
  },

  emits: ['select', 'escape', 'highlight'],

  data () {
    return {
      DROPDOWN_PADDING_CLASSES,
      isListShown: false,
      isInputFocused: false,
      isListFocused: false,
    };
  },

  computed: {
    inputProps () {
      return {
        'aria-activedescendant': this.activeItemId,
        'aria-controls': this.listId,
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
  },

  watch: {
    showList: {
      handler: function (show) {
        if (show !== null) {
          this.isListShown = show;
        }
      },

      immediate: true,
    },
  },

  methods: {
    showComboboxList () {
      if (this.showList != null) { return; }
      this.isListShown = true;
    },

    closeComboboxList () {
      if (this.showList != null) { return; }
      this.isListShown = false;
    },

    onSelect (highlightIndex) {
      this.$emit('select', highlightIndex);
    },

    onEscape () {
      this.closeComboboxList();
    },
  },
};
</script>

<style lang="less">

</style>
