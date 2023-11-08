<!-- eslint-disable vue/no-bare-strings-in-template -->
<template>
  <div class="d-bar16 d-wmx80p d-hmx80p d-bgc-secondary image-preview-dialog d-p4">
    <!-- File Robot -->
    <div
      v-if="whichEditor === 'filerobot'"
      class="d-p16"
    >
      <div class="d-hmx50p">
        <!-- Editing mode -->
        <file-robot-image-editor
          v-if="editing"
          :image-file="selectedImage"
          @done="updateImage"
        />
        <div v-else>
          <!-- Preview mode -->
          <div class="d-ps-relative">
            <img
              :src="toURL(selectedImage)"
              alt="potato"
              class="preview-big"
            >
            <dt-button
              class="d-l0 d-ps-absolute d-mtn16 d-mln16"
              :aria-label="ariaLabel"
              kind="inverted"
              circle
              @click="editing = true;"
            >
              <dt-icon name="edit" />
            </dt-button>
          </div>
          <div class="d-pt16">
            <dt-button
              v-for="(image, index) of images"
              :key="index"
              importance="outlined"
              kind="muted"
              @click="selectedIndex = index"
            >
              <img
                :src="toURL(image)"
                alt="potato"
                class="d-w84 d-h84"
              >
            </dt-button>
          </div>
          <!-- submit button -->
          <div class="d-w100p d-ps-relative">
            <dt-button
              class="d-ps-absolute d-b0 d-r0"
              :aria-label="ariaLabel"
              circle
              @click="done"
            >
              <dt-icon name="check" />
            </dt-button>
          </div>
        </div>
      </div>
    </div>
    <!-- Pintura -->
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
  </div>
</template>

<script>
import FileRobotImageEditor from './file_robot_image_editor.vue';
import PinturaImageEditor from './pintura_image_editor.vue';
import { DtButton } from '@/components/button';
import { DtIcon } from '@/components/icon';

export default {
  name: 'DtRecipeImageUploadPreview',

  components: {
    FileRobotImageEditor,
    PinturaImageEditor,
    DtButton,
    DtIcon,
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
      selectedIndex: 0,
      editing: false,
    };
  },

  computed: {
    selectedImage () {
      return this.images[this.selectedIndex] ?? undefined;
    },
  },

  methods: {
    toURL (file) {
      return URL.createObjectURL(file);
    },

    updateImage (file) {
      if (file) {
        // Shhhh it'll be OK
        // eslint-disable-next-line vue/no-mutating-props
        this.images[this.selectedIndex] = file;
      }
      this.editing = false;
    },

    done () {
      this.$emit('done', this.images);
    },
  },
};
</script>

<style lang="less">
  .image-preview-dialog{
    text-align: center;
    min-width: 600px;
  }
  .preview-big {
    height: 100%;
    width: 100%;
    max-height:50vh;
    object-fit: contain;
  }
</style>
