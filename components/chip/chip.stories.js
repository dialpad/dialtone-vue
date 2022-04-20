import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile, getIconNames } from '@/common/storybook_utils';
import DtChip from './chip';
import DtChipMdx from './chip.mdx';
import DtChipDefaultTemplate from './chip_default.story.vue';
import DtChipVariantsTemplate from './chip_variants.story.vue';

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

  icon: {
    control: {
      type: 'select',
      options: getIconNames(),
    },
    table: {
      type: { summary: 'VNode' },
    },
  },

  // Props
  showRemoveIcon: {
    control: 'boolean',
  },

  // Action Event Handlers
  onClose: {
    table: {
      disable: true,
    },
  },

  close: {
    description: 'Native close button click event',
    table: {
      type: { summary: 'event' },
    },
  },
};

export const argsData = {
  onClose: action('close'),
};

// Story Collection
export default {
  title: 'Components/Chip',
  component: DtChip,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: DtChipMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtChipDefaultTemplate,
);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtChipVariantsTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {
  default: 'Chip',
};

export const Variants = VariantsTemplate.bind({});
Variants.parameters = { controls: { disable: true }, actions: { disable: true }, options: { showPanel: false } };
Variants.args = {};
