<!-- Use this template story to allow the user control the component's props and slots -->
<template>
  <div class="d-stack16">
    <dt-image-viewer
      :image-url="require('./test.jpg')"
      image-alt="Alt Text"
      close-aria-label="Close"
    />

    <dt-image-viewer
      :image-url="require('./fry.gif')"
      image-alt="Alt Text"
      close-aria-label="Close"
    />
  </div>
</template>

<script>
import DtImageViewer from './image_viewer';

export default {
  name: 'DtImageViewerVariants',
  components: { DtImageViewer },
};
</script>
