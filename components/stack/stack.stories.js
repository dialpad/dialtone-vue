import DtStack from './stack';
import BaseStackMdx from './stack.mdx';
import StackDefault from './stack_default.story';
import { createTemplateFromVueFile } from '@/common/storybook_utils';
import { DT_STACK_DIR, DT_STACK_GAP, DT_STACK_RESPONSIVE_BREAKPOINTS } from '@/components/stack/stack_constants';

export const argTypesData = {
  // Props
  dir: {
    control: 'object',
    table: {
      type: {
        detail: `
        Directions: ${Object.keys(DT_STACK_DIR)}
Breakpoints: ${DT_STACK_RESPONSIVE_BREAKPOINTS}
String: 'column' 
Object: { default: 'row', sm: 'column', lg: 'column-reverse' }`,
      },
    },
  },
  as: {
    control: 'text',
  },
  gap: {
    defaultValue: '0',
    control: {
      type: 'select',
      options: Object.keys(DT_STACK_GAP),
    },
  },
};

export default {
  title: 'Components/Stack',
  component: DtStack,
  parameters: {
    docs: {
      page: BaseStackMdx,
    },
    options: {
      showPanel: true,
    },
  },
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
};

const Template = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, StackDefault);

export const Default = Template.bind({});
Default.args = {};
