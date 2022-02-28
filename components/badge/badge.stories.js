import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtBadge from './badge';
import DtBadgeDefaultTemplate from './badge_default.story.vue';
import DtBadgeVariantsTemplate from './badge_variants.story.vue';
import { BADGE_COLOR_MODIFIERS } from './badge_constants';
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

  // Props
  color: {
    defaultValue: 'base',
    options: Object.keys(BADGE_COLOR_MODIFIERS),
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

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {
  default: 'badge',
};

export const Variants = VariantsTemplate.bind({});
Variants.parameters = { controls: { disable: true }, actions: { disable: true }, options: { showPanel: false } };
Variants.args = {};
