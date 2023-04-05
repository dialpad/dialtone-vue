<template>
  <div class="d-emoji-picker__selector">
    <h1>CDN TEST EMOJIS</h1>
    <div class="d-emoji-picker__list">
      <p v-if="emojiFilter">
        {{ searchResultsLabel }}
      </p>
      <div
        v-for="(tabsetLabel, index) in tabsetLabels"
        v-show="!emojiFilter"
        :key="tabs[index]"
      >
        <p> {{ tabsetLabel }} </p>
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
      <div
        v-if="emojiFilter"
        class="d-emoji-picker__tab"
      >
        <button
          v-for="emoji in filteredEmojis"
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
</template>

<script setup>
import { DtEmoji } from '@/components/emoji';
import emojis from '@/components/emoji_picker/emojis';
import { ref, watch } from 'vue';

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
   * @required
   */
  skinTone: {
    type: Number,
    required: true,
  },

  /**
   * The labels for the tabset
   * @type {Array}
   * @required
   */
  tabsetLabels: {
    type: Array,
    required: true,
  },

  /**
   * The label for the search results tab
   * @type {String}
   * @required
   */
  searchResultsLabel: {
    type: String,
    required: true,
  },
});

defineEmits([
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

/**
 * The list of current emojis that match the filter
 * This will be updated when the emojiFilter changes
 * This is used to display the search results
 * The difference between this and the current emojis list is that this one will not have the skin tone applied
 */
const filteredEmojis = ref([]);

/**
 * The current emojis list we are displaying
 * This will be updated when the skin tone changes
 * The difference between this and the emojis list is that this one will have the skin tone applied
 */
const currentEmojis = ref([]);

/**
 * Update the current emojis list on skin tone changes
 * Also update the filtered emojis list
 * @listens skinTone
 */
watch(() => props.skinTone, () => {
  currentEmojis.value = [...emojis[`People${props.skinTone}`], ...emojis.Nature, ...emojis.Food, ...emojis[`Activity${props.skinTone}`], ...emojis.Travel, ...emojis[`Objects${props.skinTone}`], ...emojis.Symbols, ...emojis.Flags];
  searchByNameAndKeywords();
}, { immediate: true });

/**
 * Search for emojis by name and keywords
 * Will update the filtered emojis list on emojiFilter update
 * @listens emojiFilter
 */
watch(() => props.emojiFilter,
  debounce(() => {
    searchByNameAndKeywords();
  }));

function searchByNameAndKeywords () {
  filteredEmojis.value = currentEmojis.value.filter(obj => {
    const nameIncludesSearchStr = obj.name.includes(props.emojiFilter);
    const keywordsIncludeSearchStr = obj.keywords.some(keyword => keyword.includes(props.emojiFilter));
    return nameIncludesSearchStr || keywordsIncludeSearchStr;
  });
}

function debounce (fn, delay = 300) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}
</script>

<style lang="less" scoped>
.d-emoji-picker{
  &__selector{
    margin-top: 20px;
    min-height: 297px;
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
