import Mention from '@tiptap/extension-mention';
import { VueNodeViewRenderer } from '@tiptap/vue-3';

// Mention component
import MentionComponent from './MentionComponent.vue';
import { mergeAttributes } from '@tiptap/core';

export const MentionPlugin = Mention.extend({

  addNodeView () {
    return VueNodeViewRenderer(MentionComponent);
  },

  parseHTML () {
    return [
      {
        tag: 'mention-component',
      },
    ];
  },

  addAttributes () {
    return {
      name: {
        default: '',
      },
    };
  },

  renderHTML ({ HTMLAttributes }) {
    return ['mention-component', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
});
