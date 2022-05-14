<template>
  <span
    :class="chipClasses()"
    data-qa="dt-chip"
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
      data-qa="dt-chip-label"
      class="d-truncate"
    >
      <!-- @slot Content within chip -->
      <slot />
    </span>
    <dt-button
      v-if="showCloseIcon"
      data-qa="dt-chip-close"
      circle
      importance="clear"
      :aria-label="$i18n('Close')"
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

export default {
  name: 'DtChip',

  components: {
    IconClose,
    DtButton,
  },

  inheritAttrs: false,

  props: {
    /**
     * Whether the chip has a remove button
     */
    showCloseIcon: {
      type: Boolean,
      default: true,
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
     * @see https://dialpad.design/components/chip
     */
    interactive: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['click'],

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
  },
};
</script>
