<script>
import {} from './emoji_text_wrapper_constants.js';
import { DtEmoji } from '../emoji';
import { getEmojiJson, shortcodeToEmojiData, unicodeToEmojiData, unicodeToString } from '@/common/emoji';
import { DtButton } from '../button';
const emojiRegex = require('emoji-regex');

export default {
  name: 'DtEmojiTextWrapper',

  components: {
    DtEmoji,
    DtButton,
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
    /**
     * Finds every shortcode in slot text
     * filters only the existing codes in emojiJson and
     * removes duplicates
     * @returns {string[]}
     */
    findShortCodes (textContent) {
      const shortCodes = textContent.match(/:[^:]+:/g);
      return shortCodes ? shortCodes.filter(code => shortcodeToEmojiData(this.emojiJson, code)) : [];
    },

    /**
     * Finds every emoji in slot text and
     * removes duplicates
     * @returns {string[]}
     */
    findEmojis (textContent) {
      const emojis = [...textContent.matchAll(emojiRegex())];
      return emojis.length
        ? emojis.filter(match => {
          const emoji = match[0];
          const unicode = unicodeToString(emoji);
          return unicodeToEmojiData(this.emojiJson, unicode);
        }).map(match => match[0])
        : [];
    },

    /**
     * Replaces the valid shortcodes and emojis from the wrapper text content with the DtEmoji component.
     * @returns Object
     */
    textToVNodes (replaceList, textContent) {
      const regexp = new RegExp(`(${replaceList.join('|')})`, 'g');
      const split = textContent.split(regexp);
      return split.map((item) => {
        if (replaceList.includes(item)) {
          return this.$createElement(DtEmoji, {
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
    },

    // TODO: Find emojis and shortcodes on input value?
    // TODO: Find a way to crawl nodes and components
    replaceTextContent (vNode) {
      if (vNode.componentOptions) {
        // return this.$createElement('span', this.replaceTextContent(vNode.componentInstance.$slots.default));
      } else {
        // This is a text vNode, replace the text inside it
        if (!vNode.tag && vNode.text) {
          const textContent = vNode.text.trim();
          const shortcodes = this.findShortCodes(textContent);
          const emojis = this.findEmojis(textContent);
          const replaceList = Array.from(new Set(shortcodes)).concat(Array.from(new Set(emojis)));
          if (replaceList.length === 0) return textContent;
          return this.textToVNodes(replaceList, textContent);
        }

        return vNode.children.map(node => this.$createElement(vNode.tag, this.replaceTextContent(node)));
      }
    },
  },

  render (h) {
    // eslint-disable-next-line vue/require-slots-as-functions
    const vNodes = this.$slots.default.map(vNode => this.replaceTextContent(vNode));
    // vNodes.children.map(vNode => this.replaceTextContent(vNode));

    return h('div', vNodes);
  },
};
</script>
