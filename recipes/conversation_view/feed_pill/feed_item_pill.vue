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
                v-if="toggleable && hover"
                class="dt-feed-pill--icon"
                data-qa="dt-feed-item-hover-icon"
                :name="hoverIcon"
              />
              <dt-icon
                v-else
                class="dt-feed-pill--icon"
                data-qa="dt-feed-item-icon"
                :name="iconName"
                size="300"
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
      default: null,
      validator: (val) => {
        return !!val;
      },
    },

    /**
     * Sets whether the pill can be toggled
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
      return this.expanded ? 'dt-feed-pill--expanded' : 'd-bar-pill';
    },

    hoverIcon () {
      return this.expanded ? 'chevron-down' : 'chevron-right';
    },

    toggleableClass () {
      return this.toggleable ? 'd-c-pointer' : '';
    },
  },

  methods: {
    onClick () {
      if (this.toggleable) {
        this.expanded = !this.expanded;
      }
    },
  },
};
</script>

<style scoped>
  .dt-feed-pill--expanded {
    border-radius: 5rem
  }

  .dt-feed-pill--icon {
    animation: fade 0.2s ease-in;
  }

  @keyframes fade {
    0%   {transform: scale(0);}
    100% {transform: scale(1);}
  }
</style>
