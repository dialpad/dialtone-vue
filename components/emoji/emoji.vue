<template>
  <img
    :class="size"
    :aria-label="emojiLabel"
    :alt="emojiAlt"
    :title="emojiLabel"
    :src="emojiSrc"
  >
</template>

<script>
import { EMOJI_SIZES } from './emoji_constants.js';
import {
  codeToEmojiData,
  stringToUnicode,
  emojiImageUrlSmall,
  emojiFileExtensionSmall,
  emojiImageUrlLarge,
  emojiFileExtensionLarge,
} from '@/common/emoji';

export default {
  name: 'DtEmoji',

  props: {
    /**
     * Supports shortcode ex: :smile: or unicode ex: 😄. Will display the resulting emoji.
     * See https://emojipedia.org/joypixels/ for all supported shortcode/unicode.
     */
    code: {
      type: String,
      default: null,
    },

    /**
     * The size of the emoji. Can be any of the svg size utility
     * classes from https://dialpad.design/utilities/svg/size
     */
    size: {
      type: String,
      default: EMOJI_SIZES.SIZE_20,
      validator: (t) => Object.values(EMOJI_SIZES).includes(t),
    },
  },

  data () {
    return {
      emojiData: null,
    };
  },

  computed: {
    emojiDataValid () {
      if (this.emojiData) {
        return true;
      } else {
        return false;
      }
    },

    emojiSrc () {
      if (!this.emojiDataValid) { return undefined; }
      if (['d-svg--size14', 'd-svg--size16'].includes(this.size)) {
        return emojiImageUrlSmall + this.emojiData.key + emojiFileExtensionSmall;
      } else {
        return emojiImageUrlLarge + this.emojiData.key + emojiFileExtensionLarge;
      }
    },

    emojiAlt () {
      if (!this.emojiDataValid) { return undefined; }
      return stringToUnicode(this.emojiData.unicode_output);
    },

    emojiLabel () {
      if (!this.emojiDataValid) { return 'Invalid Emoji'; }
      return this.emojiData.name;
    },
  },

  watch: {
    code: {
      handler: function () {
        this.getEmojiData();
      },

      immediate: true,
    },
  },

  methods: {
    async getEmojiData () {
      this.emojiData = await codeToEmojiData(this.code);
    },
  },
};
</script>
