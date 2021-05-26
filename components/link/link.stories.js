import { createTemplateFromVueFile } from '../storybook_utils';
import DtLink from './link';
import DtLinkMdx from './link.mdx';
import DtLinkDefaultTemplate from './link_default.story.vue';
import DtLinkVariantsTemplate from './link_variants.story.vue';
import { LINK_VARIANTS } from './link_constants';

// Default Prop Values
export const argsData = {
  default: 'Default link',
  href: '#',
};

// Controls
export const argTypesData = {
  // Props
  href: {
    description: 'native "href" prop',
    defaultValue: '#',
    type: {
      summary: 'string',
    },
    table: {
      category: 'native props',
      defaultValue: {
        summary: '',
      },
    },
    control: 'text',
  },
  rel: {
    description: `native "rel" prop. Relationship between the location in the document containing the hyperlink
        and the destination resource.`,
    defaultValue: undefined,
    type: {
      summary: 'string',
    },
    table: {
      category: 'native props',
      defaultValue: {
        summary: 'undefined',
      },
    },
    control: 'text',
  },
  target: {
    description: `native "target" prop. Browsing context for hyperlink navigation`,
    defaultValue: undefined,
    type: {
      summary: 'string',
    },
    table: {
      category: 'native props',
      defaultValue: {
        summary: 'undefined',
      },
    },
    control: {
      type: 'select',
      options: ['_blank', '_self', '_parent', '_top'],
    },
  },
  kind: {
    defaultValue: '',
    control: {
      type: 'select',
      options: LINK_VARIANTS,
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
