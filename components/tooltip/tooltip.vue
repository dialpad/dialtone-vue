<template>
  <div
    data-qa="dt-tooltip-container"
    :class="tooltipContainerClasses"
  >
    <slot name="anchor" />
    <div
      :class="tooltipClasses"
      data-qa="dt-tooltip"
      v-bind="$attrs"
    >
      {{ message }}
      <template v-if="!message">
        <slot />
      </template>
    </div>
  </div>
</template>

<script>
import { TOOLTIP_DIRECTION_MODIFIERS, TOOLTIP_STATE_MODIFIERS, INVERTED } from './tooltip_constants.js';

export default {
  name: 'DtTooltip',

  inheritAttrs: false,

  props: {
    message: {
      type: String,
      default: '',
    },

    arrowDirection: {
      type: String,
      default: 'bottom-center',
      validator (direction) {
        return TOOLTIP_DIRECTION_MODIFIERS.includes(direction);
      },
    },

    show: {
      type: Boolean,
      default: false,
    },

    hover: {
      type: Boolean,
      default: false,
    },

    inverted: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    tooltipContainerClasses () {
      return [
        'd-ps-relative',
        {
          'd-tooltip--hover': this.hover,
        },
      ];
    },

    tooltipClasses () {
      return [
        'd-tooltip',
        'd-ps-absolute',
        `d-tooltip__arrow--${this.arrowDirection}`,
        `d-tooltip--${this.show ? TOOLTIP_STATE_MODIFIERS.show : TOOLTIP_STATE_MODIFIERS.hide}`,
        {
          [`d-tooltip--${INVERTED}`]: this.inverted,
        },
      ];
    },
  },
};
</script>
