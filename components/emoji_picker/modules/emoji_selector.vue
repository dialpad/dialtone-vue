<template>
  <div class="d-emoji-picker__selector">
    <!--    Emoji Selector -->
    <div
      v-for="emoji in EMOJI_LIST"
      :key="emoji"
      class="d-emoji-picker__selector-emoji-list"
    >
      <p
        class="d-emoji-picker__selector-emoji-list-tab"
      >
        {{ emojiFilter ? 'Search results' : emoji.tab }}
      </p>

      <div>
        <button
          v-for="emoji in filteredEmojiList"
          :key="emoji.code"
          type="button"
          class="d-emoji-picker__selector-emoji-list-emoji-button"
          :aria-label="emoji.name"
          @click="$emit('selected-emoji', emoji)"
          @focusin="$emit('emoji-data', emoji)"
          @focusout="$emit('emoji-data', null)"
        >
          <dt-emoji
            :code="emoji.code"
          />
        </button>
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
   * @default null
   */
  skinTone: {
    type: Number,
    default: null,
  },
});

const emits = defineEmits([
  /**
   * Emitted when the user hover over an emoji
   * @event emoji-data
   * @param {Object} emoji - The emoji data that was hovered
    */
  'emoji-data',

  /**
   * Emitted when the user select an emoji
   * @event selected-emoji
   * @param {Object} emoji - The emoji data that was selected
    */
  'selected-emoji',
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
