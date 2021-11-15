import { createTemplateFromVueFile } from '../storybook_utils';
import DtBreadcrumbs from './breadcrumbs';
import DtBreadcrumbsMdx from './breadcrumbs.mdx';
import DtBreadcrumbsDefaultTemplate from './breadcrumbs_default.story.vue';
import DtBreadcrumbsVariantsTemplate from './breadcrumbs_variants.story.vue';

// Default Prop Values
export const argsData = {
  breadcrumbs: [{
    href: '#',
    label: 'Root',
  },
  {
    href: '#',
    label: 'Section',
  },
  {
    href: '#',
    label: 'Section',
  },
  {
    href: '#',
    label: 'Section',
  },
  {
    href: '#',
    label: 'Current Page',
    selected: true,
  }],
};

export const argTypesData = {
  // Slots
  default: {
    control: 'text',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },

  // Props
  breadcrumbs: {
    control: 'object',
    table: {
      defaultValue: {
        summary: '{ url: string, label: string }[]',
      },
    },
  },
};

// Story Collection
export default {
  title: 'Components/Breadcrumbs',
  component: DtBreadcrumbs,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: DtBreadcrumbsMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) =>
  createTemplateFromVueFile(args, argTypes, DtBreadcrumbsDefaultTemplate);
const VariantsTemplate = (args, { argTypes }) =>
  createTemplateFromVueFile(args, argTypes, DtBreadcrumbsVariantsTemplate);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
