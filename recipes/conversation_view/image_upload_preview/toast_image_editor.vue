<template>
  <div
    ref="tuiImageEditor"
    class="d-w100p d-h100p"
  />
  <!-- <ul class="menu">
    <li
      class="menu-item"
      @click="editorInstance.startDrawingMode('CROPPER')">
      Crop
    </li>
  </ul> -->
</template>

<script>
import { extractVueListeners } from '@/common/utils';
import ImageEditor from 'tui-image-editor';

const includeUIOptions = {
  includeUI: {
    initMenu: 'filter',
  },
};
const editorDefaultOptions = {
  cssMaxWidth: 700,
  cssMaxHeight: 500,
};
export default {
  name: 'ImageEditor',
  props: {
    includeUi: {
      type: Boolean,
      default: true,
    },

    options: {
      type: Object,
      default () {
        return editorDefaultOptions;
      },
    },

    imageFile: {
      type: Object,
      default: undefined,
    },
  },

  computed: {
    listeners () {
      return extractVueListeners(this.$attrs);
    },
  },

  mounted () {
    let options = this.options;
    if (this.includeUi) {
      options = Object.assign(includeUIOptions, this.options);
    }
    this.editorInstance = new ImageEditor(this.$refs.tuiImageEditor, options);
    // this.editorInstance = new ImageEditor(this.$refs.tuiImageEditor);
    this.addEventListener();

    // this.editorInstance.loadImageFromFile(this.imagerFile).then(function (result) {
    // console.log(result);
    //   this.editorInstance.clearUndoStack();
    // });

    // this.editorInstance.loadImageFromURL(this.toURL(this.imageFile), this.imageFile.name);
  },

  unmounted () {
    Object.keys(this.listeners).forEach((eventName) => {
      this.editorInstance.off(eventName);
    });
    this.editorInstance.destroy();
    this.editorInstance = null;
  },

  methods: {
    toURL (file) {
      return URL.createObjectURL(file);
    },

    addEventListener () {
      Object.keys(this.listeners).forEach((eventName) => {
        this.editorInstance.on(eventName, (...args) => this.$emit(eventName, ...args));
      });
    },

    getRootElement () {
      return this.$refs.tuiImageEditor;
    },

    invoke (methodName, ...args) {
      let result = null;
      if (this.editorInstance[methodName]) {
        result = this.editorInstance[methodName](...args);
      } else if (methodName.indexOf('.') > -1) {
        const func = this.getMethod(this.editorInstance, methodName);

        if (typeof func === 'function') {
          result = func(...args);
        }
      }

      return result;
    },

    getMethod (instance, methodName) {
      const { first, rest } = this.parseDotMethodName(methodName);
      const isInstance = instance.constructor.name !== 'Object';
      const type = typeof instance[first];
      let obj;

      if (isInstance && type === 'function') {
        obj = instance[first].bind(instance);
      } else {
        obj = instance[first];
      }

      if (rest.length > 0) {
        return this.getMethod(obj, rest);
      }

      return obj;
    },

    parseDotMethodName (methodName) {
      const firstDotIdx = methodName.indexOf('.');
      let firstMethodName = methodName;
      let restMethodName = '';

      if (firstDotIdx > -1) {
        firstMethodName = methodName.substring(0, firstDotIdx);
        restMethodName = methodName.substring(firstDotIdx + 1, methodName.length);
      }

      return {
        first: firstMethodName,
        rest: restMethodName,
      };
    },
  },
};
</script>
