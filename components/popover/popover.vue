<template>
  <component
    :is="elementType"
    ref="popover"
    v-on="$listeners"
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
        POPOVER_PADDING_CLASSES[padding],
        'd-m0',
        contentClass,
      ]"
      tabindex="-1"
      appear
      v-on="$listeners"
      @keydown="onKeydown"
      @after-leave="onLeave"
      @enter="isOpeningPopover = true"
      @leave="isOpeningPopover = false"
      @after-enter="onOpen"
    >
      <!-- @slot content that is displayed in the popover when it is open. -->
      <slot name="content" />
    </dt-lazy-show>
  </component>
</template>

<script>
import {
  POPOVER_CONTENT_WIDTHS,
  POPOVER_PADDING_CLASSES,
  POPOVER_ROLES,
} from './popover_constants';
import { getUniqueString } from '../utils';
import DtLazyShow from '../lazy_show/lazy_show';
import { TOOLTIP_HIDE_ON_CLICK_VARIANTS } from '../tooltip';
import ModalMixin from '../mixins/modal.js';
import {
  createTippy,
  getPopperOptions,
} from './tippy_utils';

export default {
  name: 'DtPopover',

  /********************
   * CHILD COMPONENTS *
   ********************/
  components: {
    DtLazyShow,
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
      default: 'manual',
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

    zIndex: {
      type: [Number, String],
      default: 300,
      validator: zIndex => !!Number(zIndex),
    },

    overlayAppendTo: {
      type: HTMLElement,
      default: () => document.body,
    },

    /**
     * This property is needed for define fallback placements
     * by providing a list of placements to try.
     * */
    fallbackPlacements: {
      type: Array,
      default: () => ['right', 'top'],
    },

    /**
     * Describes the preferred placement of the popover
     */
    placement: {
      type: String,
      default: 'bottom',
    },
  },

  emits: ['update:open'],

  data () {
    return {
      POPOVER_PADDING_CLASSES,
      isOpeningPopover: false,
      showPopover: this.open,
      isPreventHidePopover: false,
      closedByClickOutside: false,
      anchorEl: null,
      popoverContentEl: null,
    };
  },

  computed: {
    isDialog () {
      return this.role === 'dialog';
    },

    isMenu () {
      return this.role === 'menu';
    },

    labelledBy () {
      // aria-labelledby should be set only if aria-labelledby is passed as a prop, or if
      // there is no aria-label and the labelledby should point to the anchor.
      return this.ariaLabelledby || (!this.ariaLabel && getUniqueString('DtPopover__anchor'));
    },
  },

  watch: {
    placement (placement) {
      this.tip?.setProps({
        placement,
      });
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
    this.tip = createTippy(this.anchorEl, {
      popperOptions: getPopperOptions({
        boundary: this.flipBoundary,
        flip: this.fallbackPlacements,
        hasHideModifierEnabled: this.appendTo !== 'parent',
      }),
      contentElement: this.popoverContentEl,
      placement: this.placement,
      hideOnClick: this.hideOnClick,
      offset: this.offset,
      interactiveBorder: this.interactiveBorder,
      appendTo: this.appendTo,
      interactive: this.interactive,
      trigger: this.trigger,
      zIndex,
      onHide: this.onHide,
      onMount: this.onMount,
      onClickOutside: this.onClickOutside,
      onShow: this.onShow,
    });
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
        this.focusFirstElementIfNeeded(this.$refs.anchor);
      }
      this.closedByClickOutside = false;
      this.tip.unmount();
      this.$emit('update:open', false);
    },

    onOpen () {
      this.$emit('update:open', true);
      this.focusFirstElementIfNeeded();
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

    async setPopoverContentAnchorWidth () {
      await this.$nextTick();
      this.popoverContentEl.style.width = `${this.anchorEl.clientWidth}px`;
    },

    focusFirstElementIfNeeded (e) {
      if (this.isDialog || this.isMenu) {
        this.focusFirstElement(e);
      }
    },
  },
};
</script>

<style lang="less">
@import "../../css/dialtone.less";

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
}
</style>
