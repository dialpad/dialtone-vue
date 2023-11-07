<!-- eslint-disable vue/no-bare-strings-in-template -->
<template>
  <!-- <toast-image-editor
    :include-ui="true"
    :options="imageEditorOptions"
    :image-file="selectedImage"
  /> -->
  <div
    v-for="(image, index) of images"
    :key="index"
  >
    <pintura-image-editor
      :image-url="toURL(image)"
      @done="updateImage"
    />
    <div>
      <dt-button
        @click="done"
      >
        Attach
      </dt-button>
    </div>
  </div>
</template>

<script>
// import ToastImageEditor from './toast_image_editor.vue';
import PinturaImageEditor from './pintura_image_editor.vue';
import { DtButton } from '@/components/button';

export default {
  name: 'DtRecipeImageUploadPreview',

  components: {
    // ToastImageEditor,
    PinturaImageEditor,
    DtButton,
  },

  mixins: [],

  inheritAttrs: false,

  props: {
    images: {
      type: Array,
      default: undefined,
    },
  },

  emits: [
    'done',
  ],

  data () {
    return {
    };
  },

  computed: {
    selectedImage () {
      return this.images[0] ?? undefined;
    },

    imageEditorOptions () {
      if (this.selectedImage) {
        return {
          includeUI: {
            loadImage: {
              path: this.toURL(this.selectedImage),
              name: 'sampleImage2',
            },

            initMenu: 'crop',
            uiSize: {
              width: '500px',
              height: '300px',
            },
          },

          // cssMaxWidth: 700,
          // cssMaxHeight: 500,
        };
      } else {
        return undefined;
      }
    },
  },

  methods: {
    toURL (file) {
      return URL.createObjectURL(file);
    },

    updateImage (file) {
      this.$emit('done', file);
    },

    done () {
      this.$emit('done');
    },
  },
};
</script>

<style lang="less">

</style>
