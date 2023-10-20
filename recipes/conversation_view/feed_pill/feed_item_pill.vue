<template>
  <div :class="['dt-recipe-feed-item-pill--border', borderClass, wrapperClass]">
    <div class="dt-recipe-feed-item-pill--wrapper">
      <dt-collapsible :open="expanded">
        <template #anchor>
          <button
            :aria-label="ariaLabel"
            :data-qa="DATA_QA.PILL"
            :class="['dt-recipe-feed-item-pill--button', toggleableClass, buttonClass]"
            @focusin="hover = true"
            @focusout="hover = false"
            @mouseenter="hover = true"
            @mouseleave="hover = false"
            @click="onClick"
          >
            <dt-item-layout class="dt-recipe-feed-item-pill--layout">
              <span class="d-fw-bold">{{ title }}</span>
              <template #left>
                <dt-icon
                  size="300"
                  class="dt-recipe-feed-item-pill--icon"
                  :data-qa="DATA_QA.PILL_ICON"
                  :name="computedIcon"
                />
              </template>
              <template #subtitle>
                <slot name="subtitle" />
              </template>
              <template #bottom>
                <slot name="bottom" />
              </template>
              <template #right>
                <slot name="right" />
              </template>
            </dt-item-layout>
          </button>
        </template>
        <template #content>
          <div class="dt-recipe-feed-item-pill--content d-jc-center d-d-flex">
            <slot name="content" />
          </div>
        </template>
      </dt-collapsible>
    </div>
  </div>
</template>

<script>
import { FEED_ITEM_PILL_BORDER_COLORS, FEED_ITEM_PILL_DATA_QA } from './feed_item_pill_constants';
import { DtIcon, DtItemLayout, DtCollapsible } from '@/index';

export default {
  name: 'DtRecipeFeedItemPill',

  components: { DtItemLayout, DtIcon, DtCollapsible },

  props: {
    /**
     * Accepts a DtIcon name to be shown in the left
     */
    iconName: {
      type: String,
      default: () => '',
    },

    /**
     * Bolded primary text
     */
    title: {
      type: String,
      default: () => '',
    },

    /**
     * Additional styling around the pill
     */
    wrapperClass: {
      type: [String, Array, Object],
      default: '',
    },

    /**
     * Additional styling for the pill
     */
    buttonClass: {
      type: [String, Array, Object],
      default: '',
    },

    /**
     * Aria label for feed pill
     */
    ariaLabel: {
      type: String,
      required: true,
    },

    /**
     * Sets whether the pill can be toggled (Icon changing on hover, expanding and collapsing, pointer)
     */
    toggleable: {
      type: Boolean,
      default: () => true,
    },

    defaultToggled: {
      type: Boolean,
      default: () => false,
    },

    /**
     * Callbox border color
     * @values default, ai, critical
     */
    borderColor: {
      type: String,
      default: 'default',
      validator: (color) => Object.keys(FEED_ITEM_PILL_BORDER_COLORS).includes(color),
    },
  },

  data () {
    return {
      hover: false,
      expanded: this.defaultToggled,
      DATA_QA: FEED_ITEM_PILL_DATA_QA,
    };
  },

  computed: {
    computedIcon () {
      if (this.toggleable && this.hover) {
        return this.expanded ? 'chevron-down' : 'chevron-right';
      } else {
        return this.iconName;
      }
    },

    toggleableClass () {
      return this.toggleable ? 'd-c-pointer' : '';
    },

    borderClass () {
      return FEED_ITEM_PILL_BORDER_COLORS[this.borderColor];
    },
  },

  methods: {
    onClick () {
      if (!this.toggleable) return;

      this.expanded = !this.expanded;
    },
  },
};
</script>

<style lang="less" scoped>
.dt-recipe-feed-item-pill {
  &--wrapper {
    background-color: var(--dt-color-surface-secondary);
    padding: var(--dt-space-400);
  }

  &--button {
    background-color: var(--dt-color-surface-moderate);
    text-align: left;
    width: 100%;
    cursor: pointer;
    border-width: 0;
    border-radius: var(--dt-size-radius-pill);
    --button-padding-x: var(--button-padding-y-md);
    --button-padding-y: var(--button-padding-y-md);
    --button-color-text: var(--dt-action-color-foreground-muted-default);
    --button-border-radius: var(--dt-size-radius-circle);
  }

  &--layout {
    padding: var(--dt-space-400);
    width: 100%;
  }

  &--icon {
    animation: fade 0.15s ease-in;
    margin-right: var(--dt-space-400);
  }

  &--content {
    display: flex;
    justify-content: center;
  }

  // Gradient radius solution taken from https://stackoverflow.com/a/53037637
  &--border {
    border: double 1px transparent;
    border-radius: 4.8rem; // Special value determined by designer here where it works in both expanded and collapsed
    background-origin: border-box;
    background-clip: content-box, border-box;
    overflow: hidden;
  }

  &--border-default {
    background: var(--dt-color-border-default)
  }

  &--border-ai {
    background-image:
      linear-gradient(var(--dt-color-surface-primary), var(--dt-color-surface-primary)),
      var(--dt-badge-color-background-ai);
  }

  &--border-critical {
    background: var(--dt-color-foreground-critical);
  }

  @keyframes fade {
    0%   {transform: scale(0);}
    100% {transform: scale(1);}
  }
}
</style>
