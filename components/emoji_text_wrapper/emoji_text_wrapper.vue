<script>
import { DtEmoji, EMOJI_SIZES } from '../emoji';
import { getEmojiJson, shortcodeToEmojiData } from '@/common/emoji';
const emojiRegex = require('emoji-regex');

export default {
  name: 'DtEmojiTextWrapper',

  components: {
    DtEmoji,
  },

  props: {
    /**
     * The size of all the emojis rendered. Can be any of the svg size utility
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
      emojiJson: {},
      VNodes: null,
    };
  },

  async created () {
    this.emojiJson = await getEmojiJson();
    this.VNodes = this.$slots.default;
  },

  beforeUpdate () {
    // eslint-disable-next-line vue/require-slots-as-functions
    const defaultSlotContent = this.$slots.default || [];
    this.VNodes = defaultSlotContent.map(VNode => this.replaceVNodeContent(VNode));
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
        ? emojis.map(match => match[0])
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
            attrs: { class: 'd-mx4 d-d-inline-block' },
            props: { code: item, size: this.size },
          });
        }
        return item;
      });
    },

    replaceVNodeContent (VNode) {
      if (!VNode.tag && VNode.text) {
        return this.replaceTextVNodeContent(VNode);
      }

      const children = VNode.children ? VNode.children.map(VNodeChild => this.replaceVNodeContent(VNodeChild)) : [];
      return this.$createElement(VNode.tag, VNode.data, children);
    },

    // TODO: Find a way to crawl vue components
    replaceVueComponentVNodeContent (VNode) {
      //
    },

    replaceTextVNodeContent (VNode) {
      const textContent = VNode.text.trim();
      const shortcodes = this.findShortCodes(textContent);
      const emojis = this.findEmojis(textContent);
      const replaceList = Array.from(new Set(shortcodes)).concat(Array.from(new Set(emojis)));
      if (replaceList.length === 0) return textContent;
      return this.textToVNodes(replaceList, textContent);
    },
  },

  render (h) {
    return h('div', this.VNodes || this.$slots.default);
  },
};
</script>
