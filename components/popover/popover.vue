<template>
  <component
    :is="elementType"
    ref="popover"
    data-qa="dt-popover-container"
  >
    <dt-lazy-show
      v-if="modal"
      ref="overlay"
      :show="modal && isOpeningPopover"
      transition="d-zoom"
      class="
        d-popover-overlay
        d-ps-fixed
        d-all0
        d-fl-center
        d-fd-column
        d-vi-visible
        d-zi-modal
        d-o100
        d-bgc-black-900
      "
      @click.self="closePopover"
    />
    <div
      :id="!ariaLabelledby && labelledBy"
      ref="anchor"
      data-qa="dt-popover-anchor"
    >
      <!-- @slot Anchor element that activates the popover. -->
      <slot
        name="anchor"
        :attrs="{
          'aria-expanded': showPopover.toString(),
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
      :aria-hidden="`${!showPopover}`"
      :aria-labelledby="labelledBy"
      :aria-label="ariaLabel"
      :aria-modal="isDialog"
      :transition="transition"
      :show="showPopover"
      :class="[
        'dt-popover-box',
        'd-bgc-white',
        'd-bc-black-075',
        'd-bs-md',
        'd-wmx-unset',
        'd-bar4',
        'd-of-auto',
        `dt-popover__content--align-${horizontalAlignment}`,
        `dt-popover__content--valign-${verticalAlignment}`,
        {
          'd-d-grid d-of-hidden dt-popover-box__grid': fixedHeader,
        },
      ]"
      :style="maxHeight ? `max-height:${maxHeight}` : ''"
      tabindex="-1"
      appear
      @keydown="onKeydown"
      @after-leave="onLeave"
      @enter="isOpeningPopover = true"
      @leave="isOpeningPopover = false"
      @after-enter="afterEnter"
    >
      <div
        v-if="hasCaret"
        class="d-bgc-white d-mtn4 d-bt d-bl d-bc-black-075 dt-popover__caret d-ps-absolute d-w6 d-h6"
      />
      <!-- @slot header that is displayed in the popover when it is provided. -->
      <div
        v-if="isPopoverHeaderVisible"
        data-qa="dt-popover-header"
        :class="[
          'd-w100p',
          'd-py4',
          'd-pl12',
          'd-pr4',
          'd-bb',
          'd-bc-black-075',
          'd-baw1',
          'd-d-flex',
          isTitleVisible ? 'd-jc-space-between' : 'd-jc-flex-end',
          popoverHeaderClasses,
          headerClass,
        ]"
      >
        <div
          v-if="isTitleVisible"
          class="d-fs16 d-py6 d-d-flex d-as-center"
          data-qa="dt-popover-title"
        >
          <slot name="title" />
        </div>
        <div
          v-if="areHeaderButtonsVisible"
          class="d-d-flex d-ai-baseline d-jc-space-between"
        >
          <slot name="header-actions">
            <dt-button
              circle
              class="d-p6 d-bc-transparent"
              importance="outlined"
            >
              <template #icon>
                <icon-close
                  class="d-svg--size20"
                />
              </template>
            </dt-button>

            <dt-button
              circle
              class="d-p6 d-bc-transparent"
              importance="outlined"
            >
              <template #icon>
                <icon-close
                  class="d-svg--size20"
                />
              </template>
            </dt-button>
          </slot>
          <dt-button
            v-if="showCloseButton"
            circle
            class="d-p6 d-bc-transparent"
            importance="outlined"
            @click="closePopover"
          >
            <template #icon>
              <icon-close
                class="d-svg--size20"
              />
            </template>
          </dt-button>
        </div>
      </div>
      <!-- @slot content that is displayed in the popover when it is open. -->
      <div
        ref="popover__content"
        data-qa="dt-popover-content"
        :class="[
          'dt-popover__content',
          POPOVER_PADDING_CLASSES[padding],
          {
            'd-of-auto': fixedHeader,
          },
          contentClass,
        ]"
        @scroll="onScrollContent"
      >
        <slot name="content" />
      </div>
    </dt-lazy-show>
  </component>
