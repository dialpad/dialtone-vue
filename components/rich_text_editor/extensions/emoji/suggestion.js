// import { VueRenderer } from '@tiptap/vue-3';
// import tippy from 'tippy.js';
// import { emojisIndexed } from '@/components/emoji_picker/emojis';

// // import MentionList from './MentionList.vue';
// import { DtPopover } from '@/components/popover';

// export const emojiJson = emojisIndexed;

// export function getEmojiData () {
//   console.log('Emojis', emojiJson);
//   return emojiJson;
// }

// export default {
//   items: ({ query }) => {
//     const emoji = getEmojiData();
//     return [
//       'Lea Thompson',
//       'Cyndi Lauper',
//       'Tom Cruise',
//       'Madonna',
//       'Jerry Hall',
//       'Joan Collins',
//       'Winona Ryder',
//       'Christina Applegate',
//       'Alyssa Milano',
//       'Molly Ringwald',
//       'Ally Sheedy',
//       'Debbie Harry',
//       'Olivia Newton-John',
//       'Elton John',
//       'Michael J. Fox',
//       'Axl Rose', 'Emilio Estevez',
//       'Ralph Macchio',
//       'Rob Lowe',
//       'Jennifer Grey', 'Mickey Rourke',
//       'John Cusack', 'Matthew Broderick', 'Justine Bateman', 'Lisa Bonet',
//     ].filter(item => item.toLowerCase().startsWith(query.toLowerCase())).slice(0, 5);
//   },

//   // render: () => {
//   //   let component;
//   //   let popup;

//   //   return {
//   //     onStart: props => {
//   //       component = new VueRenderer(MentionList, {
//   //         props,
//   //         editor: props.editor,
//   //       });

//   //       if (!props.clientRect) {
//   //         return;
//   //       }

//   //       popup = tippy('#dtRichTextEditor', {
//   //         getReferenceClientRect: props.clientRect,
//   //         // appendTo: () => document.body,
//   //         content: component.element,
//   //         showOnCreate: true,
//   //         interactive: true,
//   //         trigger: 'manual',
//   //         placement: 'bottom-start',
//   //       });
//   //     },

//   //     onUpdate (props) {
//   //       component.updateProps(props);

//   //       if (!props.clientRect) {
//   //         return;
//   //       }

//   //       popup[0].setProps({
//   //         getReferenceClientRect: props.clientRect,
//   //       });
//   //     },

//   //     onKeyDown (props) {
//   //       if (props.event.key === 'Escape') {
//   //         popup[0].hide();

//   //         return true;
//   //       }

//   //       return component.ref?.onKeyDown(props);
//   //     },

//   //     onExit () {
//   //       popup[0].destroy();
//   //       component.destroy();
//   //     },
//   //   };
//   // },
// };
