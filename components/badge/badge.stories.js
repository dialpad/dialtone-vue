import { createTemplateFromVueFile, getIconNames } from '@/common/storybook_utils';
import DtBadge from './badge';
import DtBadgeDefaultTemplate from './badge_default.story.vue';
import DtBadgeVariantsTemplate from './badge_variants.story.vue';
import DtBadgeExamplesTemplate from './badge_examples.story.vue';
import { BADGE_TYPE_MODIFIERS, BADGE_KIND_MODIFIERS } from './badge_constants';
import DtBadgeMdx from './badge.mdx';

const iconsList = getIconNames();

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
  iconLeft: {
    options: iconsList,
    mapping: iconsList,
    control: {
      type: 'select',
      labels: {
        // 'labels' maps option values to string labels
        '': '(empty)',
      },
    },
  },
  iconRight: {
    options: iconsList,
    mapping: iconsList,
    control: {
      type: 'select',
      labels: {
        // 'labels' maps option values to string labels
        '': '(empty)',
      },
    },
  },

  // Props
  type: {
    defaultValue: 'default',
    control: {
      type: 'select',
      options: Object.keys(BADGE_TYPE_MODIFIERS),
    },
  },

  kind: {
    defaultValue: 'label',
    control: {
      type: 'select',
      options: Object.keys(BADGE_KIND_MODIFIERS),
    },
    if: { arg: 'type', neq: 'ai' },
  },
};

// Story Collection
export default {
  title: 'Components/Badge',
  component: DtBadge,
  excludeStories: /.*Data$/,
  argTypes: argTypesData,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: DtBadgeMdx,
    },
    options: {
      showPanel: true,
    },
  },
};

// Templates
const DefaultTemplate = (args) => createTemplateFromVueFile(args, DtBadgeDefaultTemplate);
const VariantsTemplate = (args) => createTemplateFromVueFile(args, DtBadgeVariantsTemplate);
const ExamplesTemplate = (args) => createTemplateFromVueFile(args, DtBadgeExamplesTemplate);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {
  default: 'Badge',
};

export const Variants = VariantsTemplate.bind({});
Variants.parameters = { controls: { disable: true }, actions: { disable: true }, options: { showPanel: false } };
Variants.args = {};

export const Examples = ExamplesTemplate.bind({});
Examples.parameters = { controls: { disable: true }, actions: { disable: true }, options: { showPanel: false } };
Examples.args = {};