</template>

<script>
import tippy from 'tippy.js/headless';
import { hideOnEsc, getArrowDetected } from '../tooltip/modifiers';
import {
  POPOVER_CONTENT_WIDTHS,
  POPOVER_HORIZONTAL_ALIGNMENT,
  POPOVER_PADDING_CLASSES,
  POPOVER_ROLES,
  POPOVER_VERTICAL_ALIGNMENT,
} from './popover_constants';
import { getUniqueString } from '../utils';
import DtLazyShow from '../lazy_show/lazy_show';
import { TOOLTIP_HIDE_ON_CLICK_VARIANTS } from '../tooltip';
import ModalMixin from '../mixins/modal.js';
import DtButton from '../button/button';
import IconClose from '@dialpad/dialtone/lib/dist/vue/icons/IconClose';

export default {
  name: 'DtPopover',

  /********************
   * CHILD COMPONENTS *
   ********************/
  components: {
    DtButton,
    DtLazyShow,
    IconClose,
  },

  mixins: [ModalMixin],

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
     * Width configuration for the popover content. 'anchor' is one possible string value.
     * If passed, the popover content will be set same width with anchor element onShow popover event
     */
    contentWidth: {
      type: String,
      default: null,
      validator: contentWidth => POPOVER_CONTENT_WIDTHS.includes(contentWidth),
    },

    /**
     * Whether or not a carat (arrow) should be shown from the content pointing
     * at the anchor.
     */
    hasCaret: {
      type: Boolean,
      default: true,
    },

    /**
     * Determines should the anchor be focused after closing the popover
     */
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
      type: [Number, Array],
      default: () => [0, 4],
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
      type: [String, HTMLElement, Array],
      default: 'clippingParents',
      validator (boundary) {
        if (typeof boundary === 'string') {
          return boundary === 'clippingParents';
        }

        if (Array.isArray(boundary)) {
          return boundary.every(el => el instanceof HTMLElement);
        }

        return boundary instanceof HTMLElement;
      },
    },

    /**
     * Determines the size of the invisible border around the
     * tippy that will prevent it from hiding if the cursor left it.
     */
    interactiveBorder: {
      type: Number,
      default: 2,
    },

    /**
     * Determines the events that cause the tippy to show.
     * Multiple event names are separated by spaces.
     */
    trigger: {
      type: String,
      default: 'manual',
    },

    /***
     * Determines if the tippy hides upon clicking the
     * reference or outside of the tippy.
     * The behavior can depend upon the trigger events used.
     */
    hideOnClick: {
      type: [Boolean, String],
      default: true,
      validator (value) {
        return TOOLTIP_HIDE_ON_CLICK_VARIANTS.some(variant => variant === value);
      },
    },

    /**
     * Determines modal state, when the popover's overlay is rendered
     */
    modal: {
      type: Boolean,
      default: false,
    },

    /**
     * Determines the popover's z-index
     */
    zIndex: {
      type: [Number, String],
      default: 300,
      validator: zIndex => !!Number(zIndex),
    },

    /**
     * Determines html element container for popover's overlay,
     * which will be rendered when 'modal' property is 'true'.
     */
    overlayAppendTo: {
      type: HTMLElement,
      default: () => document.body,
    },

    /**
     * Determines maximum height for popover content before overflow.
     * Possible units rem|px|%|em
     */
    maxHeight: {
      type: String,
      default: '',
    },

    /**
     * Determines fixed / sticky styles for popover header
     */
    fixedHeader: {
      type: Boolean,
      default: false,
    },

    /**
     * Determines visibility for close button
     */
    showCloseButton: {
      type: Boolean,
      default: true,
    },

    /**
     * Additional class name for the content wrapper element.
     */
    headerClass: {
      type: String,
      default: '',
    },
  },

  emits: ['update:open'],

  data () {
    return {
      POPOVER_PADDING_CLASSES,
      verticalAlignment: '',
      horizontalAlignment: '',
      isOpeningPopover: false,
      showPopover: this.open,
      isPreventHidePopover: false,
      closedByClickOutside: false,
      anchorEl: null,
      popoverContentEl: null,
      contentScrollTop: 0,
    };
  },

  computed: {
    fallbackPlacements () {
      const verticalVariants = POPOVER_VERTICAL_ALIGNMENT.filter(alignment => alignment);
      const horizontalVariants = POPOVER_HORIZONTAL_ALIGNMENT.filter(alignment => alignment);
      if (this.fixedAlignment === null && this.fixedVerticalAlignment === null) {
        return verticalVariants.map(vertical =>
          horizontalVariants.map(horizontal =>
            this.getPlacement(vertical, horizontal)),
        ).flat();
      }

      if (this.fixedAlignment === null) {
        return horizontalVariants
          .map(horizontal => this.getPlacement(this.fixedVerticalAlignment, horizontal));
      }

      if (this.fixedVerticalAlignment === null) {
        return verticalVariants
          .map(vertical => this.getPlacement(vertical, this.fixedAlignment));
      }

      return [];
    },

    placement () {
      return this.getPlacement(this.fixedVerticalAlignment, this.fixedAlignment);
    },

    isDialog () {
      return this.role === 'dialog';
    },

    labelledBy () {
      // aria-labelledby should be set only if aria-labelledby is passed as a prop, or if
      // there is no aria-label and the labelledby should point to the anchor.
      return this.ariaLabelledby || (!this.ariaLabel && getUniqueString('DtPopover__anchor'));
    },

    popoverHeaderClasses () {
      return {
        'd-bs-card': this.contentScrollTop !== 0 && this.fixedHeader,
      };
    },

    isHeaderVisible () {
      return this.$slots.title || this.areHeaderButtonsVisible;
    },

    isTitleVisible () {
      return this.$slots.title;
    },

    areHeaderButtonsVisible () {
      return this.$slots['header-actions'] || this.showCloseButton;
    },
  },

  watch: {
    placement (placement) {
      this.tip?.setProps({
        placement,
      });
    },

    fallbackPlacements: {
      deep: true,
      handler () {
        this.tip?.setProps({
          popperOptions: this.getPopperOptions(),
        });
      },
    },

    open (isOpen, isPrev) {
      if (isOpen) {
        this.tip.show();
      } else if (!isOpen && isPrev !== isOpen) {
        this.showPopover = false;
      }
    },

    hideOnClick () {
      this.tip?.setProps({
        hideOnClick: this.hideOnClick,
      });
    },
  },

  mounted () {
    // local verticalAlignment is needed for flipping
    this.verticalAlignment = this.fixedVerticalAlignment;
    // support single anchor for popover, not multi anchor
    this.anchorEl = this.$refs.anchor.children[0];
    this.popoverContentEl = this.$refs.content.$el;
    let zIndex = this.zIndex;
    // align z-indexes when popover has modal prop
    if (this.modal) {
      this.anchorEl.classList.add('d-zi-notification');
      zIndex = zIndex > 600 ? zIndex : 700;
      this.appendOverlay();
    }

    // align popover content width when
    if (this.contentWidth === 'anchor') {
      window.addEventListener('resize', this.onResize);
    }
    this.tip = tippy(this.anchorEl, this.getOptions({
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
        zIndex,
        onHide: this.onHide,
        onMount: this.onMount,
        onClickOutside: this.onClickOutside,
        onShow: this.onShow,
      },
    }));
    if (this.showPopover) {
      this.tip.show();
    }
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize);
    this.removeOverlay();
    this.tip?.destroy();
    this.removeReferences();
  },

  /******************
   *     METHODS    *
   ******************/
  methods: {
    afterEnter () {
      this.dialogFocusFirstElement(this.$refs.popover__content);
    },

    onScrollContent ({ target }) {
      this.contentScrollTop = target.scrollTop;
    },

    removeReferences () {
      this.anchorEl = null;
      this.popoverContentEl = null;
      this.tip = null;
    },

    appendOverlay () {
      const overlay = this.$refs.overlay.$el;
      const { lastChild } = this.overlayAppendTo;
      if (lastChild) {
        this.overlayAppendTo.insertBefore(overlay, lastChild);
      } else {
        this.overlayAppendTo.append(overlay);
      }
    },

    removeOverlay () {
      if (this.$refs.overlay && this.$refs.overlay.$el) {
        this.$refs.popover.append(this.$refs.overlay.$el);
      }
    },

    getPlacement (vertical = 'bottom', horizontal = 'end') {
      const verticalAlignment = vertical || 'bottom';
      const horizontalAlignment = horizontal || 'end';
      if (horizontalAlignment === 'center') return verticalAlignment;
      if (horizontalAlignment === 'left' || horizontalAlignment === 'right') {
        return `${verticalAlignment}-${horizontalAlignment === 'left' ? 'start' : 'end'}`;
      }
      return `${verticalAlignment}-${horizontalAlignment}`;
    },

    closePopover () {
      if (typeof this.hideOnClick === 'boolean' && this.hideOnClick) {
        this.tip.hide();
      }
    },

    async onShow () {
      if (this.contentWidth === 'anchor') {
        await this.setPopoverContentAnchorWidth();
      }

      if (this.contentWidth === null) {
        this.popoverContentEl.style.width = 'auto';
      }
    },

    onLeave () {
      this.isPreventHidePopover = true;
      if (this.focusAnchorOnClose && !this.closedByClickOutside) {
        this.dialogFocusFirstElement(this.$refs.anchor);
      }
      this.closedByClickOutside = false;
      this.tip.unmount();
      this.$emit('update:open', false);
    },

    onHide () {
      this.showPopover = false;
      /**
       *  https://atomiks.github.io/tippyjs/v6/all-props/#onhide
       *  return false from 'onHide' lifecycle to cancel a hide based on a condition.
      **/
      return this.isPreventHidePopover;
    },

    onMount () {
      this.isPreventHidePopover = false;
      this.showPopover = true;
      this.tip?.setProps({
        placement: this.placement,
      });
    },

    onResize () {
      this.closePopover();
    },

    onClickOutside () {
      this.closedByClickOutside = true;
    },

    onKeydown (e) {
      if (this.isDialog && e.key === 'Tab') {
        this.focusTrappedTabPress(e, this.popoverContentEl);
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
          {
            name: 'hide',
            enabled: this.appendTo !== 'parent',
          },
          getArrowDetected(({ state }) => {
            this.verticalAlignment = state.placement.includes('top') ? 'top' : 'bottom';
            if (state.placement === 'top' || state.placement === 'bottom') {
              this.horizontalAlignment = 'center';
            } else {
              this.horizontalAlignment = state.placement.includes('start') ? 'left' : 'right';
            }
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
          popper.appendChild(this.popoverContentEl);
          return {
            popper,
          };
        },
      };
    },

    async setPopoverContentAnchorWidth () {
      await this.$nextTick();
      this.popoverContentEl.style.width = `${this.anchorEl.clientWidth}px`;
    },

    dialogFocusFirstElement (domEl) {
      if (this.isDialog) {
        this.focusFirstElement(domEl);
      }
    },
  },
};
</script>

<style lang="less">
@import "../../css/dialtone.less";

.dt-popover__content {
  overflow: auto;
  &--align-right {
    .dt-popover__caret {
      right: @su24;
    }
  }

  &--align-center {
    .dt-popover__caret {
      left: 50%;
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
  .dt-popover-box {
    visibility: hidden;
    pointer-events: none;
  }
}

.d-popover-overlay {
  --bgo: 85% !important;
}

.dt-popover-box {
  &,
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  &__grid {
    grid-template-rows: auto 1fr;
  }
}

.header-actions {
  gap: 5px;
}
</style>
