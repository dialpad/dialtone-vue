import { createTemplateFromVueFile, getIconNames } from '@/common/storybook_utils';
import DtBadge from './badge';
import DtBadgeDefaultTemplate from './badge_default.story.vue';
import DtBadgeVariantsTemplate from './badge_variants.story.vue';
import { BADGE_TYPE_MODIFIERS, BADGE_KIND_MODIFIERS } from './badge_constants';
import DtBadgeMdx from './badge.mdx';

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
    control: {
      type: 'select',
      options: getIconNames(),
    },
  },
  iconRight: {
    control: {
      type: 'select',
      options: getIconNames(),
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
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DtBadgeDefaultTemplate);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, DtBadgeVariantsTemplate);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {
  default: 'Badge',
};

export const Variants = VariantsTemplate.bind({});
Variants.parameters = { controls: { disable: true }, actions: { disable: true }, options: { showPanel: false } };
Variants.args = {};
