<template>
  <img
    :class="[emojiClass, size, emojiClassInternal]"
    :aria-label="emojiAriaLabel"
    :alt="emojiAlt"
    :title="emojiTitle"
    :src="emojiSrc"
  >
</template>

<script>
import { EMOJI_SIZES } from './emoji_constants.js';
import emojiToolkit from 'emoji-toolkit';
import emojiJson from '@/node_modules/emoji-toolkit/emoji.json';

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

    /**
     * Additional class for the emoji img element.
     * Can accept all of String, Object, and Array, i.e. has the
     * same api as Vue's built-in handling of the class attribute.
     */
    emojiClass: {
      type: [String, Object, Array],
      default: '',
    },
  },

  data () {
    return {
      emojiClassInternal: undefined,
      emojiAlt: undefined,
      emojiTitle: undefined,
      emojiAriaLabel: undefined,
      emojiSrc: undefined,
    };
  },

  watch: {
    code: {
      handler: function () {
        this.getEmojiHtml();
      },

      immediate: true,
    },
  },

  methods: {
    getEmojiHtml () {
      const emojiHtml = emojiToolkit.toImage(this.code);
      const imgElement = this.getImgFromEmojiHtml(emojiHtml);
      if (!imgElement) { this.setInvalid(); return; }
      this.emojiClassInternal = imgElement.getAttribute('class');
      this.emojiAlt = imgElement.getAttribute('alt');
      this.emojiTitle = imgElement.getAttribute('title');
      const jsonKey = this.convertUnicodeToJsonKey(this.emojiAlt);
      this.emojiAriaLabel = emojiJson[jsonKey].name;
      this.emojiSrc = imgElement.getAttribute('src');
    },

    getImgFromEmojiHtml (emojiHtml) {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(emojiHtml, 'text/html');
      const imgElement = htmlDoc.getElementsByTagName('img')[0];
      return imgElement;
    },

    setInvalid () {
      this.emojiClassInternal = undefined;
      this.emojiAlt = undefined;
      this.emojiTitle = 'Invalid Emoji';
      this.emojiAriaLabel = 'Invalid Emoji';
      this.emojiSrc = undefined;
    },

    // Takes in an emoji unicode character(s) and converts it to an emoji string in the format
    // emoji.json expects as a key. There can be two unicode characters in an emoji if it contains a skin tone.
    // The second unicode character denotes skin tone and is separated with a -
    //
    // Example:
    // return value for smile emoji (no skin tone): 1f600
    // return value for left facing fist (light skin tone): 1f91b-1f3fb
    convertUnicodeToJsonKey (emoji) {
      let key = '';
      for (const codePoint of emoji) {
        if (key !== '') { key = key + '-'; }
        key = key + codePoint.codePointAt(0).toString(16);
      }
      return key;
    },
  },
};
</script>
