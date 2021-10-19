<template>
  <div>
    <div ref="anchor">
      <slot
        name="anchor"
        :attrs="{
          tabIndex: tabIndex,
          'aria-describedby': id,
        }"
      />
    </div>
    <div
      :id="id"
      ref="content"
      :role="role"
      aria-hidden="false"
      data-qa="dt-tooltip"
      :class="[
        'popover',
        'd-bgc-white',
        'd-bc-black-075',
        'd-bs-md',
        'd-wmx-unset',
        'd-bar4',
         POPOVER_PADDING_CLASSES[padding],
        `dt-popover__content--align-${alignment}`,
        `dt-popover__content--valign-${verticalAlignment}`,
        'd-m0',
        contentClass,
      ]"
    >
      <slot>
        {{ message }}
      </slot>
      <div
        v-if="hasCaret"
        class="d-bgc-white d-mtn4 d-bt d-bl d-bc-black-075 dt-popover__caret d-ps-absolute d-w6 d-h6"
      />
    </div>
  </div>
</template>

<script>
import tippy from 'tippy.js/headless';
import { hideOnEsc, getArrowDetected } from '../tooltip/modifiers';
import {
  POPOVER_HORIZONTAL_ALIGNMENT,
  POPOVER_PADDING_CLASSES,
  POPOVER_ROLES,
  POPOVER_VERTICAL_ALIGNMENT,
} from './popover_constants';
import { getUniqueString } from '../utils';
import { TOOLTIP_DIRECTION_MODIFIERS } from '../tooltip';

export default {
  name: 'Popover',

  props: {
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
      default: 'right',
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
     * This property is needed for define fallback placements
     * by providing a list of placements to try.
     * */
    flip: {
      type: Array,
      default: () => ['left-center', 'top-center'],
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
      type: [String, Number],
      default: '0',
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
     * A provided message for the tooltip content
     */
    message: {
      type: String,
      default: '',
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
      type: Boolean,
      default: true,
    },
  },

  data: () => ({
    POPOVER_PADDING_CLASSES,
    verticalAlignment: '',
    show: false,
  }),

  computed: {
    placement () {
      const verticalAlignment = this.fixedVerticalAlignment || 'bottom';
      const horizontalAlignment = this.fixedAlignment === 'left' ? 'start' : 'end';
      return `${verticalAlignment}-${horizontalAlignment}`;
    },

    alignment () {
      return this.fixedAlignment;
    },
  },

  watch: {
    placement (placement) {
      this.tip?.setProps({
        placement,
      });
    },
  },

  mounted () {
    this.verticalAlignment = this.fixedVerticalAlignment;
    const anchor = this.$refs.anchor.children[0];
    this.tip = tippy(anchor, this.getOptions({
      popperOptions: this.getPopperOptions(),
      tippyOptions: {
        placement: this.placement,
        hideOnClick: this.hideOnClick,
        offset: this.offset,
        interactiveBorder: this.interactiveBorder,
        appendTo: this.appendTo,
        interactive: this.interactive,
        allowHTML: true,
        trigger: this.trigger,
        animation: true,
        delay: [180, 180],
        onHide: (instance) => {
          const box = instance.popper.firstElementChild;
          this.$emit('update:open', false);
          if (this.focusAnchorOnClose) {
            anchor?.focus?.();
          }
          this.animateHide(box, instance);
        },
        onMount: instance => {
          const box = instance.popper.firstElementChild;
          this.animateShow(box);
          this.$emit('update:open', true);
        },
      },
    }));
  },

  beforeDestroy () {
    this.tip?.destroy();
  },

  methods: {
    convertTippyToPopperVerticalPlacement (tippyPlacement) {
      return tippyPlacement.includes('top') ? 'top' : 'bottom';
    },

    getPopperOptions () {
      return {
        modifiers: [
          {
            name: 'flip',
            options: {
              boundary: this.flipBoundary,
            },
          },
          getArrowDetected(({ state }) => {
            this.verticalAlignment = this.convertTippyToPopperVerticalPlacement(state.placement);
          }),
        ],
      };
    },

    animateShow (box) {
      requestAnimationFrame(() => {
        box.classList.add('fade-in');
        box.classList.remove('fade-out');
      });
    },

    animateHide (box, instance) {
      box.classList.remove('fade-in');
      box.classList.add('fade-out');

      setTimeout(() => {
        requestAnimationFrame(() => {
          instance.unmount();
        });
      }, 150);
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
          popper.appendChild(this.$refs.content);
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
