// Default Prop Values
import { VALIDATION_MESSAGE_TYPES } from '../constants';
import HsRadio from './radio';
import RadioMdx from './radio.mdx';
import { action } from '@storybook/addon-actions';

export const argsData = {
  value: 'Value',
  name: 'Name',
  label: 'Radio',
  description: '',
  validationState: '',
  onInput: action('input'),
};

// Prop Controls
export const argTypesData = {
  // Props
  'v-model': {
    description: 'Supported by this component',
    control: null,
  },
  description: {
    description: 'Describes the radio option',
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
  checked: {
    description: 'Used to set the initial state of the radio',
    control: 'boolean',
    table: {
      category: 'props',
      type: {
        summary: 'boolean',
      },
    },
  },
  validationState: {
    table: {
      type: {
        summary: 'string',
      },
    },
    control: {
      type: 'select',
      options: ['', ...Object.values(VALIDATION_MESSAGE_TYPES)],
    },
  },
  labelChildProps: {
    control: null,
  },
  descriptionChildProps: {
    control: null,
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
  descriptionSlot: {
    name: 'description',
    description: 'slot for Radio Description',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'text/html',
      },
    },
  },

  // Action Event Handlers
  onInput: {
    table: {
      disable: true,
    },
  },
};

// Story Collection
export default {
  title: 'Forms/Radio',
  component: HsRadio,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: RadioMdx,
    },
  },
};
