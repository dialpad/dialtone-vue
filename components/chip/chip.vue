<template>
  <span
    :class="chipClasses()"
    data-qa="dt-chip"
    :tabindex="chipTabIndex"
    :aria-labelledby="labelledById"
    @click="onClick"
    @close="onClose"
    @keyup.enter="onClick"
    @keyup.delete="onClose"
  >
    <span
      v-if="$slots.icon"
      data-qa="dt-chip-icon"
      class="d-chip__icon"
    >
      <!-- @slot Chip icon -->
      <slot name="icon" />
    </span>
    <span
      v-if="$slots.default"
      :id="labelledById"
      data-qa="dt-chip-label"
      class="d-truncate"
    >
      <!-- @slot Content within chip -->
      <slot />
    </span>
    {{ interactive }}
    <dt-button
      v-if="!hideClose"
      data-qa="dt-chip-close"
      circle
      importance="clear"
      :aria-label="closeButtonProps.ariaLabel"
      v-bind="closeButtonProps"
      @click="$emit('close')"
    >
      <icon-close />
    </dt-button>
  </span>
</template>

<script>
import IconClose from '@dialpad/dialtone/lib/dist/vue/icons/IconClose';
import { DtButton } from '../button';
import { CHIP_SIZE_MODIFIERS } from './chip_constants';
import { getUniqueString } from '@/common/utils';

export default {
  name: 'DtChip',

  components: {
    IconClose,
    DtButton,
  },

  props: {
    /**
     * A set of props to be passed into the modal's close button. Requires an 'ariaLabel' property.
     */
    closeButtonProps: {
      type: Object,
      required: true,
      validator: (props) => {
        return !!props.ariaLabel;
      },
    },

    /**
     * Hides the close button on the chip
     */
    hideClose: {
      type: Boolean,
      default: false,
    },

    /**
     * The size of the chip.
     * @values xs, sm, md
     * @see https://dialpad.design/components/chip
     */
    size: {
      type: String,
      default: 'md',
      validator: (s) => Object.keys(CHIP_SIZE_MODIFIERS).includes(s),
    },

    /**
     * The interactivity of the chip.
     * Makes chip clickable, apply hover/focus/active style, emit keyboard events etc.
     * @see https://dialpad.design/components/chip
     */
    interactive: {
      type: Boolean,
      default: true,
    },

    /**
     * Id to use for the dialog's aria-labelledby.
     */
    labelledById: {
      type: String,
      default: function () { return getUniqueString(); },
    },
  },

  emits: ['click', 'close'],

  computed: {
    chipTabIndex () {
      return this.interactive ? 0 : -1;
    },
  },

  methods: {
    chipClasses () {
      return [
        'd-chip',
        CHIP_SIZE_MODIFIERS[this.size],
        {
          'd-chip--interactive': this.interactive,
        },
      ];
    },

    onClick () {
      if (this.interactive) {
        this.$emit('click');
      }
    },

    onClose () {
      if (this.interactive) {
        this.$emit('close');
      }
    },
  },
};
</script>
