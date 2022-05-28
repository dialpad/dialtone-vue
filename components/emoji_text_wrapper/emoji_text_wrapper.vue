<template>
  <div
    data-qa="dt-emoji-text-wrapper"
    v-on="$listeners"
  >
    <span
      ref="text_wrapper"
      class="d-d-none"
    >
      <slot />
    </span>
    <component :is="processedHTML" />
  </div>
</template>

<script>
import {} from './emoji_text_wrapper_constants.js';
import { DtEmoji } from '../emoji';
import { getEmojiJson, shortcodeToEmojiData } from '@/common/emoji';
import { htmlFragment } from '@/common/utils';

export default {
  name: 'DtEmojiTextWrapper',

  props: {},

  data () {
    return {
      textContent: '',
      replaceList: [],
      observer: null,
      processedHTML: null,
    };
  },

  /**
   * Gets the inner text content from the wrapper slot
   * fetch the emojiJson file and search for shortcodes and emojis.
   */
  async mounted () {
    this.emojiJson = await getEmojiJson();
    this.initObserver();
    this.updateList();
    this.processHTML();
  },

  methods: {
    updateList () {
      this.textContent = this.$refs.text_wrapper.innerText;
      this.findShortCodes();
      this.findEmojis();
    },

    beforeDestroy () {
      if (this.observer) this.observer.disconnect();
    },

    /**
     * Finds every shortcode in slot text
     * filters only the existing codes in emojiJson and
     * removes duplicates
     * @returns {string[]}
     */
    findShortCodes () {
      const shortCodes = this.textContent.match(/:[^:]+:/g) || [];
      const filtered = shortCodes.filter(code => shortcodeToEmojiData(this.emojiJson, code));
      this.replaceList = this.replaceList.concat(Array.from(new Set(filtered)));
    },

    /**
     * Finds every emoji in slot text and
     * removes duplicates
     * @returns {string[]}
     */
    findEmojis () {
      const emojis = this.textContent.match(/\p{Emoji}+/gu) || this.textContent.match(/[\p{Emoji}\u200d]+/gu) || [];
      this.replaceList = this.replaceList.concat(Array.from(new Set(emojis)));
    },

    initObserver () {
      const config = { characterData: true, attributes: false, childList: false, subtree: true };
      const self = this;
      const callback = () => {
        self.$nextTick(() => {
          this.updateList();
          this.processHTML();
        });
      };
      const observer = new MutationObserver(callback);
      observer.observe(this.$refs.text_wrapper, config);
      this.observer = observer;
    },

    /**
     * Replaces the valid shortcodes and emojis from the wrapper text content with the DtEmoji component.
     * @returns Object
     */
    processHTML () {
      if (!this.replaceList) return;

      const regexp = new RegExp(this.replaceList.join('|'), 'g');
      const replacedHTML = this.textContent.replace(regexp, (code) => {
        return `<dt-emoji code="${code}" class="d-d-inline-block" />`;
      });
      this.processedHTML = {
        name: 'Wrapper',
        components: { DtEmoji, htmlFragment },
        template: `<div>${replacedHTML}</div>`,
      };
    },
  },
};
</script>
