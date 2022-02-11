import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile, getIconNames } from '@/common/storybook_utils';
import DtInput from './input';
import { INPUT_SIZES } from './input_constants';
import InputMdx from './input.mdx';
import InputDefault from './input_default.story.vue';

// Controls
export const argTypesData = {
  // Slots
  description: {
    description: 'slot for description, defaults to description prop',
    table: {
      type: { summary: 'VNode' },
    },
    control: {
      type: 'text',
    },
  },
  leftIcon: {
    table: {
      type: { summary: 'VNode' },
    },
    control: {
      type: 'select',
      options: getIconNames(),
    },
  },
  rightIcon: {
    table: {
      type: { summary: 'VNode' },
    },
    control: {
      type: 'select',
      options: getIconNames(),
    },
  },
  labelSlot: {
    table: {
      type: { summary: 'VNode' },
    },
    control: {
      type: 'text',
    },
  },

  // Props
  value: {
    control: 'text',
  },
  type: {
    defaultValue: DtInput.props.type.default,
    control: {
      type: 'select',
      options: ['text', 'textarea', 'password', 'email', 'number'],
    },
    table: {
      defaultValue: {
        summary: DtInput.props.type.default,
      },
    },
  },
  messages: {
    control: 'object',
  },
  size: {
    control: {
      type: 'select',
      options: Object.values(INPUT_SIZES),
    },
    defaultValue: INPUT_SIZES.DEFAULT,
    table: {
      defaultValue: {
        summary: INPUT_SIZES.DEFAULT,
      },
    },
  },
  inputClass: {
    control: 'text',
  },
  messagesChildProps: { control: null },
  label: {
    control: {
      type: 'text',
    },
  },

  // HTML attributes
  placeholder: {
    description: 'HTML input placeholder attribute',
    table: {
      category: 'html attributes',
    },
    control: 'text',
  },

  // Directives
  'v-model': {
    description: 'Supported by this component',
    control: null,
    table: {
      category: 'directives',
    },
  },

  // Action Event Handlers
  onBlur: {
    table: {
      disable: true,
    },
  },
  onInput: {
    table: {
      disable: true,
    },
  },
  onClear: {
    table: {
      disable: true,
    },
  },
  onFocusIn: {
    table: {
      disable: true,
    },
  },
  onFocusOut: {
    table: {
      disable: true,
    },
  },

  blur: {
    description: 'Native input blur event',
    table: {
      type: { summary: 'event' },
    },
  },
  input: {
    description: 'Native input event',
    table: {
      type: { summary: 'event' },
    },
  },
  clear: {
    description: 'Native input clear event',
    table: {
      type: { summary: 'event' },
    },
  },
  focusin: {
    description: 'Native input focusin event',
    table: {
      type: { summary: 'event' },
    },
  },
  focusout: {
    description: 'Native input focusout event',
    table: {
      type: { summary: 'event' },
    },
  },
};

export const argsData = {
  placeholder: 'placeholder',
  label: 'Label',
  onBlur: action('blur'),
  onInput: action('input'),
  onClear: action('clear'),
  onFocusIn: action('focusin'),
  onFocusOut: action('focusout'),
};

const decorator = () => ({
  template: '<div style="width: 500px"><story /></div>',
});

export default {
  title: 'Components/Input',
  component: DtInput,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: InputMdx,
    },
  },
  decorators: [decorator],
  excludeStories: /.*Data$/,
  argTypes: argTypesData,
  args: argsData,
};

const Template = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, InputDefault);

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: '<dt-input label="Label" />',
    },
  },
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  label: 'Label',
  description: 'Description',
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  leftIcon: 'IconSend',
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  rightIcon: 'IconLock',
};

export const WithBothIcons = Template.bind({});
WithBothIcons.args = {
  leftIcon: 'IconSend',
  rightIcon: 'IconLock',
};

export const WithWarning = Template.bind({});
WithWarning.args = {
  messages: [{ message: 'This is a warning message', type: 'warning' }],
};
WithWarning.parameters = {
  docs: {
    source: {
      code: '<dt-input :messages="[{ message: \'This is a warning message\', type: \'warning\' }]" />',
    },
  },
};

export const WithError = Template.bind({});
WithError.args = {
  messages: [{ message: 'This is an error message', type: 'error' }],
};
WithError.parameters = {
  docs: {
    source: {
      code: '<dt-input :messages="[{ message: \'This is an error message\', type: \'error\' }]" />',
    },
  },
};

export const WithSuccess = Template.bind({});
WithSuccess.args = {
  messages: [{ message: 'This is a success message', type: 'success' }],
};
WithSuccess.parameters = {
  docs: {
    source: {
      code: '<dt-input :messages="[{ message: \'This is a success message\', type: \'success\' }]" />',
    },
  },
};

export const WithMultipleMessages = Template.bind({});
WithMultipleMessages.args = {
  messages: [
    { message: 'This is the first message', type: 'error' },
    { message: 'This is the second message', type: 'error' },
    { message: 'This is the third message', type: 'error' },
  ],
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { size: 'xs' };

export const Small = Template.bind({});
Small.args = { size: 'sm' };

export const Large = Template.bind({});
Large.args = { size: 'lg' };

export const ExtraLarge = Template.bind({});
ExtraLarge.args = { size: 'xl' };
