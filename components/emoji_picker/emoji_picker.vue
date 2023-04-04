<template>
  <div class="d-emoji-picker">
    <div class="d-emoji-picker--header">
      <emoji-tabset
        :recently-used-tab="showRecentlyUsedTab"
        @tabset-selected="scrollToSelectedTabset"
      />
    </div>
    <div class="d-emoji-picker--body">
      <emoji-search
        v-model="searchQuery"
        :search-placeholder-label="searchPlaceholderLabel"
      />
      <emoji-selector
        :emoji-filter="searchQuery"
        :skin-tone="skinTone"
        :tabset-labels="tabSetLabels"
        :search-results-label="searchResultsLabel"
        @emoji-data="updateEmojiData"
        @selected-emoji="emits('selected-emoji', $event)"
      />
    </div>
    <div class="d-emoji-picker--footer">
      <emoji-description :emoji-data="emojiData" />
      <emoji-skin-selector @skin-tone="updateSkinTone" />
    </div>
  </div>
</template>

<script setup>
import EmojiSearch from './modules/emoji_search.vue';
import EmojiTabset from './modules/emoji_tabset.vue';
import EmojiSelector from './modules/emoji_selector.vue';
import EmojiSkinSelector from './modules/emoji_skin_selector.vue';
import EmojiDescription from './modules/emoji_description.vue';
import { computed, onBeforeUnmount, ref } from 'vue';

const props = defineProps({
  /**
   * The object list of recently used emojis
   * This object list is necessary to fill the recently used tab
   * @type {Object}
   * @default {}
   * @example
   * <dt-emoji-picker :recentlyUsedEmojis="{ emojiObject, emojiObject, }" />
   */
  // TODO try to simplify this to achieve an array of unicode characters and not an entire emoji data object
  recentlyUsedEmojis: {
    type: Object,
    default: () => ({}),
  },

  /**
   * The placeholder text for the search input
   * @type {String}
   * @required
   * @example
   * <dt-emoji-picker :searchPlaceholderLabel="'Search...'" />
   */
  searchPlaceholderLabel: {
    type: String,
    required: true,
  },

  /**
   * The label for the search results tab
   * @type {String}
   * @required
   * @example
   * <dt-emoji-picker :searchResultsLabel="'Search results'" />
   */
  searchResultsLabel: {
    type: String,
    required: true,
  },

  /**
   * The list of tabsets to show, it is necessary to be updated with the correct language
   * It must respect the provided order.
   * @type {Array}
   * @default ['Recently used', 'Custom', 'People', 'Nature', 'Food', 'Activity', 'Travel', 'Objects', 'Symbols', 'Flags']
   * @example
   * <dt-emoji-picker :tabSetLabels="['Recently used', 'Custom', 'People', 'Nature', 'Food', 'Activity', 'Travel', 'Objects', 'Symbols', 'Flags']" />
   */
  tabSetLabels: {
    type: Array,
    default: () => ['Most recently used', 'Custom', 'Smileys and people', 'Nature', 'Food', 'Activity', 'Travel', 'Objects', 'Symbols', 'Flags'],
  },
});
const emits = defineEmits(
  /**
     * It will emit the selected emoji
     * @event selected-emoji
     * @param {Object} emoji - The selected emoji from the emoji selector
     */
  // TODO add unicode_character prop to the emoji object returned
  ['selected-emoji'],
);

const searchQuery = ref('');
const emojiData = ref(null);
const skinTone = ref('Default');

const testSkinTones = ['Default', 'Light', 'MediumLight', 'Medium', 'MediumDark', 'Dark'];

const showRecentlyUsedTab = computed(() => props.recentlyUsedEmojis.length > 0);

/**
 * Handle the selected tabset event
 * @event selectedTabset
 * @param tabName {String} - The name of the tab that was selected
 */
function scrollToSelectedTabset (tabName) {
  // it will scroll the emojiSelector component to the selected tabset with animation
  console.log(tabName);
}

function updateEmojiData (emoji) {
  emojiData.value = emoji;
}

function updateSkinTone (skin) {
  skinTone.value = skin;
}

/**
 * It will clean the state of the component before unmounting
 */
onBeforeUnmount(() => {
  cleanUp();
});

function cleanUp () {
  console.log('cleanUp');
}
</script>

<style lang="less">
.d-emoji-picker{
  width: auto;
  max-width: 372px;
  height: 100%;

  display: inline-flex;
  flex-direction: column;
  border-radius: 4px;

  //background-color: red;

  &--header{
    padding: var(--su4) var(--su4) 0 var(--su8);
    margin-bottom: var(--su16);
    position: relative;
    &::after{
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 1px;
      background-color: var(--black-200) !important;
    }
  }

  &--body{
    padding: 0 var(--su16);
  }

  &--footer{
    height: 58px;
    background: #F9F9F9;
    border-top: 1px solid #DFDEE5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
  }
}
</style>
