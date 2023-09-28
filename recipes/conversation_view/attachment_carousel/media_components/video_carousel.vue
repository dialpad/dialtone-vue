<template>
  <div
    role="presentation"
    class="dt-video-carousel"
    @focusin="showCloseButton = true"
    @focusout="showCloseButton = false"
    @mouseenter="showCloseButton = true"
    @mouseleave="showCloseButton = false"
  >
    <!-- <dt-image-viewer
      image-button-class="dt-video-carousel--video-viewer"
      :image-src="mediaItem.path"
      :image-alt="mediaItem.altText"
      :close-aria-label="closeAriaLabel"
      :aria-label="clickToOpenAriaLabel"
    /> -->
    <!-- eslint-disable-next-line vuejs-accessibility/media-has-caption -->
    <video
      id="dt-video-viewer"
      controls
      src="./movie.mp4"
      class="d-wmn64 d-hmx64 d-wmx332"
    />

    <!-- Loader / Close button -->
    <div
      class="dt-video-carousel--top-right"
    >
      <dt-progress-bar
        v-if="mediaItem.isUploading && !showCloseButton"
        class="dt-video-carousel--progress-bar"
        :progress="mediaItem.progress"
      />
      <dt-button
        v-else-if="showCloseButton"
        class="dt-video-carousel--close-button"
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
</template>

<script>
// import { DtImageViewer } from '@/components/image_viewer';
import { DtButton } from '@/components/button';
import { DtIcon } from '@/components/icon';

import DtProgressBar from './progress_bar.vue';

export default {
  name: 'DtVideoCarousel',

  components: {
    // DtImageViewer,
    DtButton,
    DtIcon,
    DtProgressBar,
  },

  props: {
    mediaItem: {
      type: Object,
      required: true,
    },

    index: {
      type: Number,
      required: true,
    },

    closeAriaLabel: {
      type: String,
      required: true,
    },

    clickToOpenAriaLabel: {
      type: String,
      required: true,
    },
  },

  emits: [
    /**
     * Emitted when media close button is clicked to remove the image
     *
     * @event remove-media
     * @type {Number}
     */
    'remove-media',
  ],

  data () {
    return {
      showCloseButton: false,
    };
  },

  methods: {
    removeMediaItem (index) {
      this.$emit('remove-media', index);
    },
  },
};
</script>

<style>
.dt-video-carousel {
  position: relative;
}
/* .dt-video-carousel--image-viewer {
  height: var(--dt-size-700);
  width: var(--dt-size-700);
  border: var(--dt-space-100) solid;
  border-radius: var(--br4);
  border-width: var(--dt-size-350);
  border-color: var(--dt-color-border-subtle);
} */
.dt-video-carousel--top-right {
  position: absolute;
  top: var(--dt-size-100);
  right: var(--dt-size-100);
}
.dt-video-carousel--close-button {
  color: var(--dt-color-neutral-white);
  background-color: var(--dt-color-black-400);
  border: var(--dt-space-100) solid;
  border-width: var(--dt-size-200);
  border-color: var(--dt-color-neutral-white);
}
.dt-video-carousel--progress-bar {
  background-color: var(--dt-color-neutral-white);
  border-radius: 50%;
  display: flex;
  transform: rotate(-90deg);
  border: var(--dt-space-100) solid;
  border-width: var(--dt-size-200);
  border-color: var(--dt-color-border-subtle);
}
</style>
