<!-- eslint-disable vue/no-bare-strings-in-template -->
<template>
  <div>
    <div
      v-if="!isEditing"
      class="d-w100p d-ps-relative"
    >
      <img
        :src="result.imagePreview || src"
        alt=""
      >
      <dt-button
        v-if="!isEditing"
        class="d-ps-absolute d-b0 d-r0"
        :aria-label="Edit"
        :circle="true"
        @click="isEditing = true"
        @keydown.space.prevent.stop="isEditing = true"
      >
        <dt-icon name="edit" />
      </dt-button>
    </div>
  </div>

  <div
    v-if="isEditing"
    class="pintura-image-editor"
  >
    <pintura-editor
      v-bind="props"
      :src="src"
      :image-state="result.imageState"
      @pintura:load="handleLoad($event)"
      @pintura:process="handleProcess($event)"
    />
  </div>
</template>

<script>
import { PinturaEditor } from '@pqina/vue-pintura';
import { getEditorDefaults } from '@pqina/pintura';
import { DtIcon } from '@/components/icon';
import { DtButton } from '@/components/button';

// Import Pintura styles
import '@pqina/pintura/pintura.css';

export default {
  name: 'ExampleOverlay',
  components: {
    PinturaEditor,
    DtIcon,
    DtButton,
  },

  props: {
    imageUrl: {
      type: String,
      default: undefined,
    },
  },

  data () {
    return {
      props: getEditorDefaults(),
      src: this.imageUrl,
      result: {
        imageState: undefined,
        imagePreview: undefined,
      },

      isEditing: false,
    };
  },

  methods: {
    handleLoad: function (event) {
      console.log('load', event.detail);
    },

    handleProcess: function (event) {
      console.log('process', event.detail);
      const { imageState, dest } = event.detail;
      this.result = {
        imagePreview: URL.createObjectURL(dest),
        imageState,
      };
      this.isEditing = false;
    },
  },
};
</script>

<style>
.pintura-image-editor {
  height: 70vh;
  width: 70vw;
}

/* bright / dark mode */
.pintura-editor {
  --color-background: 255, 255, 255;
  --color-foreground: 10, 10, 10;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  html {
    color: #fff;
    background: #111;
  }

  .pintura-editor {
    --color-background: 10, 10, 10;
    --color-foreground: 255, 255, 255;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
  }
}
</style>
