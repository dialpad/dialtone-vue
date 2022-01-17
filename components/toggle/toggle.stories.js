import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '../storybook_utils';
import ToggleDefault from './toggle_default.story.vue';
import ToggleVariants from './toggle_variants.story.vue';
import ToggleNewTypes from './toggle_new_types.story.vue';
import ToggleMdx from './toggle.mdx';
import DtToggle from './toggle';

// Default Prop Values
export const argsData = {
  label: 'Toggle',
  onChange: action('change'),
  labelClass: 'd-mr6',
};

// Prop Controls
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
  checked: {
    description: 'Used to set the initial state of the toggle',
    control: 'boolean',
    table: {
      category: 'props',
      type: {
        summary: 'boolean',
      },
    },
  },

  disabled: {
    description: 'Used to disabled the toggle',
    control: 'boolean',
    table: {
      category: 'props',
      type: {
        summary: 'boolean',
      },
    },
  },

  labelChildProps: {
    control: null,
  },

  // Action Event Handlers
  onChange: {
    table: {
      disable: true,
    },
  },

  change: {
    description: 'Toggle Change event',
    table: {
      type: { summary: 'event' },
    },
  },
};

// Default
export default {
  title: 'Components/Toggle',
  component: DtToggle,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: ToggleMdx,
    },
  },
};

// Toggle Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, ToggleDefault);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, ToggleVariants);
const NewTypesTemplate = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, ToggleNewTypes);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};

export const NewTypes = NewTypesTemplate.bind({});
NewTypes.args = {};
