<template>
  <div className="d-emoji-picker">
    <div className="d-emoji-picker--header">
      <emojiTabset
        :recently-used-tab="showRecentlyUsedTab"
        @tabset-selected="scrollToSelectedTabset"
      />
    </div>
    <div className="d-emoji-picker--body">
      <emojiSearch v-model="searchQuery" />
      <emojiSelector
        :emoji-filter="searchQuery"
        :skin-tone="skinTone"
        @emoji-data="updateEmojiData"
        @selected-emoji="emits('selected-emoji', $event)"
      />
    </div>
    <div className="d-emoji-picker--footer">
      <emojiData :emoji-data="emojiData" />
      <emojiSkinSelector @skin-tone="updateSkinTone" />
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, ref } from 'vue';

const props = defineProps({
  /**
   * The list of recently used emojis
   * This list is necessary to fill the recently used tab
   * @type {Array}
   * @default []
   * @example
   * <dt-emoji-picker :recentlyUsedEmojis="['😀', '😁']" />
   */
  recentlyUsedEmojis: {
    type: Array,
    default: () => [],
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
