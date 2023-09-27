<!-- Use this template story to allow the user control the component's props and slots -->
<template>
  <!--
    We can bind the data that the user entered into the storybook controls to props by using a property of the same name
    as the storybook control defined in the corresponding `.story.js` file.
  -->
  <dt-recipe-attachment-carousel
    :media-list="$attrs.mediaList"
    attachment-aria-label="Attachment carousel"
    close-aria-label="Close"
    click-to-open-aria-label="Click to open image"
    @remove-media="removeMedia"
  />
</template>

<script>
import DtRecipeAttachmentCarousel from './attachment_carousel.vue';

export default {
  name: 'DtRecipeAttachmentCarouselDefault',
  components: { DtRecipeAttachmentCarousel },
  methods: {
    removeMedia (index) {
      this.$attrs.mediaList.splice(index, 1);
      this.$attrs.onRemoveMedia(index);
    },
  },
};
</script>
