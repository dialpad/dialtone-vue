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
} from './tooltip_constants';
import tippyMixin from '../mixins/tippy.js';

export default {
  name: 'DtTooltip',
  mixins: [tippyMixin],
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
        this.tip?.setProps({
          placement: this.tippyPlacement,
        });
      },
    },
  },

  mounted () {
    const anchor = this.$refs.anchor.children[0];
    this.placement = this.arrowDirection;
    this.tip = tippy(anchor, this.getOptions({
      popperOptions: this.getPopperOptions(),
      tippyOptions: {
        placement: this.tippyPlacement,
        onHide: (instance) => {
          const box = instance.popper.firstElementChild;
          this.animateHide(box, instance);
        },
        onMount: instance => {
          const box = instance.popper.firstElementChild;
          this.animateShow(box);
        },
      },
    }));
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
