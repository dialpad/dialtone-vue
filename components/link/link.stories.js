import { createTemplateFromVueFile } from '../storybook_utils';
import DtLink from './link';
import DtLinkMdx from './link.mdx';
import DtLinkDefaultTemplate from './link_default.story.vue';
import DtLinkVariantsTemplate from './link_variants.story.vue';
import { LINK_KIND_CLASSES } from './link_constants';

// Default Prop Values
export const argsData = {
  default: 'default link',
  href: '#',
};

// Controls
export const argTypesData = {
  // Props
  kind: {
    defaultValue: '',
    control: {
      type: 'select',
      options: LINK_KIND_CLASSES,
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
  component: DtLink,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: DtLinkMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DtLinkDefaultTemplate);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DtLinkVariantsTemplate);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
