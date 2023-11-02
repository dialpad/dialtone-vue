<template>
  <div
    class="d-emoji-picker"
  >
    <div class="d-emoji-picker--header">
      <emoji-tabset
        ref="tabsetRef"
        :emoji-filter="searchQuery"
        :show-recently-used-tab="showRecentlyUsedTab"
        :scroll-into-tab="scrollIntoTab"
        :tabset-labels="tabSetLabels"
        :is-scrolling="isScrolling"
        @focus-search-input="$refs.searchInputRef.focusSearchInput()"
        @selected-tabset="scrollToSelectedTabset"
        @keydown.esc="emits('close')"
      />
    </div>
  </div>
</template>

<script>
import EmojiTabset from './modules/emoji_tabset.vue';

export default {
  name: 'DtEmojiPicker',

  components: {
    EmojiTabset,
  },

  props: {
    recentlyUsedEmojis: {
      type: Array,
      default: () => ([]),
    },

    searchPlaceholderLabel: {
      type: String,
      required: true,
    },

    searchResultsLabel: {
      type: String,
      required: true,
    },

    searchNoResultsLabel: {
      type: String,
      required: true,
    },

    tabSetLabels: {
      type: Array,
      required: true,
    },

    skinTone: {
      type: String,
      default: 'Default',
    },

    skinSelectorButtonTooltipLabel: {
      type: String,
      required: true,
    },
  },

  data () {
    return {
      searchQuery: '',
      highlightedEmoji: null,
      selectedTabset: {},
      scrollIntoTab: 0,
      isScrolling: false,
    };
  },

  computed: {
    showRecentlyUsedTab () {
      return this.recentlyUsedEmojis.length > 0;
    },
  },

  methods: {
    scrollToSelectedTabset (tabId) {
      this.searchQuery = '';
      this.selectedTabset = { ...this.selectedTabset, tabId };
    },

    updateScrollIntoTab (value) {
      this.scrollIntoTab = value;
    },

    updateIsScrolling (value) {
      this.isScrolling = value;
    },

    updateHighlightedEmoji (emoji) {
      this.highlightedEmoji = emoji;
    },

    emitSelectedEmoji (emoji) {
      this.$emit('selected-emoji', emoji);
    },

    emitSkinTone (skin) {
      this.$emit('skin-tone', skin);
    },

    emitClose () {
      this.$emit('close');
    },

    // Utility method for emitting events
    emits (event, payload = null) {
      this.$emit(event, payload);
    },
  },
};
</script>
