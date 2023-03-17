<template>
  <div class="d-emoji-picker__selector">
    <!--    Emoji Selector -->
    <div
      v-for="emoji in EMOJI_LIST"
      :key="emoji"
      class="d-emoji-picker__selector--emoji-list"
    >
      <p
        class="d-emoji-picker__selector--emoji-list__tab"
      >
        {{ emojiFilter ? 'Search results' : emoji.tab }}
      </p>

      <div>
        <dt-emoji
          v-for="emoji in filteredEmojiList"
          :key="emoji.code"
          class="d-emoji-picker__selector--emoji-list__emoji"
          :code="emoji.code"
          @mouseover="$emit('emojiData', emoji)"
          @mouseleave="$emit('emojiData', null)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { DtEmoji } from '@/components/emoji';
import { emojiJson } from '@/common/emoji';

// TO DO EMOJI JSON = EMOJI LIST AND UTILITY FUNCTIONS

import { computed } from 'vue';
const props = defineProps({
  /**
   * The filter to apply to the emoji list
   * @type {String}
   * @default ''
   */
  emojiFilter: {
    type: String,
    default: '',
  },

  /**
   * The skin tone to apply to the emoji list
   * @type {String}
   * @default ''
   */
  skinTone: {
    type: Number,
    default: null,
  },
});

const emits = defineEmits([
  /**
   * Emitted when the user hover over an emoji
   * @event emojiData
   * @param {Object} emojiData - The emoji data that was selected
    */
  'emojiData',
]);

// emojiJson
const emojiList = [];

/**
 * Filtered emoji list based on the filter
 */
const filteredEmojiList = computed(() => {
  if (props.emojiFilter) {
    return emojiList.filter((emoji) => emoji.includes(props.emojiFilter));
  }
  return emojiList;
});
</script>
