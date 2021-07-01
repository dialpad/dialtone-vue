import { createTemplateFromVueFile } from '../storybook_utils';
import DtTabGroup from './tab_group';
import DtTabsMdx from './tabs.mdx';
import DtTabsDefaultTemplate from './tabs_default.story.vue';
import DtTabsVariantsTemplate from './tabs_variants.story.vue';
import { TAB_LIST_SIZES } from './tabs_constants';

export const argTypesData = {
  // Action Event Handlers
  size: {
    defaultValue: '',
    control: {
      type: 'select',
      options: TAB_LIST_SIZES,
    },
  },
  change: {
    table: {
      category: 'events',
      type: {
        summary: 'event',
      },
    },
  },
};

// Story Collection
export default {
  title: 'Elements/Tabs',
  component: DtTabGroup,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: DtTabsMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtTabsDefaultTemplate,
);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtTabsVariantsTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
