<template>
  <div :class="[wrapperClass, pillClass]">
    <div :class="['d-bgc-secondary', pillClass]">
      <div class="d-p8">
        <button
          :aria-label="ariaLabel"
          data-qa="dt-feed-item-pill"
          :class="['d-baw0 d-bgc-moderate d-bar-pill d-w100p d-ta-left', toggleableClass, buttonClass]"
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
                class="dt-feed-item-pill--icon"
                data-qa="dt-feed-item-hover-icon"
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
    pillClass () {
      return this.expanded ? 'dt-feed-item-pill--expanded' : 'd-bar-pill';
    },

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
  .dt-feed-item-pill--expanded {
    border-radius: calc(var(--dt-size-radius-pill)/2)
  }

  .dt-feed-item-pill--icon {
    animation: fade 0.3s ease-in;
  }

  @keyframes fade {
    0%   {transform: scale(0);}
    100% {transform: scale(1);}
  }
</style>
