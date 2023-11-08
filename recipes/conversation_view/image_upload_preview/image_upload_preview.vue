<!-- eslint-disable vue/no-bare-strings-in-template -->
<template>
  Image Editor Preview
  <file-robot-image-editor
    v-if="whichEditor === 'filerobot'"
    :image-file="selectedImage"
    @done="updateImage"
  />
  <div
    v-for="(image, index) of images"
    v-else
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
import FileRobotImageEditor from './file_robot_image_editor.vue';
import PinturaImageEditor from './pintura_image_editor.vue';
import { DtButton } from '@/components/button';

export default {
  name: 'DtRecipeImageUploadPreview',

  components: {
    FileRobotImageEditor,
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

    whichEditor: {
      type: String,
      default: 'filerobot',
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
