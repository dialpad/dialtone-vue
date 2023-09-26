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
      <!-- Image list -->
      <div
        v-for="(mediaItem, index) in mediaList"
        :key="`media-${index}`"
        role="presentation"
        class="d-ps-relative"
        @focusin="closeButton(true, index)"
        @focusout="closeButton(false, index)"
        @mouseenter="closeButton(true, index)"
        @mouseleave="closeButton(false, index)"
      >
        <dt-image-viewer
          image-button-class="d-h64 d-w64 d-bar4 d-ba d-baw6 d-bc-subtle"
          :image-src="mediaItem.path"
          :image-alt="mediaItem.altText"
          :close-aria-label="closeAriaLabel"
          :aria-label="clickToOpenAriaLabel"
        />
        <dt-button
          v-show="showCloseButton[index]"
          class="dt-attachment-carousel--close-button"
          circle
          size="xs"
          importance="clear"
          :aria-label="closeAriaLabel"
          @click="removeMediaItem(index)"
        >
          <template #icon>
            <dt-icon
              name="close"
              size="200"
            />
          </template>
        </dt-button>
      </div>
    </div>

    <!-- Carousel Arrows -->
    <dt-button
      v-if="showLeftArrow && showCarouselArrows"
      tabindex="-1"
      class="dt-attachment-carousel--left-arrow d-ba d-baw1 d-bc-default"
      circle
      size="xs"
      importance="clear"
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
import { DtImageViewer } from '@/components/image_viewer';
import { DtButton } from '@/components/button';

export default {
  name: 'DtRecipeAttachmentCarousel',

  components: {
    DtButton,
    DtImageViewer,
    DtIcon,
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
  },

  emits: [
    /**
     * Emitted when popover is shown or hidden
     *
     * @event remove-image
     * @type {Number}
     */
    'remove-image',
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
    removeMediaItem (index) {
      this.$emit('remove-image', index);
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
  position: absolute;
  background-color: var(--dt-color-neutral-white);
  top: var(--dt-space-30-percent);
  left: var(--dt-space-300);
}
.dt-attachment-carousel--right-arrow {
  position: absolute;
  background-color: var(--dt-color-neutral-white);
  top: var(--dt-space-30-percent);
  right: var(--dt-space-300);
}
</style>
