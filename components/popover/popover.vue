<template>
  <component :is="elementType">
    <div
      v-if="open && modal"
      class="d-modal"
      aria-hidden="false"
      @click="closePopover"
    />
    <div
      :id="!ariaLabelledby && labelledBy"
      ref="anchor"
    >
      <!-- @slot Anchor element that activates the popover. -->
      <slot
        name="anchor"
        :attrs="{
          'aria-expanded': open.toString(),
          'aria-controls': id,
          'aria-haspopup': role,
        }"
      />
    </div>
    <dt-lazy-show
      :id="id"
      ref="content"
      :role="role"
      data-qa="dt-popover"
      :aria-hidden="`${!open}`"
      :aria-labelledby="labelledBy"
      :aria-label="ariaLabel"
      :aria-modal="isDialog"
      :transition="transition"
      :show="open"
      :class="[
        'popover',
        'd-bgc-white',
        'd-bc-black-075',
        'd-bs-md',
        'd-wmx-unset',
        'd-bar4',
        POPOVER_PADDING_CLASSES[padding],
        `dt-popover__content--align-${horizontalAlignment}`,
        `dt-popover__content--valign-${verticalAlignment}`,
        'd-m0',
        contentClass,
      ]"
      tabindex="-1"
      @after-leave="onLeave"
    >
      <!-- @slot content that is displayed in the popover when it is open. -->
      <slot name="content" />
      <div
        v-if="hasCaret"
        class="d-bgc-white d-mtn4 d-bt d-bl d-bc-black-075 dt-popover__caret d-ps-absolute d-w6 d-h6"
      />
    </dt-lazy-show>
  </component>
</template>

<script>
import tippy from 'tippy.js/headless';
import { hideOnEsc, getArrowDetected } from '../tooltip/modifiers';
import {
  POPOVER_HORIZONTAL_ALIGNMENT,
  POPOVER_PADDING_CLASSES,
  POPOVER_ROLES,
  POPOVER_VERTICAL_ALIGNMENT,
  TIPPY_HORIZONTAL_ALIGNMENT,
} from './popover_constants';
import { getUniqueString } from '../utils';
import DtLazyShow from '../lazy_show/lazy_show';
import { TOOLTIP_HIDE_ON_CLICK_VARIANTS, TOOLTIP_TIPPY_DIRECTIONS } from '../tooltip';

