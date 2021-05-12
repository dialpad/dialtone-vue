import { createTemplateFromVueFile } from '../storybook_utils';
import HsLink from './link';
import HsLinkMdx from './link.mdx';
import HsLinkDefaultTemplate from './link_default.story.vue';
import HsLinkVariantsTemplate from './link_variants.story.vue';

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
  component: HsLink,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: HsLinkMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, HsLinkDefaultTemplate);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, HsLinkVariantsTemplate);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
