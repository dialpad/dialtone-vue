<script>
import {} from './emoji_text_wrapper_constants.js';
import { DtEmoji } from '../emoji';
import { getEmojiJson, shortcodeToEmojiData } from '@/common/emoji';

export default {
  name: 'DtEmojiTextWrapper',

  components: {
    DtEmoji,
  },

  props: {},

  data () {
    return {
      emojiJson: {},
    };
  },

  async created () {
    this.emojiJson = await getEmojiJson();
  },

  methods: {

    updateList () {
      this.textContent = this.$refs.text_wrapper.innerText;
      this.findShortCodes();
      this.findEmojis();
    },

    /**
     * Finds every shortcode in slot text
     * filters only the existing codes in emojiJson and
     * removes duplicates
     * @returns {string[]}
     */
    findShortCodes (textContent) {
      const shortCodes = textContent.match(/:[^:]+:/g) || [];
      return shortCodes.filter(code => shortcodeToEmojiData(this.emojiJson, code));
    },

    /**
     * Finds every emoji in slot text and
     * removes duplicates
     * @returns {string[]}
     */
    findEmojis (textContent) {
      return textContent.match(/\p{Emoji}+/gu) || textContent.match(/[\p{Emoji}\u200d]+/gu) || [];
    },

    /**
     * Replaces the valid shortcodes and emojis from the wrapper text content with the DtEmoji component.
     * @returns Object
     */
    textToVnodes (h, replaceList, textContent) {
      const regexp = new RegExp(`(${replaceList.join('|')})`, 'g');
      const split = textContent.split(regexp);
      const vNodes = split.map((item) => {
        if (replaceList.includes(item)) {
          return h(DtEmoji, {
            attrs: {
              class: 'd-d-inline-block',
            },
            props: {
              code: item,
            },
          });
        }
        return item;
      });
      return vNodes;
    },
  },

  render (h) {
    // eslint-disable-next-line vue/require-slots-as-functions
    const textContent = this.$slots.default[0].text;

    const shortcodes = this.findShortCodes(textContent);
    const emojis = this.findEmojis(textContent);
    const replaceList = Array.from(new Set(shortcodes)).concat(Array.from(new Set(emojis)));
    const vNodes = this.textToVnodes(h, replaceList, textContent);

    return h('span', vNodes);
  },
};
</script>
