<template>
  <div>
    <dt-emoji-picker
      :skin-tone="skinTone"
      :skin-selector-button-tooltip-label="skinSelectorButtonTooltipLabel"
      :tab-set-labels="tabSetLabels"
      :recently-used-emojis="recentlyUsedEmojis"
      :search-results-label="searchResultsLabel"
      :search-no-results-label="searchNoResultsLabel"
      :search-placeholder-label="searchPlaceholderLabel"
      @skin-tone="skinTone = $event;"
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
      skinTone: 'Default',
    };
  },
};
</script>
