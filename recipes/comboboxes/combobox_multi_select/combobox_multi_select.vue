<template>
  <dt-recipe-combobox-with-popover
    ref="comboboxWithPopover"
    list-aria-label="listAriaLabel"
    :show-list="showList"
    :max-height="listMaxHeight"
    :popover-offset="offset"
    content-width="anchor"
    @select="onComboboxSelect"
  >
    <template #input>
      <div
        @keydown.left="onLeftKey"
        @keydown.right="onRightKey"
      >
        <span
          ref="chipsWrapper"
          class="d-combobox-multi-select_chip-wrapper d-ps-absolute"
        >
          <dt-chip
            v-for="item in selectedItems"
            ref="chips"
            :key="item.id"
            class="d-m4 d-d-inline-flex d-zi-base1"
            :close-button-props="{ ariaLabel: 'close' }"
            @left-key="onLeftKey"
            @right-key="onRightKey"
            @close="onChipRemove(item)"
          >
            {{ item }}
          </dt-chip>
        </span>

        <dt-input
          ref="input"
          v-model="value"
          class="d-combobox-multi-select_input d-fl-grow1 d-mb4"
          :label="label"
          :description="description"
          :placeholder="placeHolder"
          @input="onInput"
          @keyup.delete="onDeleteKey"
        />

        <dt-validation-messages
          :validation-messages="maxSelectedMessage"
          :show-messages="showValidationMessages"
        />
      </div>
    </template>

    <!-- @slot slot for popover header -->
    <template #header>
      <div
        v-if="$slots.header"
        ref="header"
      >
        <slot
          name="header"
        />
      </div>
    </template>

    <!-- @slot slot for popover list -->
    <template #list>
      <div
        ref="list"
      >
        <slot
          v-if="!loading"
          name="list"
        />
        <div
          v-else
          class="d-m4"
        >
          {{ loadingMessage }}
        </div>
      </div>
    </template>

    <!-- @slot slot for popover footer -->
    <template #footer>
      <div
        v-if="$slots.footer"
        ref="footer"
      >
        <slot
          name="footer"
        />
      </div>
    </template>
  </dt-recipe-combobox-with-popover>
</template>

<script>
import { DtRecipeComboboxWithPopover, DtInput, DtChip, DtValidationMessages } from '@';

