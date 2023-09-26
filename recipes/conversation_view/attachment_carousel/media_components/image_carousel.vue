<template>
  <div
    role="presentation"
    class="d-ps-relative"
    @focusin="showCloseButton = true"
    @focusout="showCloseButton = false"
    @mouseenter="showCloseButton = true"
    @mouseleave="showCloseButton = false"
  >
    <dt-image-viewer
      image-button-class="d-h64 d-w64 d-bar4 d-ba d-baw6 d-bc-subtle"
      :image-src="mediaItem.path"
      :image-alt="mediaItem.altText"
      :close-aria-label="closeAriaLabel"
      :aria-label="clickToOpenAriaLabel"
    />

    <!-- Loader / Close button -->
    <div
      class="dt-image-carousel--top-right"
    >
      <dt-progress-bar
        v-if="mediaItem.isUploading && !showCloseButton"
        class="dt-image-carousel--progress-bar d-ba d-bc-subtle d-baw2"
        :progress="mediaItem.progress"
      />
      <dt-button
        v-else
        v-show="showCloseButton"
        class="dt-image-carousel--close-button d-ba d-bc-white d-baw2"
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
import { DtImageViewer } from '@/components/image_viewer';
import { DtButton } from '@/components/button';
import { DtIcon } from '@/components/icon';

import DtProgressBar from './progress_bar.vue';

export default {
  name: 'DtImageCarousel',

  components: {
    DtImageViewer,
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
    'remove-image',
  ],

  data () {
    return {
      showCloseButton: false,
    };
  },

  methods: {
    removeMediaItem (index) {
      this.$emit('remove-image', index);
    },
  },
};
</script>

<style>
.dt-image-carousel--top-right {
  position: absolute;
  top: var(--dt-size-100);
  right: var(--dt-size-100);
}
.dt-image-carousel--close-button {
  color: var(--dt-color-neutral-white);
  background-color: var(--dt-color-black-400);
}
.dt-image-carousel--progress-bar {
  background-color: var(--dt-color-neutral-white);
  border-radius: 50%;
  display: flex;
  transform: rotate(-90deg);
}
</style>
