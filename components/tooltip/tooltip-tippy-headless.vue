<template>
  <div>
    <div ref="anchor">
      <slot
        name="anchor"
        :attrs="{
          'aria-describedby': id,
        }"
      />
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
  name: 'Tooltip',
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
     * **/
    trigger: {
      type: String,
      default: 'mouseenter focus',
    },

    hideOnClick: {
      type: Boolean,
      default: true,
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
  },

  mounted () {
    const anchor = this.$refs.anchor.children[0];
    this.placement = this.arrowDirection;
    this.tip = tippy(anchor, this.initOptions());
  },

  beforeDestroy () {
    this.tip?.destroy();
  },

  methods: {
    setProps () {
      this.placement = this.arrowDirection;
      this.tip?.setProps({
        ...this.tippyProps,
        placement: this.tippyPlacement,
      });
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

    initOptions () {
      return {
        allowHTML: true,
        placement: this.tippyPlacement,
        ...this.tippyProps,
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
