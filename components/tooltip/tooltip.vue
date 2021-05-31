<template>
  <div
    :class="tooltipContainerClass"
    class="d-ps-relative d-fl-center d-d-inline-flex"
    @mouseover="onHover(true)"
    @focus.capture="onFocusChild(true)"
    @blur.capture="onLeave(false)"
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
      ref="anchor"
      :tabindex="anchorTabIndex"
      :aria-describedby="id"
      class="d-tooltip--show"
      data-qa="dt-tooltip-anchor"
      @focus="onFocusChild"
      @blur="onLeave(false)"
      @keyup.esc="onEsc"
    >
      <slot name="anchor" />
    </div>
  </div>
</template>

<script>
import { TOOLTIP_DIRECTION_MODIFIERS, TOOLTIP_STATE_MODIFIERS, INVERTED } from './tooltip_constants.js';
import { getUniqueString, findFirstFocusableNode } from '../utils';

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
      isChildFocus: false,
      anchorTabIndex: '-1',
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

    tooltipContainerClass () {
      return {
        'd-tooltip--hover': this.hover && !this.isESCPressed,
        'd-tooltip--open': this.isChildFocus,
      };
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

  mounted () {
    if (findFirstFocusableNode(this.$refs.anchor)) return;
    this.anchorTabIndex = this.tabIndex;
  },

  methods: {
    onFocusChild () {
      this.onHover(true);
      this.isChildFocus = true;
    },

    onHover (isHover) {
      this.isHover = isHover;
    },

    onLeave () {
      this.isHover = false;
      this.isESCPressed = false;
      this.isChildFocus = false;
    },

    onEsc () {
      this.isESCPressed = (this.hover && this.isHover) || !this.show;
      this.isChildFocus = false;
    },
  },
};
</script>

<style lang="less">
// styles for programmatically determining which element is in need of focus
// will be moved to dialtone design
.d-tooltip--open .d-tooltip{
  opacity: 1;
  visibility: visible;
}
</style>
