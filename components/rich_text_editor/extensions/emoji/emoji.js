import { mergeAttributes, Node, nodeInputRule, nodePasteRule } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-3';

import EmojiComponent from './EmojiComponent.vue';
import { shortcodeToEmojiData, codeToEmojiData } from '@/common/emoji';

const inputShortCodeRegex = /:\w+:$/;
const pasteShortCodeRegex = /:\w+:/g;
/* eslint-disable max-len */
const inputUnicodeRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])$/;
const pasteUnicodeRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
/* eslint-enable max-len */

const shortCodeInputMatch = (text) => {
  const match = text.match(inputShortCodeRegex);
  if (!match) {
    return;
  }

  const code = match[0];
  if (!shortcodeToEmojiData(code)) {
    return;
  }

  // needs to be a dict returned
  // ref type InputRuleMatch: https://github.com/ueberdosis/tiptap/blob/main/packages/core/src/InputRule.ts#L16
  return {
    index: match.index,
    text: match[0],
    match,
  };
};

const shortCodePasteMatch = (text) => {
  const matches = [...text.matchAll(pasteShortCodeRegex)];
  if (!matches) {
    return null;
  }

  const validMatches = matches.filter(match => {
    return codeToEmojiData(match[0]);
  });

  return validMatches.map(match => {
    return {
      index: match.index,
      text: match[0],
      match,
    };
  });
};

export const Emoji = Node.create({
  name: 'emoji',
  group: 'inline',
  inline: true,
  selectable: true,

  addNodeView () {
    return VueNodeViewRenderer(EmojiComponent);
  },

  addAttributes () {
    return {
      code: {
        default: null,
      },
    };
  },

  addOptions () {
    return {
      HTMLAttributes: {},
    };
  },

  parseHTML () {
    return [
      {
        tag: 'emoji-component',
      },
    ];
  },

  renderText ({ node }) {
    return node.attrs.code;
  },

  renderHTML ({ HTMLAttributes }) {
    return ['emoji-component', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },

  addInputRules () {
    return [
      // shortcode input
      nodeInputRule({
        find: shortCodeInputMatch,
        type: this.type,
        getAttributes (attrs) {
          return {
            code: attrs[0],
          };
        },
      }),

      nodeInputRule({
        find: (text) => {
          const match = text.match(inputUnicodeRegex);
          if (!match) {
            return;
          }

          const code = match[0];
          if (!codeToEmojiData(code)) {
            return;
          }

          // needs to be a dict returned
          // ref type InputRuleMatch: https://github.com/ueberdosis/tiptap/blob/main/packages/core/src/InputRule.ts#L16
          return {
            index: match.index,
            text: match[0],
          };
        },
        type: this.type,
        getAttributes (attrs) {
          const unicode = shortcodeToEmojiData(attrs[0]).unicode_output;
          const emoji = String.fromCodePoint(parseInt(unicode, 16));
          return {
            code: emoji,
          };
        },
      }),
    ];
  },

  addPasteRules () {
    return [
      nodePasteRule({
        find: shortCodePasteMatch,
        type: this.type,
        getAttributes (attrs) {
          return {
            code: attrs[0],
          };
        },
      }),
      nodePasteRule({
        find: pasteUnicodeRegex,
        type: this.type,
        getAttributes (attrs) {
          return {
            code: attrs[0],
          };
        },
      }),
    ];
  },
});
