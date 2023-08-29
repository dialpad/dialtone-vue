<template>
  <div :class="['dt-feed-item-pill--container dt-feed-item-pill--container-ai', wrapperClass]">
    <div class="d-p8 d-bgc-secondary">
      <button
        :aria-label="ariaLabel"
        data-qa="dt-feed-item-pill"
        :class="['d-baw0 d-bgc-moderate d-bar-pill d-w100p d-ta-left d-btn--circle', toggleableClass, buttonClass]"
        @focusin="hover = true"
        @focusout="hover = false"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        @click="onClick"
      >
        <dt-item-layout class="d-w100p d-p8">
          {{ title }}
          <template slot="left">
            <dt-icon
              size="300"
              class="dt-feed-item-pill--icon"
              data-qa="dt-feed-item-pill-icon"
              :name="computedIcon"
            />
          </template>
          <template slot="subtitle">
            <slot name="subtitle" />
          </template>
          <template slot="bottom">
            <slot name="bottom" />
          </template>
          <template slot="right">
            <slot name="right" />
          </template>
        </dt-item-layout>
      </button>
      <div
        v-if="expanded"
        class="d-jc-center d-d-flex"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
import { DtIcon, DtItemLayout } from '@/index';

export default {
  name: 'DtRecipeFeedItemPill',

  components: { DtItemLayout, DtIcon },

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
  },

  data () {
    return {
      hover: false,
      expanded: false,
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
  /* Border radius needs to half of pill */
  // Gradient radius solution taken from https://stackoverflow.com/a/53037637
  .dt-feed-item-pill--container {
    border: double 4px transparent;
    border-radius: calc(var(--dt-size-radius-pill)/2);
    background-origin: border-box;
    background-clip: content-box, border-box;
    overflow: hidden;
  }

  .dt-feed-item-pill--container-ai {
    background-image: linear-gradient(white, white), var(--dt-badge-color-background-ai);
  }

  .dt-feed-item-pill--icon {
    animation: fade 0.15s ease-in;
  }

  @keyframes fade {
    0%   {transform: scale(0);}
    100% {transform: scale(1);}
  }
</style>
