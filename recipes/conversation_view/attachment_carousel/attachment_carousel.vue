<template>
  <div
    class="dt-attachment-carousel"
    role="presentation"
    @mouseenter="showCarouselArrows = true"
    @mouseleave="showCarouselArrows = false"
    @focusin="showCarouselArrows = true"
    @focusout="showCarouselArrows = false"
  >
    <div
      v-if="mediaList.length > 0"
      ref="carousel"
      class="dt-attachment-carousel--media-list"
      :aria-label="attachmentAriaLabel"
      @scroll="handleScroll"
    >
      <!-- media list -->
      <component
        :is="mediaComponent(mediaItem.type)"
        v-for="(mediaItem, index) in mediaList"
        :key="`media-${index}`"
        :index="index"
        :media-item="mediaItem"
        :close-aria-label="closeAriaLabel"
        :click-to-open-aria-label="clickToOpenAriaLabel"
        @remove-image="removeMediaItem(index)"
      />
    </div>

    <!-- Carousel Arrows -->
    <dt-button
      v-if="showLeftArrow && showCarouselArrows"
      tabindex="-1"
      class="dt-attachment-carousel--left-arrow d-ba d-baw1 d-bc-default"
      circle
      size="xs"
      importance="clear"
      :aria-label="leftArrowAriaLabel"
      @click="leftScroll"
    >
      <template #icon>
        <dt-icon
          name="arrow-left"
          size="100"
        />
      </template>
    </dt-button>
    <dt-button
      v-if="showRightArrow && showCarouselArrows"
      tabindex="-1"
      class="dt-attachment-carousel--right-arrow d-ba d-baw1 d-bc-default"
      circle
      size="xs"
      importance="clear"
      :aria-label="rightArrowAriaLabel"
      @click="rightScroll"
    >
      <template #icon>
        <dt-icon
          name="arrow-right"
          size="100"
        />
      </template>
    </dt-button>
  </div>
</template>

<script>
import { DtIcon } from '@/components/icon';
import { DtButton } from '@/components/button';
import {} from './attachment_carousel_constants';

import DtImageCarousel from './media_components/Image_carousel.vue';

export default {
  name: 'DtRecipeAttachmentCarousel',

  components: {
    DtButton,
    DtIcon,
    DtImageCarousel,
  },

  mixins: [],

  /* inheritAttrs: false is generally an option we want to set on library
    components. This allows any attributes passed in that are not recognized
    as props to be passed down to another element or component using v-bind:$attrs
    more info: https://vuejs.org/v2/api/#inheritAttrs */
  // inheritAttrs: false,

  props: {
    /**
     * media - object array of media objects
     * @type {Array}
     *
     * Object: {
     *  path: String,
     *  altText: String | null,
     * }
     */
    mediaList: {
      type: Array,
      default: () => [],
    },

    /**
     * Descriptive label for the attachment element
     */
    attachmentAriaLabel: {
      type: String,
      required: true,
      default: '',
    },

    closeAriaLabel: {
      type: String,
      required: true,
      default: '',
    },

    clickToOpenAriaLabel: {
      type: String,
      required: true,
      default: '',
    },

    leftArrowAriaLabel: {
      type: String,
      required: true,
      default: '',
    },

    rightArrowAriaLabel: {
      type: String,
      required: true,
      default: '',
    },
  },

  emits: [
    /**
     * Emitted when popover is shown or hidden
     *
     * @event remove-media
     * @type {Number}
     */
    'remove-media',
  ],

  data () {
    return {
      showCloseButton: {},
      showCarouselArrows: false,
      showRightArrow: true,
      showLeftArrow: false,
      isMounted: false,
    };
  },

  computed: {
  },

  mounted: function () {
    this.showLeftArrow = this.$refs.carousel.scrollLeft > 0;
    this.showRightArrow = this.$refs.carousel.scrollWidth > this.$refs.carousel.clientWidth;
  },

  methods: {
    mediaComponent (type) {
      switch (type) {
        case 'image':
          return 'dt-image-carousel';
        default:
          return 'dt-image-carousel';
      }
    },

    removeMediaItem (index) {
      // make sure the carousel arrows is updated. 64 is the width of each media item
      this.showRightArrow = this.$refs.carousel.scrollWidth > (this.$refs.carousel.clientWidth + 64);
      this.$emit('remove-media', index);
    },

    closeButton (val, index) {
      this.showCloseButton[index] = val;
    },

    handleScroll () {
      const carousel = this.$refs.carousel;
      this.showLeftArrow = carousel.scrollLeft > 0;
      this.showRightArrow = !((carousel.scrollLeft + carousel.clientWidth) === carousel.scrollWidth);
    },

    leftScroll () {
      this.$refs.carousel.scrollTo({
        left: this.$refs.carousel.scrollLeft - 100,
        behavior: 'smooth',
      });
    },

    rightScroll () {
      this.$refs.carousel.scrollTo({
        left: this.$refs.carousel.scrollLeft + 100,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="less">
.dt-attachment-carousel {
  position: relative;
  max-height: 100px;
  width: var(--dt-space-1000);

}

.dt-attachment-carousel--media-list {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
}
.dt-attachment-carousel--media-list::-webkit-scrollbar {
  display: none;
}

.dt-attachment-carousel--close-button {
  position: absolute;
  color: var(--dt-color-neutral-white);
  top: var(--dt-size-100);
  right: var(--dt-size-100);
  background-color: var(--dt-color-black-400);
}
.dt-attachment-carousel--left-arrow {
  z-index: 100;
  position: absolute;
  background-color: var(--dt-color-neutral-white);
  top: var(--dt-space-30-percent);
  left: var(--dt-space-300);
}
.dt-attachment-carousel--right-arrow {
  z-index: 100;
  position: absolute;
  background-color: var(--dt-color-neutral-white);
  top: var(--dt-space-30-percent);
  right: var(--dt-space-300);
}
</style>
