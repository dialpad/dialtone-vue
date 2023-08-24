<template>
  <div :class="[wrapperClass, expanded ? 'dt-feed-item--expanded-pill' : 'd-bar-pill']">
    <div :class="['d-bgc-secondary', expanded ? 'dt-feed-item--expanded-pill' : 'd-bar-pill']">
      <div class="d-p8">
        <button
          :aria-label="ariaLabel"
          data-qa="dt-feed-item-pill"
          class="
            d-baw0
            d-bgc-moderate
            d-bar-pill
            d-w100p
            d-c-pointer
            d-ta-left"
          @focusin="hover = true"
          @focusout="hover = false"
          @mouseenter="hover = true"
          @mouseleave="hover = false"
          @click="$emit('click')"
        >
          <dt-item-layout class="d-w100p d-p8">
            {{ title }}
            <template slot="left">
              <!-- TODO: Add transition styling to the icon on hover -->
              <dt-icon
                v-if="hover"
                data-qa="dt-feed-item-hover-icon"
                :name="expanded ? 'chevron-down' : 'chevron-right'"
              />
              <dt-icon
                v-else
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

  mixins: [],

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
     * Shows/hides the expanded portion
     */
    expanded: {
      type: Boolean,
      default: () => false,
    },

    /**
     * Additional styling around the pill
     */
    wrapperClass: {
      type: String,
      default: () => '',
    },

    /**
     * Aria label for feed pill
     */
    ariaLabel: {
      type: String,
      default: () => '',
    },
  },

  emits: [
    'click',
  ],

  data () {
    return {
      hover: false,
    };
  },
};
</script>

<style lang="less">
  .dt-feed-item--expanded-pill {
    border-radius: 5rem
  }
</style>
