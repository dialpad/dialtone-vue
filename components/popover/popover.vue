<template>
  <div>
    <div ref="anchor">
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
      :show="open"
      :role="role"
      data-qa="dt-popover"
      :aria-hidden="!open"
      :aria-labelledby="labelledBy"
      :aria-label="ariaLabel"
      :aria-modal="isDialog"
      :transition="transition"
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
      tabindex="-1"
    >
      <!-- @slot that is displayed in the popover when it is open. -->
      <slot />
      <div
        v-if="hasCaret"
        class="d-bgc-white d-mtn4 d-bt d-bl d-bc-black-075 dt-popover__caret d-ps-absolute d-w6 d-h6"
      />
    </dt-lazy-show>
  </div>
</template>

<script>
import tippy from 'tippy.js/headless';
import { hideOnEsc, getArrowDetected } from '../tooltip/modifiers';
import {
  POPOVER_PADDING_CLASSES,
} from './popover_constants';
import { getUniqueString } from '../utils';
import DtLazyShow from '../lazy_show/lazy_show';
import popoverMixin from './popover_mixin.js';

export default {
  name: 'Popover',
  components: {
    DtLazyShow,
  },

  mixins: [popoverMixin],
  data: () => ({
    POPOVER_PADDING_CLASSES,
    verticalAlignment: '',
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
      this.tip?.setProps({
        placement,
      });
    },

    open (isOpen) {
      isOpen ? this.tip.show() : this.tip.hide();
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
        onHide: this.onHide,
        onMount: this.onMount,
      },
    }));
  },

  beforeDestroy () {
    this.tip?.destroy();
  },

  methods: {
    onHide (instance) {
      const anchor = this.$refs.anchor.children[0];
      const box = instance.popper.firstElementChild;
      this.$emit('update:open', false);
      if (this.focusAnchorOnClose) {
        anchor?.focus?.();
      }
      this.animateHide(box, instance);
    },

    onMount (instance) {
      this.$emit('update:open', true);
      const box = instance.popper.firstElementChild;
      this.animateShow(box);
      this.tip?.setProps({
        placement: this.placement,
      });
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
            this.verticalAlignment = state.placement.includes('top') ? 'top' : 'bottom';
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
