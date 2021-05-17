<template>
  <div
    data-qa="dt-tooltip-container"
    :tabindex="tabIndex"
    :class="tooltipContainerClasses "
    @mouseover="onHover(true)"
    @focus="onHover(true)"
    @blur="onHover(false)"
    @mouseleave="onHover(false)"
  >
    <div
      :aria-describedby="id"
    >
      <slot name="anchor" />
    </div>

    <div
      :id="id"
      :class="tooltipClasses"
      data-qa="dt-tooltip"
      :aria-hidden="ariaHidden"
      role="tooltip"
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
import { getUniqueString } from '../utils';

export default {
  name: 'DtTooltip',

  inheritAttrs: false,

  props: {
    id: {
      type: String,
      default () { return getUniqueString(); },
    },

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

    tabIndex: {
      type: String,
      default: '0',
    },
  },

  data () {
    return {
      isHover: false,
    };
  },

  computed: {
    ariaHidden () {
      const ariaHidden = this.hover ? this.isHover : this.show;

      return `${!ariaHidden}`;
    },

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

  methods: {
    onHover (isHover) {
      this.isHover = isHover;
    },
  },
};
</script>

<style lang="less" scoped>
.d-tooltip--hover:focus {
  .d-tooltip {
    visibility: visible;
    opacity: 1;
  }
}
</style>
