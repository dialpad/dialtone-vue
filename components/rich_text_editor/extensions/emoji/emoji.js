import { mergeAttributes, Node, nodeInputRule } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-3';

import EmojiComponent from './EmojiComponent.vue';

export const inputRegex = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/;

const inputShortCodeRegex = /:\w+:$/;

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
      code: '',
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
        find: inputShortCodeRegex,
        type: this.type,
        getAttributes (attrs) {
          return {
            code: attrs[0],
          };
        },
      }),
      // TODO: unicode input
    ];
  },
});
