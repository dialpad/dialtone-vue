<template>
  <div
    v-if="mediaList.length > 0"
    ref="carousel"
    role="presentation"
    class="dt-attachment-carousel"
    :aria-label="attachmentAriaLabel"
    @mouseenter="showCarouselArrows = true"
    @mouseleave="showCarouselArrows = false"
    @focusin="showCarouselArrows = true"
    @focusout="showCarouselArrows = false"
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
    <!-- Carousel Arrows -->
    <dt-button
      class="dt-attachment-carousel--left-arrow d-ba d-baw1 d-bc-default"
      circle
      size="xs"
      importance="clear"
      :aria-label="leftArrowAriaLabel"
      @click="console.log('left arrow clicked')"
    >
      <template #icon>
        <dt-icon
          name="arrow-left"
          size="100"
        />
      </template>
    </dt-button>
    <dt-button
      class="dt-attachment-carousel--right-arrow d-ba d-baw1 d-bc-default"
      circle
      size="xs"
      importance="clear"
      :aria-label="rightArrowAriaLabel"
      @click="console.log('right arrow clicked')"
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
import {} from './attachment_carousel_constants';

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
     * @event remove-image
     * @type {Number}
     */
    'remove-image',
  ],

  data () {
    return {
      showCloseButton: {},
      showCarouselArrows: false,
      isMounted: false,
    };
  },

  computed: {
    showRightArrow () {
      if (!this.isMounted) {
        return false;
      }
      return this.$refs.carousel.scrollWidth > this.$refs.carousel.clientWidth && this.showCarouselArrows;
    },

    showLeftArrow () {
      if (!this.isMounted) {
        return false;
      }
      return this.$refs.carousel.scrollLeft > 0 && this.showCarouselArrows;
    },

  },

  mounted: function () {
    this.isMounted = true;
  },

  methods: {
    removeMediaItem (index) {
      this.$emit('remove-image', index);
    },

    closeButton (val, index) {
      this.showCloseButton[index] = val;
    },
  },
};
</script>

<style lang="less">
.dt-attachment-carousel {
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: auto;
  width: var(--dt-space-1000);
  max-height: 100px;
}
.dt-attachment-carousel::-webkit-scrollbar {
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
  position: fixed;
  background-color: var(--dt-color-neutral-white);
  top: var(--dt-size-550);
  left: var(--dt-size-400);
}
.dt-attachment-carousel--right-arrow {
  position: fixed;
  background-color: var(--dt-color-neutral-white);
  top: var(--dt-size-550);
  left: var(--dt-space-75-percent);
}
</style>
