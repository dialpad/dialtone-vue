<!-- eslint-disable max-len -->
<template>
  <div
    id="editor_container"
    class="d-w100p d-h100p"
  />
</template>

<script>
import FilerobotImageEditor from 'filerobot-image-editor'; // Load library from NPM
const { TABS, TOOLS } = FilerobotImageEditor;

export default {
  name: 'FileRobotImageEditor',
  props: {
    imageFile: {
      type: Object,
      default: undefined,
    },
  },

  emits: [
    'done',
  ],

  computed: {
    imageUrl () {
      if (!this.imageFile) return;
      return this.toURL(this.imageFile);
    },
  },

  watch: {
    imageUrl: {
      handler (newVal) {
        if (newVal) {
          setTimeout(() => {
            this.mount();
          }, 250);
        }
      },

      immediate: true,
    },
  },

  mounted () {
  },

  unmounted () {
  },

  methods: {
    toURL (file) {
      return URL.createObjectURL(file);
    },

    mount () {
      const config = {
        source: this.imageUrl,
        onBeforeSave: () => {
          return false;
        },

        onSave: async (editedImageObject, designState) => {
          console.log('saved', editedImageObject, designState);
          const file = await this.createFile(
            editedImageObject.imageBase64,
            editedImageObject.fullName,
          );

          this.$emit('done', file);
        },

        annotationsCommon: {
          fill: '#ff0000',
        },

        Text: { text: 'Filerobot...' },
        Rotate: { angle: 90, componentType: 'slider' },
        translations: {
          profile: 'Profile',
          coverPhoto: 'Cover photo',
          facebook: 'Facebook',
          socialMedia: 'Social Media',
          fbProfileSize: '180x180px',
          fbCoverPhotoSize: '820x312px',
        },

        Crop: {
          presetsItems: [
            {
              titleKey: 'classicTv',
              descriptionKey: '4:3',
              ratio: 4 / 3,
            },
            {
              titleKey: 'cinemascope',
              descriptionKey: '21:9',
              ratio: 21 / 9,
            },
          ],

          presetsFolders: [],
        },

        tabsIds: [TABS.ADJUST, TABS.ANNOTATE, TABS.WATERMARK], // or ['Adjust', 'Annotate', 'Watermark']
        defaultTabId: TABS.ANNOTATE, // or 'Annotate'
        defaultToolId: TOOLS.TEXT, // or 'Text'
      };

      // Assuming we have a div with id="editor_container"
      const filerobotImageEditor = new FilerobotImageEditor(
        document.querySelector('#editor_container'),
        config,
      );

      filerobotImageEditor.render({
        onClose: (closingReason) => {
          console.log('Closing reason', closingReason);
          filerobotImageEditor.terminate();
        },
      });
    },

    async createFile (url, filename) {
      const response = await fetch(url);
      const blob = await response.blob();
      return new File([blob], filename);
    },
  },
};
</script>

<style>
</style>
