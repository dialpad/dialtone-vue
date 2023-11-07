<template>
  <dt-recipe-image-upload-preview
    class=""
    :images="images.value"
  />
</template>

<script>
import { ref } from 'vue';
import DtRecipeImageUploadPreview from './image_upload_preview.vue';
import defaultImage from '@/common/assets/test.jpg';

async function createFile (url) {
  const response = await fetch(url);
  const data = await response.blob();

  const metadata = {
    type: 'image/jpeg',
  };
  const file = await new File([data], 'test.jpg', metadata);
  // ... do something with the file or return it
  return file;
}

const images = ref([]);

async function testData () {
  images.value.push(await createFile(defaultImage));
}

testData();

export default {
  name: 'DtRecipeImageUploadPreviewDefault',
  components: {
    DtRecipeImageUploadPreview,
  },

  computed: {
    images: () => images,
  },
};
</script>
