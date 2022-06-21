import {
  DtCollapsible,
} from './';
import { createTemplateFromVueFile } from '@/common/storybook_utils';
import CollapsibleMdx from './collapsible.mdx';
import DtCollapsibleDefaultStory from './collapsible_default.story';

const argsTypesData = {
  // Slots
  anchor: {
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },
  content: {
    control: 'text',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },
  // Props
  anchorText: {
    description: 'Text on the anchor if slot is unused.',
    table: {
      category: 'props',
      type: { summary: 'string' },
    },
    control: {
      type: 'text',
    },
  },

  // Action Event Handlers
  opened: {
    description: 'Emitted whenever the content is collapsed or expanded.',
    table: {
      type: { summary: 'event' },
    },
  },
  'update:open': {
    table: {
      disable: true,
    },
  },
};

export default {
  title: 'Components/Collapsible',
  component: DtCollapsible,
  argTypes: argsTypesData,
  excludeStories: /.Data$/,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: CollapsibleMdx,
    },
    options: {
      showPanel: true,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtCollapsibleDefaultStory,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {
  maxWidth: '512px',
};
