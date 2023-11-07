<template>
  <dt-recipe-image-upload-preview />
</template>

<script>
import DtRecipeImageUploadPreview from './image_upload_preview.vue';

export default {
  name: 'DtRecipeImageUploadPreviewDefault',
  components: {
    DtRecipeImageUploadPreview,
  },

  data () {
    return {
      mediaList: [
      ],
    };
  },
};
</script>
