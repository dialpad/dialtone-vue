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
  breadcrumbsInverted: [{
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
  // Props
  some: {
    description: 'Describes the some prop',
    table: {
      category: 'props',
      type: {
        summary: 'string',
      },
    },
    control: {
      type: 'text',
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
  someSlot: {
    name: 'some',
    description: 'Slot for some',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'text/html',
      },
    },
  },

  // Action Event Handlers
  onEvent: {
    table: {
      disable: true,
    },
  },
};

// Story Collection
export default {
  title: 'Elements/Breadcrumbs',
  component: DtBreadcrumbs,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
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
