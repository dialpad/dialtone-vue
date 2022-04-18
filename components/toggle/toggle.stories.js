import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '@/common/storybook_utils';
import ToggleDefault from './toggle_default.story.vue';
import ToggleVariants from './toggle_variants.story.vue';
import ToggleMdx from './toggle.mdx';
import DtToggle from './toggle';

// Default Prop Values
export const argsData = {
  onChange: action('change'),
  labelClass: 'd-mr6',
};

// Prop Controls
export const argTypesData = {
  // Slots
  default: {
    control: 'text',
    description: 'Used as a way to set either a label or a label element for the toggle',
    defaultValue: 'Toggle Default',
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

  // Directives
  'v-model': {
    description: 'Supported by this component',
    control: null,
    table: {
      category: 'directives',
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
    options: {
      showPanel: true,
    },
  },
};

// Toggle Templates
const DefaultTemplate = (args) => createTemplateFromVueFile(args, ToggleDefault);
const VariantsTemplate = (args) => createTemplateFromVueFile(args, ToggleVariants);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};
Default.parameters = {
  a11y: {
    config: {
      rules: [
        {
          id: 'button-name',
          enabled: false,
        },
      ],
    },
  },
};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
Variants.parameters = {
  controls: {
    disable: true,
  },
  actions: {
    disable: true,
  },
  options: {
    showPanel: false,
  },
  a11y: Default.parameters.a11y,
};
