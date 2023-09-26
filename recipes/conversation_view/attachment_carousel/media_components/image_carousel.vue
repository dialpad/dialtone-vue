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
    <dt-button
      v-show="showCloseButton"
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
</template>

<script>
import { DtImageViewer } from '@/components/image_viewer';
import { DtButton } from '@/components/button';
import { DtIcon } from '@/components/icon';

export default {
  name: 'DtImageCarousel',

  components: {
    DtImageViewer,
    DtButton,
    DtIcon,
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
    'remove-image',
  ],

  data () {
    return {
      showCloseButton: false,
    };
  },

  computed: {

  },

  methods: {
    removeMediaItem (index) {
      this.$emit('remove-image', index);
    },
  },

};
</script>

<style>
</style>
