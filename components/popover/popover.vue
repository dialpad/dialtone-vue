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
        `dt-popover__content--pad-${padding}`,
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
        class="d-bgc-white d-mtn4 d-bt d-bl d-bc-black-075 dt-popover__caret"
      />
    </div>
  </div>
</template>

<script>
import tippy from 'tippy.js/headless';
import tippyMixin from '../mixins/tippy.js';
import {
  POPOVER_HORIZONTAL_ALIGNMENT,
  POPOVER_PADDING_CLASSES,
  POPOVER_ROLES,
  POPOVER_VERTICAL_ALIGNMENT,
} from './popover_constants';

export default {
  name: 'Popover',
  mixins: [tippyMixin],

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
        return POPOVER_PADDING_CLASSES.includes(padding);
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
  },

  data: () => ({
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
        trigger: 'click',
        interactive: true,
        placement: this.placement,
        hideOnClick: 'toggle',
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
          {
            name: 'arrowDetected',
            enabled: true,
            phase: 'main',
            fn: ({ state }) => {
              this.verticalAlignment = this.convertTippyToPopperVerticalPlacement(state.placement);
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
      top: auto;
      bottom: -@su4;
      transform: rotate(225deg);
    }
  }

  &--pad-none {
    padding: @su0;
  }

  &--pad-small {
    padding: @su8;
  }

  &--pad-medium {
    padding: @su16;
  }

  &--pad-large {
    padding: @su24;
  }
}

.dt-popover__caret {
  top: @su0;
  height: @su6;
  width: @su6;
  transform: rotate(45deg);
  position: absolute;
}

.tippy-box[data-popper-reference-hidden],
.tippy-box[data-popper-escaped] {
  .popover {
    visibility: hidden;
    pointer-events: none;
  }
}
</style>
