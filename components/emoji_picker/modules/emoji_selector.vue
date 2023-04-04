<template>
  <div class="d-emoji-picker__selector">
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

/**
 * Search for a string using the Boyer-Moore algorithm.
 * @param {string} haystack - The string to search in.
 * @param {string} needle - The string to search for.
 * @returns {number} - The index of the first occurrence of the needle string in the haystack string, or -1 if the needle string is not found.
 */
function boyerMooreSearch (haystack, needle) {
  const needleLen = needle.length;

  // populate bad character table
  const badCharTable = {};
  for (let i = 0; i < needleLen; i++) {
    // calculate the distance from the rightmost occurrence of the character to the end of the needle string
    const dist = needleLen - i - 1;
    // update the bad character table with the distance for this character
    badCharTable[needle[i]] = dist;
  }

  let i = needleLen - 1;
  while (i < haystack.length) {
    let j = needleLen - 1;

    // compare characters from right to left
    while (j >= 0 && haystack[i] === needle[j]) {
      i--;
      j--;
    }

    if (j < 0) {
      // match found
      return i + 1;
    }

    // calculate shift distance
    const badCharDist = badCharTable[haystack[i]] || needleLen;
    const goodSuffixDist = j - (needle.lastIndexOf(needle.slice(j + 1)) || -1);
    const shift = Math.max(badCharDist, goodSuffixDist);

    i += shift;
  }

  return -1;
}

function searchByNameAndKeywords () {
  const t0 = performance.now();
  if (!props.emojiFilter) { return; }

  const emojiFilter = props.emojiFilter;
  filteredEmojis.value = currentEmojis.value.filter(obj => {
    const nameIncludesSearchStr = boyerMooreSearch(obj.name, emojiFilter) !== -1;
    let keywordsIncludeSearchStr = false;
    for (let i = 0; i < obj.keywords.length; i++) {
      if (boyerMooreSearch(obj.keywords[i], emojiFilter) !== -1) {
        keywordsIncludeSearchStr = true;
        break;
      }
    }

    return nameIncludesSearchStr || keywordsIncludeSearchStr;
  });

  const t1 = performance.now();
  console.log(`Search took ${t1 - t0} milliseconds.`);
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
