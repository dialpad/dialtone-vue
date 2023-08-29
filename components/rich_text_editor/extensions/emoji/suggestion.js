import { VueRenderer } from '@tiptap/vue-3';
import { emojisIndexed } from '@/components/emoji_picker/emojis';

import EmojiList from './EmojiList.vue';
import { createTippy } from '@/components/popover/tippy_utils';

export default {
  items: ({ query }) => {
    console.log(query.length);
    if (query.length < 2) {
      return [];
    }
    const emojiList = Object.values(emojisIndexed);
    const filteredEmoji = emojiList.filter(function (item) {
      if (item.shortname.substring(1, item.shortname.length - 1).startsWith(query.toLowerCase())) {
        return true;
      }
      return false;
    });
    return filteredEmoji.map(item => item.shortname);
  },

  command: ({ editor, range, props }) => {
    // increase range.to by one when the next node is of type "text"
    // and starts with a space character
    const nodeAfter = editor.view.state.selection.$to.nodeAfter;
    const overrideSpace = nodeAfter?.text?.startsWith(' ');

    if (overrideSpace) {
      range.to += 1;
    }

    editor
      .chain()
      .focus()
      .insertContentAt(range, [
        {
          type: 'emoji',
          attrs: props,
        },
        {
          type: 'text',
          text: ' ',
        },
      ])
      .run();

    window.getSelection()?.collapseToEnd();
  },

  render: () => {
    let component;
    let popup;

    return {
      onStart: props => {
        component = new VueRenderer(EmojiList, {
          props,
          editor: props.editor,
        });

        if (!props.clientRect) {
          return;
        }

        const tippyOptions = {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start',
          contentElement: null,
        };

        popup = createTippy('body', tippyOptions);
      },

      onUpdate (props) {
        component.updateProps(props);

        if (!props.clientRect) {
          return;
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        });
      },

      onKeyDown (props) {
        if (props.event.key === 'Escape') {
          popup[0].hide();

          return true;
        }

        return component.ref?.onKeyDown(props);
      },

      onExit () {
        popup[0].destroy();
        component.destroy();
      },
    };
  },
};
