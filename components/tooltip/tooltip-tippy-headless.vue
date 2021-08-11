<template>
  <div
    ref="tooltip"
    class="d-d-inline-block"
  >
    <div ref="anchor">
      <slot name="anchor" />
    </div>
    <div
      :id="id"
      ref="content"
      role="tooltip"
      :aria-hidden="ariaHidden"
      data-qa="dt-tooltip"
      :class="[
        'd-tooltip',
        `d-tooltip__arrow--${placement}`,
        TOOLTIP_KIND_MODIFIERS[shouldShowTooltip ? 'show' : 'hide'],
        {
          [ TOOLTIP_KIND_MODIFIERS.inverted ]: inverted,
        },
      ]"
    >
      <slot>
        {{ message }}
      </slot>
    </div>
  </div>
</template>

<script>
import tippy from 'tippy.js/headless';
import {
  TOOLTIP_KIND_MODIFIERS,
  TOOLTIP_TIPPY_DIRECTIONS,
  TOOLTIP_DIALTONE_DIRECTIONS,
  TOOLTIP_DIRECTION_MODIFIERS,
} from './tooltip_constants';
import { getUniqueString } from '../utils';
import { hideOnEsc } from './modifiers';
export default {
  name: 'TooltipTippy',
  props: {
    /**
     * Mode of tooltip to control the tooltip's visibility.
     */
    hover: {
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

    visible: {
      type: Boolean,
      default: false,
    },

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
      type: String,
      default: '0',
    },

    offset: {
      type: Array,
      default: () => [0, 0],
    },

    arrowDirection: {
      type: String,
      default: 'bottom-center',
      validator (direction) {
        return TOOLTIP_DIRECTION_MODIFIERS.includes(direction);
      },
    },

    appendTo: {
      type: [String, HTMLBodyElement],
      default: () => document.body,
    },

    interactive: {
      type: Boolean,
      default: false,
    },

    flipBoundary: {
      type: [String, HTMLElement],
      default: 'popper',
    },

    interactiveBorder: {
      type: Number,
      default: 2,
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
     * A provided message for the tooltip content
     */
    message: {
      type: String,
      default: '',
    },

    flipVariations: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      shouldShowTooltip: false,
      TOOLTIP_KIND_MODIFIERS,
      tip: null,
      options: {},
      placement: 'bottom-center',
    };
  },

  computed: {
    ariaHidden () {
      return `${!this.isTooltipVisible}`;
    },

    tippyPlacement () {
      return TOOLTIP_DIALTONE_DIRECTIONS[this.placement];
    },

    tippyTrigger () {
      if (!this.hover && !this.show) {
        return 'focus';
      }
      return this.hover ? 'mouseenter focus' : 'click';
    },

    convertedFlip () {
      return this.flip.map(arrowDialtone => TOOLTIP_DIALTONE_DIRECTIONS[arrowDialtone]);
    },
  },

  watch: {
    arrowDirection: {
      handler () {
        this.placement = this.arrowDirection;
        if (this.tip) {
          this.tip.setProps({
            placement: this.tippyPlacement,
          });
        }
      },
    },

    hover: {
      handler () {
        if (this.tip) {
          this.tip.setProps({
            trigger: this.tippyTrigger,
          });

          if (!this.hover && this.show) {
            this.tip.show();
          } else {
            this.tip.hide();
          }
        }
      },
    },

    show: {
      handler () {
        if (this.tip) {
          this.tip.setProps({
            trigger: this.tippyTrigger,
          });
        }
        if (this.tip && !this.hover) {
          this.show ? this.tip.show() : this.tip.hide();
        }
      },
    },
  },

  mounted () {
    const anchor = this.$refs.anchor.children[0];
    anchor.setAttribute('tabIndex', this.tabIndex);
    anchor.setAttribute('aria-describedby', this.id);
    this.placement = this.arrowDirection;

    this.tip = tippy(anchor, this.getOptions());
    if (!this.hover && this.show) {
      this.tip.show();
    }
  },

  // beforeDestroy () {
  //   if (!this.tip) return;
  //   this.tip.destroy();
  // },

  methods: {
    getPopperOptions () {
      return {
        modifiers: [
          {
            name: 'flip',
            options: {
              fallbackPlacements: [],
              boundary: this.flipBoundary,
              // flipVariations: this.flipVariations
            },
          },
          {
            name: 'arrowDetected',
            enabled: true,
            phase: 'main',
            fn: ({ state }) => {
              this.placement = TOOLTIP_TIPPY_DIRECTIONS[state.placement];
            },

            requiresIfExists: ['offset'],
          },
        ],
      };
    },

    getOptions () {
      const content = this.$refs.content;
      console.log(this.arrowDirection, this.tippyPlacement, 'tippyPlacement');
      return {
        maxWidth: 100,
        hideOnClick: false,
        offset: this.offset,
        interactiveBorder: this.interactiveBorder,
        placement: this.tippyPlacement,
        appendTo: this.appendTo,
        interactive: this.interactive,
        render () {
          // The recommended structure is to use the popper as an outer wrapper
          const popper = document.createElement('div');

          popper.className = 'tippy-box d-ps-absolute';
          popper.appendChild(content);
          return {
            popper,
          };
        },

        plugins: [hideOnEsc],

        allowHTML: true,
        trigger: this.tippyTrigger,
        popperOptions: this.getPopperOptions(),
        onHide: () => {
          this.shouldShowTooltip = false;
        },

        onShow: () => {
          this.shouldShowTooltip = true;
        },
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
