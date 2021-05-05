import { createTemplateFromVueFile } from '../storybook_utils';
import { VALIDATION_MESSAGE_TYPES } from '../constants';
import RadioDefault from './radio_default.story.vue';

// Radio Templates
const Template = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, RadioDefault);

export const CheckedWarningWithDescription = Template.bind({});
CheckedWarningWithDescription.args = {
  name: 'CheckedWarningWithDescription',
  label: 'Warning',
  value: 'Validation',
  description: 'With Description',
  checked: true,
  validationState: 'warning',
};

CheckedWarningWithDescription.parameters = {
  docs: {
    source: {
      code: `
<template>
  <hs-radio
    name="CheckedWarningWithDescription"
    value="Validation"
    label="Warning"
    description="With Description"
    validationState="warning"
    checked
  />
</template>`,
    },
  },
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

CheckedErrorWithDescription.parameters = {
  docs: {
    source: {
      code: `
<template>
  <hs-radio
    name="CheckedErrorWithDescription"
    value="Validation"
    label="Error"
    description="With Description"
    validationState="error"
    checked
  />
</template>`,
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'Disabled',
  label: 'Disabled',
  value: 'Disabled',
  disabled: true,
};

Disabled.parameters = {
  docs: {
    source: {
      code: `
<template>
  <hs-radio
    name="Disabled"
    value="Disabled"
    label="Disabled"
    disabled
  />
</template>`,
    },
  },
};

export const DisabledWithDescription = Template.bind({});
DisabledWithDescription.args = {
  name: 'DisabledWithDescription',
  label: 'Disabled',
  value: 'Disabled',
  description: 'With Description',
  disabled: true,
};

DisabledWithDescription.parameters = {
  docs: {
    source: {
      code: `
<template>
  <hs-radio
    name="DisabledWithDescription"
    value="Disabled"
    label="Disabled"
    description="With Description"
    disabled
  />
</template>`,
    },
  },
};

export const DisabledAndChecked = Template.bind({});
DisabledAndChecked.args = {
  name: 'CheckedDisabled',
  label: 'Disabled & Checked',
  value: 'Disabled',
  disabled: true,
  checked: true,
};
DisabledAndChecked.parameters = {
  docs: {
    source: {
      code: `
<template>
  <hs-radio
    name="CheckedDisabled"
    value="Disabled"
    label="Disabled & Checked"
    disabled
    checked
  />
</template>`,
    },
  },
};

export const DisabledAndCheckedWithDescription = Template.bind({});
DisabledAndCheckedWithDescription.args = {
  name: 'DisabledAndCheckedWithDescription',
  label: 'Disabled & Checked',
  value: 'Disabled',
  description: 'With Description',
  disabled: true,
  checked: true,
};

DisabledAndCheckedWithDescription.parameters = {
  docs: {
    source: {
      code: `
<template>
  <hs-radio
    name="DisabledAndCheckedWithDescription"
    value="Disabled"
    label="Disabled & Checked"
    description="With Description"
    disabled
    checked
  />
</template>`,
    },
  },
};

export const ValidationMessageSuccess = Template.bind({});
ValidationMessageSuccess.args = {
  name: 'ValidationMessageSuccess',
  label: 'Validation Message Success',
  value: 'ValidationMessageSuccess',
  description: 'With Description',
  messages: [{ message: 'Success', type: VALIDATION_MESSAGE_TYPES.SUCCESS }],
  checked: true,
};

ValidationMessageSuccess.parameters = {
  docs: {
    source: {
      code: `
<template>
  <hs-radio
    name="ValidationMessageSuccess"
    value="Validation Message Success"
    label="Validation Message Success"
    description="With Description"
    :messages="[{ message: 'Success', type: VALIDATION_MESSAGE_TYPES.SUCCESS }]"
    checked
  />
</template>`,
    },
  },
};

export const ValidationMessageWarning = Template.bind({});
ValidationMessageWarning.args = {
  name: 'ValidationMessageWarning',
  label: 'Validation Message Warning',
  value: 'ValidationMessageWarning',
  description: 'With Description',
  messages: [{ message: 'Warning', type: VALIDATION_MESSAGE_TYPES.WARNING }],
  checked: true,
};

ValidationMessageWarning.parameters = {
  docs: {
    source: {
      code: `
<template>
  <hs-radio
    name="ValidationMessageWarning"
    value="ValidationMessageWarning"
    label="Validation Message Warning"
    description="With Description"
    :messages="[{ message: 'Warning', type: VALIDATION_MESSAGE_TYPES.WARNING }]"
    checked
  />
</template>`,
    },
  },
};

export const ValidationMessageError = Template.bind({});
ValidationMessageError.args = {
  name: 'ValidationMessageError',
  label: 'Validation Message Error',
  value: 'ValidationMessageError',
  description: 'With Description',
  messages: [{ message: 'Error', type: VALIDATION_MESSAGE_TYPES.ERROR }],
  checked: true,
};

ValidationMessageError.parameters = {
  docs: {
    source: {
      code: `
<template>
  <hs-radio
    name="ValidationMessageError"
    value="ValidationMessageError"
    label="Validation Message Error"
    description="With Description"
    :messages="[{ message: 'Error', type: VALIDATION_MESSAGE_TYPES.ERROR }]"
    checked
  />
</template>`,
    },
  },
};

export const MultipleValidationMessageError = Template.bind({});
MultipleValidationMessageError.args = {
  name: 'MultipleValidationMessageError',
  label: 'Multiple Validation Message Error',
  value: 'ValidationMessageError',
  description: 'With Description',
  messages: [
    { message: 'Error', type: VALIDATION_MESSAGE_TYPES.ERROR },
    { message: 'Error', type: VALIDATION_MESSAGE_TYPES.ERROR },
    { message: 'Error', type: VALIDATION_MESSAGE_TYPES.ERROR },
  ],
  checked: true,
};

MultipleValidationMessageError.parameters = {
  docs: {
    source: {
      code: `
<template>
  <hs-radio
    name="MultipleValidationMessageError"
    value="MultipleValidationMessageError"
    label="Multiple Validation Message Error"
    description="With Description"
    :messages="[
      { message: 'Error', type: VALIDATION_MESSAGE_TYPES.ERROR },
      { message: 'Error', type: VALIDATION_MESSAGE_TYPES.ERROR },
      { message: 'Error', type: VALIDATION_MESSAGE_TYPES.ERROR },
    ]"
    checked
  />
</template>`,
    },
  },
};