export default {
  name: 'DtPopover',

  /********************
   * CHILD COMPONENTS *
   ********************/
  components: {
    DtLazyShow,
  },

  props: {
    /**
     * Element type (tag name) of the root element of the component.
     */
    elementType: {
      type: String,
      default: 'div',
    },

    /**
     * Named transition when the content display is toggled.
     * @see DtLazyShow
     */
    transition: {
      type: String,
      default: 'fade',
    },

    /**
     * ARIA role for the content of the popover. Defaults to "dialog".
     * @see https://www.w3.org/TR/wai-aria/#aria-haspopup
     */
    role: {
      type: String,
      default: 'dialog',
      validator: (role) => {
        return POPOVER_ROLES.includes(role);
      },
    },

    /**
     * ID of the element that serves as the label for the popover content.
     * Defaults to the "anchor" element; this exists to provide a different
     * ID of the label element if, for example, the anchor slot contains
     * other items that do not serve as a label. You should provide this
     * or ariaLabel, but not both.
     */
    ariaLabelledby: {
      type: String,
      default: null,
    },

    /**
     * Descriptive label for the popover content. You should provide this
     * or ariaLabelledby, but not both.
     */
    ariaLabel: {
      type: String,
      default: null,
    },

    /**
     * Whether or not the popover content is shown. Supports .sync modifier.
     */
    open: {
      type: Boolean,
      required: true,
    },

    /**
     * Padding size class for the popover content.
     */
    padding: {
      type: String,
      default: 'large',
      validator: (padding) => {
        return !!POPOVER_PADDING_CLASSES[padding];
      },
    },

    /**
     * Fixed vertical alignment of the popover content. If passed, the popover
     * will always display anchored to the top or bottom of the anchor element.
     * If null, the content will be positioned on whichever side has the most
     * available space relative to the root Vue element. String values must be
     * one of `top` or `bottom`.
     */
    fixedVerticalAlignment: {
      type: String,
      default: null,
      validator: (align) => {
        return POPOVER_VERTICAL_ALIGNMENT.includes(align);
      },
    },

    /**
     * Fixed horizontal alignment of the popover content. If passed, the
     * popover will always display anchored to the left or right of the
     * anchor element. If null, the content will be positioned on whichever
     * side has the most available space relative to the root Vue element.
     * String values must be one of `left` or `right`.
     */
    fixedAlignment: {
      type: String,
      default: null,
      validator: (align) => {
        return POPOVER_HORIZONTAL_ALIGNMENT.includes(align);
      },
    },

    /**
     * Additional class name for the content wrapper element.
     */
    contentClass: {
      type: String,
      default: '',
    },

    /**
     * Whether or not a carat (arrow) should be shown from the content pointing
     * at the anchor.
     */
    hasCaret: {
      type: Boolean,
      default: true,
    },

    focusAnchorOnClose: {
      type: Boolean,
      default: true,
    },

    /**
     * The id of the tooltip
     */
    id: {
      type: String,
      default () { return getUniqueString(); },
    },

    /**
     *  Displaces the tippy from its reference element
     *  in pixels (skidding and distance).
     */
    offset: {
      type: Array,
      default: () => [0, 10],
    },

    /**
     * The element to append the tippy to.
     */
    appendTo: {
      type: [String, HTMLElement],
      default: () => document.body,
    },

    /**
     * Determines if the tippy has interactive content inside of it,
     * so that it can be hovered over and clicked inside without hiding.
     */
    interactive: {
      type: Boolean,
      default: true,
    },

    /**
     * This describes the area that the element
     * will be checked for overflow relative to.
     */
    flipBoundary: {
      type: [String, HTMLElement],
      default: 'popper',
    },

    /**
     * Determines the size of the invisible border around the
     * tippy that will prevent it from hiding if the cursor left it.
     * */
    interactiveBorder: {
      type: Number,
      default: 2,
    },

    /**
     * Determines the events that cause the tippy to show.
     * Multiple event names are separated by spaces.
     * **/
    trigger: {
      type: String,
      default: 'click',
    },

    /***
     * Determines if the tippy hides upon clicking the
     * reference or outside of the tippy.
     * The behavior can depend upon the trigger events used.
     * */
    hideOnClick: {
      type: [Boolean, String],
      default: true,
      validator (value) {
        return TOOLTIP_HIDE_ON_CLICK_VARIANTS.some(variant => variant === value);
      },
    },

    modal: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['update:open'],

  data: () => ({
    POPOVER_PADDING_CLASSES,
    verticalAlignment: '',
    horizontalAlignment: '',
  }),

  computed: {
    fallbackPlacements () {
      if (this.fixedAlignment === null && this.fixedVerticalAlignment === null) {
        return POPOVER_VERTICAL_ALIGNMENT
          .filter(verticalAlignment => verticalAlignment)
          .map(verticalAlignment => TIPPY_HORIZONTAL_ALIGNMENT
            .map(horizontalAlignment => `${verticalAlignment}-${horizontalAlignment}`))
          .flat();
      }

      if (this.fixedAlignment === null) {
        return TIPPY_HORIZONTAL_ALIGNMENT
          .map(horizontalAlignment => `${this.fixedVerticalAlignment}-${horizontalAlignment}`);
      }

      if (this.fixedVerticalAlignment === null) {
        const horizontalAlignment = this.fixedAlignment === 'left' ? 'start' : 'end';
        return POPOVER_VERTICAL_ALIGNMENT
          .filter(verticalAlignment => verticalAlignment)
          .map(verticalAlignment => `${verticalAlignment}-${horizontalAlignment}`);
      }

      return [];
    },

    placement () {
      const verticalAlignment = this.fixedVerticalAlignment || 'bottom';
      const horizontalAlignment = this.fixedAlignment === 'left' ? 'start' : 'end';
      return `${verticalAlignment}-${horizontalAlignment}`;
    },

    isDialog () {
      return this.role === 'dialog';
    },

    labelledBy () {
      // aria-labelledby should be set only if aria-labelledby is passed as a prop, or if
      // there is no aria-label and the labelledby should point to the anchor.
      return this.ariaLabelledby || (!this.ariaLabel && getUniqueString('DtPopover__anchor'));
    },
  },

  watch: {
    placement (placement) {
      if (TOOLTIP_TIPPY_DIRECTIONS[placement]) {
        this.tip?.setProps({
          placement,
        });
      }
    },

    fallbackPlacements: {
      deep: true,
      handler () {
        this.tip?.setProps({
          popperOptions: this.getPopperOptions(),
        });
      },
    },

    open (isOpen) {
      isOpen ? this.tip.show() : this.tip.hide();
    },

    hideOnClick () {
      this.tip?.setProps({
        hideOnClick: this.hideOnClick,
      });
    },
  },

  mounted () {
    this.verticalAlignment = this.fixedVerticalAlignment;
    const anchor = this.$refs.anchor.children[0];
    const placement = TOOLTIP_TIPPY_DIRECTIONS[this.placement] ? this.placement : this.fallbackPlacements[0];
    this.tip = tippy(anchor, this.getOptions({
      popperOptions: this.getPopperOptions(),
      tippyOptions: {
        placement,
        hideOnClick: this.hideOnClick,
        offset: this.offset,
        interactiveBorder: this.interactiveBorder,
        appendTo: this.appendTo,
        interactive: this.interactive,
        allowHTML: true,
        trigger: this.trigger,
        onHide: this.onHide,
        onMount: this.onMount,
      },
    }));
    if (this.open) {
      this.tip.show();
    }
  },

  beforeDestroy () {
    this.tip?.destroy();
  },

  /******************
   *     METHODS    *
   ******************/
  methods: {
    closePopover () {
      if (this.open && typeof this.hideOnClick === 'boolean' && this.hideOnClick) {
        this.tip.hide();
      }
    },

    onLeave () {
      this.tip.unmount();
      this.$emit('update:open', false);
    },

    onHide () {
      const anchor = this.$refs.anchor.children[0];
      if (this.focusAnchorOnClose) {
        anchor?.focus?.();
      }
      /**
       *  https://atomiks.github.io/tippyjs/v6/all-props/#onhide
       *  return false from 'onHide' lifecycle to cancel a hide based on a condition.
      **/
      return !this.open;
    },

    onMount () {
      if (TOOLTIP_TIPPY_DIRECTIONS[this.placement]) {
        this.tip?.setProps({
          placement: this.placement,
        });
      }
    },

    getPopperOptions () {
      return {
        modifiers: [
          {
            name: 'flip',
            options: {
              boundary: this.flipBoundary,
              fallbackPlacements: this.fallbackPlacements,
            },
          },
          getArrowDetected(({ state }) => {
            this.verticalAlignment = state.placement.includes('top') ? 'top' : 'bottom';
            this.horizontalAlignment = state.placement.includes('start') ? 'left' : 'right';
          }),
        ],
      };
    },

    getOptions ({ popperOptions, tippyOptions } = {}) {
      return {
        popperOptions,
        ...tippyOptions,
        plugins: [hideOnEsc],
        render: () => {
          // The recommended structure is to use the popper as an outer wrapper
          const popper = document.createElement('div');
          popper.className = 'tippy-box d-ps-absolute';
          popper.appendChild(this.$refs.content.$el);
          return {
            popper,
          };
        },
      };
    },
  },
};
</script>

<style lang="less">
@import "../../css/dialtone.less";

.dt-popover__content {
  &--align-right {
    right: @su0;

    .dt-popover__caret {
      right: @su24;
    }
  }

  &--valign-top {
    bottom: 100%;
    margin-top: @su0;
    margin-bottom: @su4;

    .dt-popover__caret {
      bottom: -@su4;
      transform: rotate(225deg);
    }
  }

  &--valign-bottom {
    .dt-popover__caret {
      bottom: 100%;
      top: 0;
      transform: rotate(45deg);
    }
  }
}

.dt-popover__caret {
  transform: rotate(45deg);
}

.tippy-box[data-popper-reference-hidden],
.tippy-box[data-popper-escaped] {
  .popover {
    visibility: hidden;
    pointer-events: none;
  }
}
</style>
