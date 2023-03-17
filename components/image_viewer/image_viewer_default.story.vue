<template>
  <dt-image-viewer
    :image-url="imageUrl"
    :image-alt="imageAlt"
    :close-aria-label="closeAriaLabel"
  />
</template>

<script>
import DtImageViewer from './image_viewer';

export default {
  name: 'DtImageViewerDefault',
  components: { DtImageViewer },
};
</script>
