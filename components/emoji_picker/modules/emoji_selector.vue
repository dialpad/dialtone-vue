<template>
  <div class="d-emoji-picker__selector">
    <div class="d-emoji-picker__list">
      <div
        v-for="(tabsetLabel, index) in tabsetLabels"
        :key="tabs[index]"
      >
        <p> {{ tabsetLabel }} </p>
        <!--        {{ emojiFilter ? 'Search results' : emoji.tab }} -->
        <div
          class="d-emoji-picker__tab"
        >
          <button
            v-for="emoji in (emojis[tabs[index] + skinTone] ? emojis[tabs[index] + skinTone] : emojis[tabs[index]])"
            :key="emoji.shortname"
            type="button"
            :aria-label="emoji.name"
            @click="$emit('selected-emoji', emoji)"
            @focusin="$emit('emoji-data', emoji)"
            @focusout="$emit('emoji-data', null)"
            @mouseover="$emit('emoji-data', emoji)"
            @mouseleave="$emit('emoji-data', null)"
          >
            <dt-emoji
              :code="emoji.shortname"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { DtEmoji } from '@/components/emoji';
import emojis from '@/components/emoji_picker/emojis';

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
    required: true,
  },

  tabsetLabels: {
    type: Array,
    required: true,
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

const tabs = ['Recently used', 'Custom', 'People', 'Nature', 'Food', 'Activity', 'Travel', 'Objects', 'Symbols', 'Flags'];

// /**
//  * Filtered emoji list based on the filter
//  */
// const filteredEmojiList = computed(() => {
//   if (props.emojiFilter) {
//     // TODO should filter by keywords also
//     return emojiList.filter((emoji) => emoji.includes(props.emojiFilter));
//   }
//   return emojiList;
// });
</script>

<style lang="less" scoped>
.d-emoji-picker{
  &__selector{
    margin-top: 20px;
  }

  &__list{
    height: 100%;
    max-height: 297px;
    overflow: scroll;

    p{
      margin-bottom: 10px;
      font-size: 12px;
      font-weight: 700;
    }

    div:not(:first-child){
      p{
        margin-top: 25px;
      }
    }
  }

  &__tab{
    gap: 10px;
    display: flex;
    flex-wrap: wrap;

    button{
      border: none;
      background: none;
      cursor: pointer;
      margin: 0;
      padding: 0;
      outline: none;
    }
  }
}
</style>
