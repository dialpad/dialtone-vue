<template>
  <div class="d-emoji-picker">
    <div class="d-emoji-picker--header">
      <emoji-tabset
        :emoji-filter="searchQuery"
        :show-recently-used-tab="showRecentlyUsedTab"
        :scroll-into-tab="scrollIntoTab"
        :is-scrolling-with-scroll-to="isScrollingWithScrollTo"
        @selected-tabset="scrollToSelectedTabset"
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
        :search-no-results-label="searchNoResultsLabel"
        :recently-used-emojis="recentlyUsedEmojis"
        :selected-tabset="selectedTabset"
        @scroll-into-tab="updateScrollIntoTab"
        @is-scrolling-with-scroll-to="updateIsScrollingWithScrollTo"
        @emoji-data="updateEmojiData"
        @selected-emoji="emits('selected-emoji', $event)"
      />
    </div>
    <div class="d-emoji-picker--footer">
      <emoji-description :emoji="emojiData" />
      <emoji-skin-selector
        :is-hovering="!!emojiData"
        :skin-selector-button-tooltip-label="skinSelectorButtonTooltipLabel"
        :skin-tone="skinTone"
        @skin-tone="emits('skin-tone', $event)"
      />
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
   * The array with recently used  emoji object
   * This list is necessary to fill the recently used tab
   * @type {Array}
   * @default []
   * @example
   * <dt-emoji-picker :recentlyUsedEmojis="[emojiObject, emojiObject]" />
   */
  // TODO try to simplify this to achieve an array of unicode characters and not an entire emoji data object
  recentlyUsedEmojis: {
    type: Array,
    default: () => ([]),
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
   * The label for the search no results
   * @type {String}
   * @required
   * @example
   * <dt-emoji-picker :searchNoResultsLabel="'No results'" />
   */
  searchNoResultsLabel: {
    type: String,
    required: true,
  },

  /**
   * The list of tabsets to show, it is necessary to be updated with the correct language
   * It must respect the provided order.
   * @type {Array}
   * @default ['Most recently used', 'People', 'Nature', 'Food', 'Activity', 'Travel', 'Objects', 'Symbols', 'Flags']
   * @example
   * <dt-emoji-picker :tabSetLabels="['Most recently used', 'People', 'Nature', 'Food', 'Activity', 'Travel', 'Objects', 'Symbols', 'Flags']" />
   */
  tabSetLabels: {
    type: Array,
    default: () => ['Most recently used', 'Smileys and people', 'Nature', 'Food', 'Activity', 'Travel', 'Objects', 'Symbols', 'Flags'],
  },

  /**
   * The skin tone to show the emojis
   * This prop gives the possibility to use the skin tone selected by the user previously
   * @type {String}
   * @default 'Default'
   * @values 'Default', 'Light', 'MediumLight', 'Medium', 'MediumDark', 'Dark'
   * @example
   * <dt-emoji-picker :skinTone="'Default'" />
   */
  skinTone: {
    type: String,
    default: 'Default',
  },

  skinSelectorButtonTooltipLabel: {
    type: String,
    required: true,
  },
});
const emits = defineEmits(
  [
    /**
     * It will emit the selected emoji
     * @event selected-emoji
     * @param {Object} emoji - The selected emoji from the emoji selector
     */
    'selected-emoji',

    /**
     * It will emit the selected skin tone
     * @event skin-tone
     * @param {String} skin - The selected skin tone from the skin selector
     */
    'skin-tone',
  ],
);

const searchQuery = ref('');
const emojiData = ref(null);
const selectedTabset = ref({});

const scrollIntoTab = ref(0);
const isScrollingWithScrollTo = ref(false);

const showRecentlyUsedTab = computed(() => props.recentlyUsedEmojis.length > 0);

/**
 * Handle the selected tabset event
 * We're creating a new object with the same value as selectedTabset and assigning it back to selectedTabset.
 * Vue will see this as a new object and trigger the watcher in the child component.
 * Using this method, we are able to trigger the watcher in the child component even if the value being passed is the same as the previous value.
 * @event selectedTabset
 * @param tabName {String} - The name of the tab that was selected
 */
function scrollToSelectedTabset (tabId) {
  searchQuery.value = '';
  selectedTabset.value = tabId;
  selectedTabset.value = { ...selectedTabset.value, tabId };
}

function updateScrollIntoTab (value) {
  scrollIntoTab.value = value;
}

function updateIsScrollingWithScrollTo (value) {
  isScrollingWithScrollTo.value = value;
}
function updateEmojiData (emoji) {
  emojiData.value = emoji;
}

/**
 * It will clean the state of the component before unmounting
 */
onBeforeUnmount(() => {
  cleanUp();
});

function cleanUp () {
  searchQuery.value = '';
  selectedTabset.value = {};
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

  &--header{
    padding: var(--su4) var(--su4) 0 var(--su4);
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

  &__alignment{
    width: auto;
    max-width: 340px;
    margin: 0 auto;
  }

  &--footer{
    height: 58px;
    background: #F9F9F9;
    border-top: 1px solid var(--bc-subtle);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
  }
}
</style>
