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
    <div class="d-emoji-picker--body">
      <emoji-search
        ref="searchInputRef"
        v-model="searchQuery"
        :search-placeholder-label="searchPlaceholderLabel"
        @select-first-emoji="emits('selected-emoji', highlightedEmoji)"
        @focus-tabset="$refs.tabsetRef.focusTabset()"
        @focus-emoji-selector="$refs.emojiSelectorRef.focusEmojiSelector()"
        @keydown.esc="emits('close')"
      />
      <emoji-selector
        ref="emojiSelectorRef"
        :emoji-filter="searchQuery"
        :skin-tone="skinTone"
        :tabset-labels="tabSetLabels"
        :search-results-label="searchResultsLabel"
        :search-no-results-label="searchNoResultsLabel"
        :recently-used-emojis="recentlyUsedEmojis"
        :selected-tabset="selectedTabset"
        @scroll-into-tab="updateScrollIntoTab"
        @is-scrolling="updateIsScrolling"
        @highlighted-emoji="updateHighlightedEmoji"
        @selected-emoji="emits('selected-emoji', $event)"
        @focus-skin-selector="$refs.skinSelectorRef.focusSkinSelector()"
        @focus-search-input="$refs.searchInputRef.focusSearchInput()"
        @keydown.esc="emits('close')"
      />
    </div>
  </div>
</template>

<script>
import EmojiTabset from './modules/emoji_tabset.vue';
import EmojiSearch from './modules/emoji_search.vue';
import EmojiSelector from './modules/emoji_selector.vue';

export default {
  name: 'DtEmojiPicker',

  components: {
    EmojiTabset,
    EmojiSearch,
    EmojiSelector,
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
