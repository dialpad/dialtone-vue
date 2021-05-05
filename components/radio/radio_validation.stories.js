import { createTemplateFromVueFile } from '../storybook_utils';
import { VALIDATION_MESSAGE_TYPES } from '../constants';
import RadioDefault from './radio_default.story.vue';

// Radio Templates
const Template = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, RadioDefault);
export const Disabled = Template.bind({});
Disabled.args = {
  name: 'Disabled',
  label: 'Disabled',
  value: 'Disabled',
  disabled: true,
};

export const DisabledWithDescription = Template.bind({});
DisabledWithDescription.args = {
  name: 'DisabledWithDescription',
  label: 'Disabled',
  value: 'Disabled',
  description: 'With Description',
  disabled: true,
};

export const DisabledAndChecked = Template.bind({});
DisabledAndChecked.args = {
  name: 'CheckedDisabled',
  label: 'Disabled & Checked',
  value: 'Disabled',
  disabled: true,
  checked: true,
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

export const ValidationMessageSuccess = Template.bind({});
ValidationMessageSuccess.args = {
  name: 'ValidationMessageSuccess',
  label: 'Validation Message Success',
  value: 'ValidationMessageSuccess',
  description: 'With Description',
  messages: [{ message: 'Success', type: VALIDATION_MESSAGE_TYPES.SUCCESS }],
  checked: true,
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
export const ValidationMessageError = Template.bind({});
ValidationMessageError.args = {
  name: 'ValidationMessageError',
  label: 'Validation Message Error',
  value: 'ValidationMessageError',
  description: 'With Description',
  messages: [{ message: 'Error', type: VALIDATION_MESSAGE_TYPES.ERROR }],
  checked: true,
};

export const MultipleValidationMessageError = Template.bind({});
MultipleValidationMessageError.args = {
  name: 'MultipleValidationMessageError',
  label: 'Validation Message Error',
  value: 'ValidationMessageError',
  description: 'With Description',
  messages: [
    { message: 'Error', type: VALIDATION_MESSAGE_TYPES.ERROR },
    { message: 'Error', type: VALIDATION_MESSAGE_TYPES.ERROR },
    { message: 'Error', type: VALIDATION_MESSAGE_TYPES.ERROR },
  ],
  checked: true,
};
