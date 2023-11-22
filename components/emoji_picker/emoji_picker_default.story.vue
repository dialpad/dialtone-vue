<template>
  <div>
    <dt-emoji-picker
      :skin-tone.sync="isSkinTone"
      :skin-selector-button-tooltip-label="skinSelectorButtonTooltipLabel"
      :tab-set-labels="tabSetLabels"
      :recently-used-emojis="recentlyUsedEmojis"
      :search-results-label="searchResultsLabel"
      :search-no-results-label="searchNoResultsLabel"
      :search-placeholder-label="searchPlaceholderLabel"
      @skin-tone="isSkinTone = $event;"
    />
  </div>
</template>

<script>
import DtEmojiPicker from './emoji_picker.vue';

export default {
  name: 'EmojiPickerDefaultStory',

  components: {
    DtEmojiPicker,
  },

  data () {
    return {
      isSkinTone: this.skinTone,
    };
  },

  watch: {
    skinTone (value) {
      this.isSkinTone = value;
    },
  },
};
</script>