export default {
  name: 'DtRecipeComboboxMultiSelect',

  components: {
    DtRecipeComboboxWithPopover,
    DtInput,
    DtChip,
    DtValidationMessages,
  },

  props: {
    /**
     * Label for the combobox
     */
    label: {
      type: String,
      default: null,
    },

    /**
     * Description for the combobox
     */
    description: {
      type: String,
      default: null,
    },

    // @TODO: https://dialpad.atlassian.net/browse/DP-52324
    // type: {
    //   type: String,
    //   values: ['input', 'select'],
    //   default: 'select',
    // },

    /**
     * Determines if the list is loading
     */
    loading: {
      type: Boolean,
      default: false,
    },

    /**
     * The message when the list is loading
     */
    loadingMessage: {
      type: String,
      default: 'loading...',
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
     * Determines maximum height for the popover before overflow.
     * Possible units rem|px|em
     */
    listMaxHeight: {
      type: String,
      default: '300px',
    },

    /**
     * The selected items
     */
    selectedItems: {
      type: Array,
      default: function () { return []; },
    },

    /**
     * Would be the maximum number of selections you can make. 0 is unlimited
     */
    maxSelected: {
      type: Number,
      default: 0,
    },

    /**
     * Max select message when the max selections has been reached with the structure:
     * `[{"message": string, "type": VALIDATION_MESSAGE_TYPES }]`
     */
    maxSelectedMessage: {
      type: Array,
      default: function () { return []; },
    },
  },

  emits: ['input', 'select', 'remove', 'max-selected'],

  data () {
    return {
      value: '',
      offset: [0, 0],
      showValidationMessages: false,
      initialInputPadding: {},
    };
  },

  computed: {
    placeHolder () {
      return this.selectedItems?.length > 0 ? '' : 'Select one or start typing';
    },
  },

  watch: {
    selectedItems () {
      // Required to push handling of this to end of queue stack
      // Otherwise we will get the width before chip changes
      setTimeout(() => {
        this.setInputPadding();
        this.checkMaxSelected();
      }, 0);
    },

    label () {
      setTimeout(() => {
        // Adjust the chips position if label changed
        this.setChipsTopPosition();
      }, 0);
    },

    description () {
      setTimeout(() => {
        // Adjust the chips position if description changed
        this.setChipsTopPosition();
      }, 0);
    },
  },

  mounted () {
    this.setChipsTopPosition();
    this.setInputPadding();
    this.checkMaxSelected();
  },

  methods: {
    onInput (value) {
      this.$emit('input', value);
    },

    onChipRemove (item) {
      this.$emit('remove', item);
      this.$refs.input.focus();
    },

    onComboboxSelect (i) {
      this.value = '';
      this.$emit('select', i);
    },

    getLastChip () {
      return this.$refs.chips && this.$refs.chips[this.$refs.chips.length - 1];
    },

    onLeftKey (event) {
      if (this.selectedItems.length === 0) {
        return;
      }
      // If the cursor is at the start of the text, it would select the last chip
      if (event.target.selectionStart === 0) {
        this.moveFromInputToChip();
      } else if (event.target.type !== 'text') {
        // Move to the previous chip
        this.navigateBetweenChips(event.target, true);
      }
    },

    onRightKey (event) {
      if (this.selectedItems.length === 0) {
        return;
      }
      // If the cursor is on the last chip, it would move into the input
      if (event.target.id === this.getLastChip().$el.id) {
        this.moveFromChipToInput();
      } else if (event.target.type !== 'text') {
        // Move to the next chip
        this.navigateBetweenChips(event.target, false);
      }
    },

    moveFromInputToChip () {
      this.getLastChip().select();
      this.$refs.input.blur();
      this.$refs.comboboxWithPopover.closeComboboxList();
    },

    moveFromChipToInput () {
      this.getLastChip().blur();
      this.$refs.input.focus();
      this.$refs.comboboxWithPopover.showComboboxList();
    },

    navigateBetweenChips (target, toLeft) {
      const from = this.$refs.chips.map(chip => chip.$el).indexOf(target);
      const to = toLeft ? from - 1 : from + 1;
      if (to < 0 || to >= this.$refs.chips.length) {
        return;
      }
      this.$refs.chips[from].blur();
      this.$refs.chips[to].select();
      this.$refs.comboboxWithPopover.closeComboboxList();
    },

    onDeleteKey (event) {
      if (event.key !== 'Backspace') {
        return;
      }
      // If the cursor is at the start of the text, you press backspace,
      // this focuses the last chip but not delete the item immediately
      if (this.selectedItems.length > 0 && event.target.selectionStart === 0) {
        this.moveFromInputToChip();
      }
    },

    setChipsTopPosition () {
      // To place the chips in the input box
      // The chip "top" position should be the same line as the input box
      if (!this.$refs.input) {
        return;
      }
      const input = this.$refs.input.$refs.input;
      const top = input.getBoundingClientRect().top + 2;
      const chipsWrapper = this.$refs.chipsWrapper;
      chipsWrapper.style.top = top + 'px';
    },

    setInputPadding () {
      const lastChip = this.getLastChip()?.$el;
      const input = this.$refs.input.$refs.input;
      if (!lastChip) {
        // Revert padding if no chip
        this.revertInputPadding(input);
        return;
      }

      // Get the position of the last chip
      // The input cursor should be the same "top" as that chip and next besides it
      const left = lastChip.offsetLeft + this.getFullWidth(lastChip);
      input.style.paddingLeft = left + 'px';

      // Chip has 4px vertical margin. We add 4px to top make the input text the same "top" with the chip
      const top = lastChip.offsetTop + 4;
      input.style.paddingTop = top + 'px';

      // This is to force re-render popover
      // If the new chip goes to the next line and the input box expands,
      // move the popover down to the next line. Same when chips are removed
      this.offset = [0, 0];
    },

    getFullWidth (el) {
      const styles = window.getComputedStyle(el);
      return el.offsetWidth + parseInt(styles.marginLeft) + parseInt(styles.marginRight);
    },

    revertInputPadding (input) {
      input.style.paddingLeft = '';
      input.style.paddingTop = '';
      input.style.paddingBottom = '';
    },

    checkMaxSelected () {
      if (this.maxSelected === 0) return;
      if (this.selectedItems.length >= this.maxSelected) {
        this.showValidationMessages = true;
        this.$emit('max-selected');
      } else {
        this.showValidationMessages = false;
      }
    },
  },
};
</script>
