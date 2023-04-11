<template>
  <dt-rich-text-editor
    v-model="inputValue"
    :editable="editable"
    :input-aria-label="inputAriaLabel"
    @blur="onBlur"
    @input="onInput"
    @focus="onFocus"
    @focusin="onFocusIn"
    @focusout="onFocusOut"
  />
</template>

<script>
import DtRichTextEditor from './rich_text_editor';

export default {
  name: 'DtRichTextEditorDefault',

  components: {
    DtRichTextEditor,
  },

  data () {
    return {
      inputValue: this.value,
    };
  },

  watch: {
    value (val) {
      this.inputValue = val;
    },
  },
};
</script>
