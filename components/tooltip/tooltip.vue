<template>
  <div
    class="d-tooltip-container"
    data-qa="dt-tooltip-container"
    @focus.capture="onFocus"
    @blur.capture="onBlur"
    @keyup.esc="onEsc"
    @mouseover="onHover"
    @mouseleave="onBlur"
  >
    <div
      :id="id"
      :class="[
        'd-ps-absolute',
        'd-tooltip',
        `d-tooltip__arrow--${arrowDirection}`,
        TOOLTIP_KIND_MODIFIERS[shouldShowTooltip ? 'show' : 'hide'],
        {
          [ TOOLTIP_KIND_MODIFIERS.hover ]: shouldHasHoverModifier,
          [ TOOLTIP_KIND_MODIFIERS.inverted ]: inverted,
        },
      ]"
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
      isHover: false, // is hovered local state
      isESCPressed: false, // is escape key pressed local state
      isChildFocused: false, // is child element focused local state
      anchorTabIndex: '-1', // anchor is not tabbable by default
      TOOLTIP_KIND_MODIFIERS,
    };
  },

  computed: {
    isTooltipVisible () {
      if (this.isESCPressed) {
        return false;
      }

      return this.hover ? this.isHover : this.show;
    },

    shouldShowTooltip () {
      return this.isTooltipVisible || this.isChildFocused;
    },

    shouldHasHoverModifier () {
      return this.hover && !this.isESCPressed && !this.isChildFocused;
    },

    shouldHasShowModifier () {
      return this.isChildFocused;
    },

    ariaHidden () {
      return `${!this.isTooltipVisible}`;
    },
  },

  mounted () {
    this.initAttributes();
  },

  beforeUpdate () {
    this.initAttributes();
  },

  methods: {
    initAttributes () {
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

    hasFocusableAnchorNode () {
      return !!findFirstFocusableNode(this.$refs.anchor);
    },

    onFocus () {
      this.onHover();
      this.isChildFocused = true;
    },

    onHover () {
      this.isHover = true;
    },

    onBlur () {
      this.isHover = false;
      this.isESCPressed = false;
      this.isChildFocused = false;
    },

    onEsc () {
      this.isESCPressed = (this.hover && this.isHover) || !this.show;
      this.isChildFocused = false;
    },
  },
};
</script>
