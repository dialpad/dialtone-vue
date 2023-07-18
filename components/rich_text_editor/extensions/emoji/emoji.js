import { mergeAttributes, Node, nodeInputRule, nodePasteRule } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-3';
import Component from './emoji.vue';
import { shortcodeToEmojiData } from '@/common/emoji';

const inputRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])$/;
const inputShortCodeRegex = /:\w+:$/;
const pasteRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;

export const Emoji = Node.create({
  name: 'tiptap-emoji',
  group: 'inline',
  inline: true,
  addAttributes () {
    return {
      code: '',
    };
  },
  parseHTML () {
    return [
      {
        tag: 'tiptap-emoji',
      },
    ];
  },
  renderHTML ({ HTMLAttributes }) {
    return ['tiptap-emoji', mergeAttributes(HTMLAttributes)];
  },
  addInputRules () {
    return [
      nodeInputRule({
        find: inputRegex,
        type: this.type,
        getAttributes (attrs) {
          return {
            code: attrs[0],
          };
        },
      }),
      nodeInputRule({
        find: inputShortCodeRegex,
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
        find: pasteRegex,
        type: this.type,
        getAttributes (attrs) {
          return {
            code: attrs[0],
          };
        },
      }),
    ];
  },
  addNodeView () {
    return VueNodeViewRenderer(Component);
  },
  renderText ({ node }) {
    return node.attrs.code;
  },
});
