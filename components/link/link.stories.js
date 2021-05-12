import { createTemplateFromVueFile } from '../storybook_utils';
import DsLink from './link';
import DsLinkMdx from './link.mdx';
import DsLinkDefaultTemplate from './link_default.story.vue';
import DsLinkVariantsTemplate from './link_variants.story.vue';

// Default Prop Values
export const argsData = {
  default: 'Default link',
  href: '#',
};

// Controls
export const argTypesData = {
  // Props
  kind: {
    defaultValue: '',
    control: {
      type: 'select',
      options: ['', 'warning', 'danger', 'success', 'muted'],
    },
  },

  // Slots
  default: {
    control: 'text',
    table: {
      type: {
        summary: 'text/html',
      },
    },
  },
};

// Story Collection
export default {
  title: 'Elements/Link',
  component: DsLink,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: DsLinkMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DsLinkDefaultTemplate);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DsLinkVariantsTemplate);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
