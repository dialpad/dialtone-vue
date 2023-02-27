import DtScroller from './scroller';
import BaseScrollerMdx from './scroller.mdx';
import ScrollerDefault from './scroller_default.story';
import { createTemplateFromVueFile } from '@/common/storybook_utils';
export const argTypesData = {
  // Slots
//   default: {
//     control: { type: null },
//     description: 'Slot for main content',
//     table: {
//       type: {
//         summary: 'VNode',
//         detail: `
//         Example:
// <dt-stack>
//   <dt-card />
//   <dt-card />
//   <dt-card />
// </dt-stack>`,
//       },
//     },
//   },

  // Props
//   direction: {
//     control: 'object',
//     defaultValue: { default: 'column' },
//     table: {
//       type: {
//         detail: `
//         Directions: "${Object.keys(DT_STACK_DIRECTION)}"
// Breakpoints: "${DT_STACK_RESPONSIVE_BREAKPOINTS}"
// String: "column"
// Object: { "default": "row", "sm": "column", "lg": "column-reverse" }`,
//       },
//     },
//   },
//   as: {
//     control: 'text',
//     defaultValue: 'div',
//   },
//   gap: {
//     control: {
//       type: 'select',
//       options: DT_STACK_GAP,
//     },
//     defaultValue: '400',
//   },
};

export default {
  title: 'Components/Scroller',
  component: DtScroller,
  parameters: {
    docs: {
      page: BaseScrollerMdx,
    },
    options: {
      showPanel: true,
    },
  },
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
};

const Template = (args) => createTemplateFromVueFile(args, ScrollerDefault);

export const Default = Template.bind({});
Default.args = {};
