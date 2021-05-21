<template>
  <div
    data-qa="dt-tooltip-container"
    :tabindex="tabIndex"
    :class="tooltipContainerClasses"
    @mouseover="onHover(true)"
    @focus="onHover(true)"
    @blur="onLeave(false)"
    @mouseleave="onLeave(false)"
    @keyup.esc="onEsc"
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
      isESCPressed: false,
    };
  },

  computed: {
    isTooltipVisible () {
      return this.hover ? (this.isHover && !this.isESCPressed) : (this.show && !this.isESCPressed);
    },

    ariaHidden () {
      return `${!this.isTooltipVisible}`;
    },

    tooltipContainerClasses () {
      return [
        'd-ps-relative',
        {
          'd-tooltip--hover': this.hover && !this.isESCPressed,
        },
      ];
    },

    tooltipClasses () {
      return [
        'd-tooltip',
        'd-ps-absolute',
        `d-tooltip__arrow--${this.arrowDirection}`,
        `d-tooltip--${this.isTooltipVisible ? TOOLTIP_STATE_MODIFIERS.show : TOOLTIP_STATE_MODIFIERS.hide}`,
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

    onLeave () {
      this.isHover = false;
      this.isESCPressed = false;
    },

    onEsc () {
      if (!this.hover && this.show) return;
      this.isESCPressed = true;
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
