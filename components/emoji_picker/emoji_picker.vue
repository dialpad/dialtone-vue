<template>
  <div className="d-emoji-picker">
    <div className="d-emoji-picker--header">
      <emoji-tabset
        :recently-used-tab="showRecentlyUsedTab"
        @tabset-selected="scrollToSelectedTabset"
      />
    </div>
    <div className="d-emoji-picker--body">
      <emoji-search
        v-model="searchQuery"
        :search-placeholder-label="searchPlaceholderLabel"
      />
      <!--      <emojiSelector -->
      <!--        :emoji-filter="searchQuery" -->
      <!--        :skin-tone="skinTone" -->
      <!--        @emoji-data="updateEmojiData" -->
      <!--        @selected-emoji="emits('selected-emoji', $event)" -->
      <!--      /> -->
    </div>
    <div className="d-emoji-picker--footer">
      <!--      <emojiData :emoji-data="emojiData" /> -->
      <!--      <emojiSkinSelector @skin-tone="updateSkinTone" /> -->
    </div>
  </div>
</template>

<script setup>
import EmojiSearch from './modules/emoji_search.vue';
import EmojiTabset from './modules/emoji_tabset.vue';
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
});
const emits = defineEmits(
  /**
     * It will emit the selected emoji
     * @event selected-emoji
     * @param {Object} emoji - The selected emoji from the emoji selector
     */
  ['selected-emoji'],
);

const searchQuery = ref('');
const emojiData = ref(null);
const skinTone = ref(null);

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

function updateSkinTone (skinTone) {
  skinTone.value = skinTone;
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
  max-height: 421px;

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
}
</style>
