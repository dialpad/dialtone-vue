import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '../storybook_utils';
import { VALIDATION_MESSAGE_TYPES } from '../constants';
import RadioDefault from './radio_default.story.vue';
import RadioMdx from './radio.mdx';
import HsRadio from './radio';

import * as validation from './radio_validation.stories.js';

// Default Prop Values
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
    description: 'slot huy123 for Radio Description',
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

// Radio Templates
const Template = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, RadioDefault);

// Stories
export const Default = Template.bind({});
Default.args = {};

export const WithDescription = Template.bind({});
WithDescription.args = {
  name: 'ValueWDesc',
  label: 'Label',
  description: 'Description',
  value: 'Value',
};

export const WithSlottedLabel = Template.bind({});
WithSlottedLabel.args = {
  name: 'WithSlottedLabel',
  value: 'Value',
  default: 'With Slotted Label',
};
WithSlottedLabel.parameters = {
  docs: {
    source: {
      code: `
       <hs-radio
          name="WithSlottedLabel"
          value="Value"
        >
          With Slotted Label
        </hs-radio>`,
    },
  },
};

export const WithSlottedDescription = Template.bind({});
WithSlottedDescription.args = {
  name: 'WithSlottedDescription',
  value: 'Value',
  description: 'And Slotted Description',
  label: 'Label',
};
WithSlottedDescription.parameters = {
  docs: {
    source: {
      code: `
        <hs-radio
          name="ValueWSlottedDescription"
          value="Value"
        >
          <template #description>
            Slotted Description
          </template>
        </hs-radio>
      `,
    },
  },
};

export const WithSlottedLabelAndDescription = Template.bind({});
WithSlottedLabelAndDescription.args = {
  name: 'WithSlottedLabelAndDescription',
  value: 'Value',
  description: 'And Slotted Description',
  default: 'With Slotted Label',
};
WithSlottedLabelAndDescription.parameters = {
  docs: {
    source: {
      code: `
        <hs-radio
          name="WithSlottedLabelAndDescription"
          value="Value"
        >
          With Slotted Label
          <template #description>
            And Slotted Description
          </template>
        </hs-radio>
      `,
    },
  },
};

export const Checked = Template.bind({});
Checked.args = {
  name: 'Checked',
  label: 'Checked',
  value: 'Checked',
  checked: true,
};

export const CheckedWithDescription = Template.bind({});
CheckedWithDescription.args = {
  name: 'CheckedWithDescription',
  label: 'Checked',
  value: 'Checked',
  description: 'With Description',
  checked: true,
};

export const SuccessWithDescription = Template.bind({});
SuccessWithDescription.args = {
  name: 'SuccessWithDescription',
  label: 'Success',
  value: 'Validation',
  description: 'With Description',
  checked: true,
  validationState: 'success',
};

export const WarningWithDescription = Template.bind({});
WarningWithDescription.args = {
  name: 'WarningWithDescription',
  label: 'Warning',
  value: 'Validation',
  description: 'With Description',
  checked: true,
  validationState: 'warning',
};

export const ErrorWithDescription = Template.bind({});
ErrorWithDescription.args = {
  name: 'ErrorWithDescription',
  label: 'Error',
  value: 'Validation',
  description: 'With Description',
  checked: true,
  validationState: 'error',
};

export const CheckedSuccessWithDescription = Template.bind({});
CheckedSuccessWithDescription.args = {
  name: 'CheckedSuccessWithDescription',
  label: 'Success',
  value: 'Validation',
  description: 'With Description',
  checked: true,
  validationState: 'success',
};

export const CheckedWarningWithDescription = Template.bind({});
CheckedWarningWithDescription.args = {
  name: 'CheckedWarningWithDescription',
  label: 'Warning',
  value: 'Validation',
  description: 'With Description',
  checked: true,
  validationState: 'warning',
};

export const CheckedErrorWithDescription = Template.bind({});
CheckedErrorWithDescription.args = {
  name: 'CheckedErrorWithDescription',
  label: 'Error',
  value: 'Validation',
  description: 'With Description',
  checked: true,
  validationState: 'error',
};

export const Disabled = validation.Disabled;
export const DisabledWithDescription = validation.DisabledWithDescription;
export const DisabledAndChecked = validation.DisabledAndChecked;
export const DisabledAndCheckedWithDescription = validation.DisabledAndCheckedWithDescription;
export const ValidationMessageSuccess = validation.ValidationMessageSuccess;
export const ValidationMessageWarning = validation.ValidationMessageWarning;
export const ValidationMessageError = validation.ValidationMessageError;
export const MultipleValidationMessageError = validation.MultipleValidationMessageError;
