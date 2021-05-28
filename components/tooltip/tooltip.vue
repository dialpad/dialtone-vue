<template>
  <div
    :tabindex="tabIndex"
    :class="tooltipContainerClasses"
    class="d-ps-relative d-fl-center d-d-inline-flex"
    @mouseover="onHover(true)"
    @focus="onHover(true)"
    @blur="onLeave(false)"
    @mouseleave="onLeave(false)"
    @keyup.esc="onEsc"
  >
    <div
      :id="id"
      :class="tooltipClasses"
      data-qa="dt-tooltip"
      :aria-hidden="ariaHidden"
      v-bind="$attrs"
    >
      <slot>
        {{ message }}
      </slot>
    </div>
    <div
      :aria-describedby="id"
      data-qa="dt-tooltip-anchor"
    >
      <slot name="anchor" />
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
    /**
     * The id of the tooltip
     */
    id: {
      type: String,
      default () { return getUniqueString(); },
    },

    /**
     * A provided message for the tooltip content
     */
    message: {
      type: String,
      default: '',
    },

    /**
     * Describes the preferred placement of the tooltip
     */
    arrowDirection: {
      type: String,
      default: 'bottom-center',
      validator (direction) {
        return TOOLTIP_DIRECTION_MODIFIERS.includes(direction);
      },
    },

    /**
     * Whether the tooltip should be shown. Anchor can sync on this value
     * by tooltip wrapper to control the tooltip's visibility.
     */
    show: {
      type: Boolean,
      default: false,
    },

    /**
     * Mode of tooltip to control the tooltip's visibility.
     */
    hover: {
      type: Boolean,
      default: true,
    },

    /**
     * Add inverted class
     */
    inverted: {
      type: Boolean,
      default: false,
    },

    /**
     * This property is needed for focus event
     */
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
      if (this.isESCPressed) {
        return false;
      }

      return this.hover ? this.isHover : this.show;
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
        'd-ps-absolute',
        'd-tooltip',
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
      this.isESCPressed = (this.hover && this.isHover) || !this.show;
    },
  },
};
</script>
