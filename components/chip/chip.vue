<template>
  <!-- temporarily use button classes before d-chip is added to dialtone -->
  <span
    class="d-btn"
    data-qa="dt-chip"
  >
    <span
      v-if="$slots.icon"
      class="base-button__icon d-btn__icon"
    >
      <!-- @slot Chip icon -->
      <slot name="icon" />
    </span>
    <span
      v-if="$slots.default"
      data-qa="dt-chip-label"
    >
      <!-- @slot Content within chip -->
      <slot />
    </span>
    <dt-button
      v-if="showRemoveIcon"
      circle
      importance="clear"
      size="xs"
      @click="$emit('close')"
    >
      <icon-close />
    </dt-button>
  </span>
</template>

<script>
import IconClose from '@dialpad/dialtone/lib/dist/vue/icons/IconClose';
import { DtButton } from '../button';

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
    showRemoveIcon: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['click'],

  data () {
    return {};
  },

  computed: {},

  watch: {},

  methods: {},
};
</script>
