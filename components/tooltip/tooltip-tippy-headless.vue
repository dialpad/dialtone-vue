<template>
  <div>
    <div ref="anchor">
      <slot name="anchor" />
    </div>
    <div
      :id="id"
      ref="content"
      role="tooltip"
      aria-hidden="false"
      data-qa="dt-tooltip"
      :class="[
        'd-tooltip',
        `d-tooltip__arrow--${placement}`,
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

    trigger: {
      type: String,
      default: 'mouseenter focus click',
    },
  },

  data () {
    return {
      TOOLTIP_KIND_MODIFIERS,
      tip: null,
      placement: '',
    };
  },

  computed: {
    tippyPlacement () {
      return TOOLTIP_DIALTONE_DIRECTIONS[this.placement];
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
  },

  mounted () {
    const anchor = this.$refs.anchor.children[0];
    anchor.setAttribute('tabIndex', this.tabIndex);
    anchor.setAttribute('aria-describedby', this.id);
    this.placement = this.arrowDirection;
    this.tip = tippy(anchor, this.getOptions());
  },

  beforeDestroy () {
    if (!this.tip) return;
    this.tip.destroy();
  },

  methods: {
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
      return {
        hideOnClick: false,
        offset: this.offset,
        interactiveBorder: this.interactiveBorder,
        placement: this.tippyPlacement,
        appendTo: this.appendTo,
        interactive: this.interactive,
        allowHTML: true,
        trigger: this.trigger,
        popperOptions: this.getPopperOptions(),
        render: () => {
          // The recommended structure is to use the popper as an outer wrapper
          const popper = document.createElement('div');
          popper.className = 'tippy-box d-ps-absolute';
          popper.appendChild(this.$refs.content);
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
