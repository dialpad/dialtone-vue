<template>
  <div data-qa="dt-tooltip-container">
    <div
      ref="anchor"
      data-qa="dt-tooltip-anchor"
    >
      <slot
        name="anchor"
        :attrs="{
          'aria-describedby': id,
        }"
      />
    </div>
    <dt-lazy-show
      :id="id"
      ref="content"
      :show="showTooltip"
      role="tooltip"
      aria-hidden="false"
      data-qa="dt-tooltip"
      :transition="transition"
      :class="[
        'd-tooltip',
        `d-tooltip__arrow--${placement}`,
        {
          [ TOOLTIP_KIND_MODIFIERS.inverted ]: inverted,
        },
      ]"
      @after-leave="onLeave"
    >
      <slot>
        {{ message }}
      </slot>
    </dt-lazy-show>
  </div>
</template>

<script>
import tippy from 'tippy.js/headless';
import {
  TOOLTIP_KIND_MODIFIERS,
  TOOLTIP_TIPPY_DIRECTIONS,
  TOOLTIP_DIALTONE_DIRECTIONS,
  TOOLTIP_DIRECTION_MODIFIERS,
  TOOLTIP_HIDE_ON_CLICK_VARIANTS,
} from './tooltip_constants';
import { getUniqueString } from '../utils';
import { hideOnEsc, getArrowDetected } from './modifiers';
import DtLazyShow from '../lazy_show/lazy_show';
export default {
  name: 'Tooltip',
  components: {
    DtLazyShow,
  },

  props: {
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
     *  Displaces the tippy from its reference element
     *  in pixels (skidding and distance).
     *  https://atomiks.github.io/tippyjs/v6/all-props/#offset
     */
    offset: {
      type: Array,
      default: () => [0, 0],
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
     * https://atomiks.github.io/tippyjs/v6/all-props/#appendto
     */
    appendTo: {
      type: [String, HTMLElement],
      default: () => document.body,
    },

    /**
     * Determines if the tippy has interactive content inside of it,
     * so that it can be hovered over and clicked inside without hiding.
     * https://atomiks.github.io/tippyjs/v6/all-props/#interactive
     */
    interactive: {
      type: Boolean,
      default: false,
    },

    /**
     * This describes the area that the element
     * will be checked for overflow relative to.
     * Flip modifier - https://popper.js.org/docs/v2/modifiers/flip/
     * Boundary option - https://popper.js.org/docs/v2/utils/detect-overflow/#boundary
     */
    flipBoundary: {
      type: [String, HTMLElement],
      default: 'popper',
    },

    /**
     * Determines the size of the invisible border around the
     * tippy in px that will prevent it from hiding if the cursor left it.
     * https://atomiks.github.io/tippyjs/v6/all-props/#interactiveborder
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
     * https://atomiks.github.io/tippyjs/v6/all-props/#trigger
     * **/
    trigger: {
      type: String,
      default: 'mouseenter focus',
    },

    /**
     * https://atomiks.github.io/tippyjs/v6/all-props/#hideonclick
     * */
    hideOnClick: {
      type: [Boolean, String],
      default: false,
      validator (value) {
        return TOOLTIP_HIDE_ON_CLICK_VARIANTS.some(variant => variant === value);
      },
    },

    /**
     * Whether the tooltip should be shown.
     */
    show: {
      type: Boolean,
      default: false,
    },

    /**
     * Named transition when the content display is toggled.
     * @see DtLazyShow
     */
    transition: {
      type: String,
      default: 'fade',
    },
  },

  data () {
    return {
      TOOLTIP_KIND_MODIFIERS,
      tip: null,
      placement: '',
      showTooltip: false,
    };
  },

  computed: {
    tippyPlacement () {
      return TOOLTIP_DIALTONE_DIRECTIONS[this.placement];
    },

    convertedFlip () {
      return this.flip.map(arrowDialtone => TOOLTIP_DIALTONE_DIRECTIONS[arrowDialtone]);
    },

    tippyProps () {
      return {
        offset: this.offset,
        interactiveBorder: this.interactiveBorder,
        appendTo: this.appendTo,
        interactive: this.interactive,
        trigger: this.trigger,
        popperOptions: this.getPopperOptions(),
        hideOnClick: this.hideOnClick,
      };
    },
  },

  watch: {
    tippyProps: {
      handler: 'setProps',
      deep: true,
    },

    arrowDirection: 'setProps',

    show: 'updateShow',
  },

  mounted () {
    const anchorElement = this.$refs.anchor.children[0];
    const anchor = anchorElement || this.createAnchor();
    this.placement = this.arrowDirection;
    this.tip = tippy(anchor, this.initOptions());
    this.updateShow();
  },

  beforeDestroy () {
    if (this.tip) {
      this.tip.destroy();
    }
  },

  methods: {
    async onLeave () {
      if (!this.showTooltip) {
        this.tip.unmount();
      }
    },

    updateShow () {
      if (this.show) {
        this.showTooltip = this.show;
        this.setProps();
        this.tip.show();
      } else if (this.showTooltip) {
        this.tip.hide();
      }
    },

    createAnchor () {
      const span = document.createElement('span');
      span.setAttribute('tabindex', '0');
      span.innerText = this.$refs.anchor.innerText || '';
      this.$refs.anchor.innerText = '';
      this.$refs.anchor.appendChild(span);
      return span;
    },

    setProps () {
      this.placement = this.arrowDirection;
      if (this.tip && this.tip.setProps) {
        this.tip.setProps({
          ...this.tippyProps,
          placement: this.tippyPlacement,
        });
      }
    },

    getPopperOptions () {
      return {
        modifiers: [
          {
            name: 'flip',
            options: {
              fallbackPlacements: this.convertedFlip,
              boundary: this.flipBoundary,
            },
          },
          getArrowDetected(({ state }) => {
            this.placement = TOOLTIP_TIPPY_DIRECTIONS[state.placement];
          }),
        ],
      };
    },

    onMount () {
      this.showTooltip = true;
      this.setProps();
      this.$emit('update:show', this.showTooltip);
    },

    onHide () {
      const isPreventHideTooltip = !this.showTooltip;
      this.showTooltip = false;
      this.$emit('update:show', this.showTooltip);
      /**
       *  https://atomiks.github.io/tippyjs/v6/all-props/#onhide
       *  return false from 'onHide' lifecycle to cancel a hide based on a condition.
       **/
      return isPreventHideTooltip;
    },

    initOptions () {
      return {
        allowHTML: true,
        placement: this.tippyPlacement,
        onMount: this.onMount,
        onHide: this.onHide,
        ...this.tippyProps,
        onTrigger: (instance, { type }) => {
          if (!this.showTooltip && type !== 'click') {
            this.showTooltip = true;
          }
        },

        render: () => {
          // The recommended structure is to use the popper as an outer wrapper
          const popper = document.createElement('div');
          popper.className = 'tippy-box d-ps-absolute';
          popper.appendChild(this.$refs.content.$el);
          return {
            popper,
          };
        },

        plugins: [hideOnEsc],
      };
    },
  },
};
</script>

<style lang="less">
.tippy-box[data-popper-reference-hidden],
.tippy-box[data-popper-escaped] {
  .d-tooltip {
    visibility: hidden;
    pointer-events: none;
  }
}
</style>
