<template>
  <div
    :class="tooltipContainerClass"
    class="d-ps-relative d-fl-center d-d-inline-flex"
    @focus.capture="onFocus"
    @blur.capture="onBlur"
    @keyup.esc="onEsc"
    @mouseover="onHover"
  >
    <div
      :id="id"
      :class="tooltipClasses"
      data-qa="dt-tooltip"
      role="tooltip"
      :aria-hidden="ariaHidden"
      v-bind="$attrs"
    >
      <slot>
        {{ message }}
      </slot>
    </div>
    <div
      ref="anchor"
      data-qa="dt-tooltip-anchor"
    >
      <slot name="anchor" />
    </div>
  </div>
</template>

<script>
import {
  TOOLTIP_DIRECTION_MODIFIERS,
  TOOLTIP_STATE_MODIFIERS,
  INVERTED,
  TOOLTIP_KIND_MODIFIERS,
} from './tooltip_constants.js';
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
      anchorTabIndex: '-1', // anchor is not tabbable by default
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
        'd-tooltip--hover': this.hover && !this.isESCPressed && !this.isChildFocus,
        'd-tooltip--show': this.isChildFocus,
      };
    },

    shouldShowTooltip () {
      return this.isTooltipVisible || this.isChildFocus;
    },

    tooltipClasses () {
      return [
        'd-ps-absolute',
        'd-tooltip',
        `d-tooltip__arrow--${this.arrowDirection}`,
        {
          [TOOLTIP_KIND_MODIFIERS[INVERTED]]: this.inverted,
          [TOOLTIP_KIND_MODIFIERS[TOOLTIP_STATE_MODIFIERS.show]]: this.shouldShowTooltip,
          [TOOLTIP_KIND_MODIFIERS[TOOLTIP_STATE_MODIFIERS.hide]]: !this.shouldShowTooltip,
        },
      ];
    },
  },

  mounted () {
    if (this.hasFocusableAnchorNode()) {
      /* TODO: In the future we might want to refine this to apply the appropriate aria attrs given the child element
       * type.
       */
      // Add aria description to each anchored child
      this.$refs.anchor?.children?.forEach(child => {
        child.setAttribute('aria-describedby', this.id);
      });
    } else {
      this.$refs.anchor.setAttribute('tabIndex', this.tabIndex);
      this.$refs.anchor.setAttribute('aria-describedby', this.id);
    }
  },

  methods: {
    hasFocusableAnchorNode () {
      return !!findFirstFocusableNode(this.$refs.anchor);
    },

    onFocus () {
      this.onHover(true);
      this.isChildFocus = true;
    },

    onHover (isHover) {
      this.isHover = isHover;
    },

    onBlur () {
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
