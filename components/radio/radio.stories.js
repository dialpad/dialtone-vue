import { createTemplateFromVueFile } from '../storybook_utils';
import RadioDefault from './radio_default.story.vue';
import option, * as name from './radio.stories.controls';
import * as RadioValidationStories from './radio_validation.stories.js';

export default option;
export const argsData = name.argsData;
export const argTypesData = name.argTypesData;

// Radio Templates
const Template = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, RadioDefault);
// Stories
export const Default = Template.bind({});
Default.args = {};

export const WithDescription = Template.bind({});
WithDescription.args = {
  name: 'WithDescription',
  label: 'Label',
  description: 'Description',
  value: 'Value',
};

WithDescription.parameters = {
  docs: {
    source: {
      code: `
<template>
  <hs-radio
      name="WithDescription"
      value="Value"
      label="Label"
      description="Description"
  />
</template>`,
    },
  },
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
<template>
  <hs-radio
    name="WithSlottedLabel"
    value="Value"
  >
    With Slotted Label
  </hs-radio>
</template>`,
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
<template>
  <hs-radio
    name="ValueWSlottedDescription"
    value="Value"
    label="Label"
  >
    <template #description>
      Slotted Description
    </template>
  </hs-radio>
</template>`,
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
<template>
  <hs-radio
    name="WithSlottedLabelAndDescription"
    value="Value"
  >
    With Slotted Label
    <template #description>
      And Slotted Description
    </template>
  </hs-radio>
</template>`,
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
Checked.parameters = {
  docs: {
    source: {
      code: `
<template>
  <hs-radio
    name="Checked"
    value="Checked"
    label="label"
    checked
  />
</template>`,
    },
  },
};

export const CheckedWithDescription = Template.bind({});
CheckedWithDescription.args = {
  name: 'CheckedWithDescription',
  label: 'Checked',
  value: 'Checked',
  description: 'With Description',
  checked: true,
};
CheckedWithDescription.parameters = {
  docs: {
    source: {
      code: `
<template>
  <hs-radio
    name="CheckedWithDescription"
    value="Checked"
    label="Checked"
    description="With Description"
    checked
  />
</template>`,
    },
  },
};

export const SuccessWithDescription = Template.bind({});
SuccessWithDescription.args = {
  name: 'SuccessWithDescription',
  label: 'Success',
  value: 'Validation',
  description: 'With Description',
  validationState: 'success',
};
SuccessWithDescription.parameters = {
  docs: {
    source: {
      code: `
<template>
  <hs-radio
    name="SuccessWithDescription"
    label="Success"
    value="Validation"
    description="With Description"
    validationState="success"
  />
</template>`,
    },
  },
};

export const WarningWithDescription = Template.bind({});
WarningWithDescription.args = {
  name: 'WarningWithDescription',
  label: 'Warning',
  value: 'Validation',
  description: 'With Description',
  validationState: 'warning',
};
WarningWithDescription.parameters = {
  docs: {
    source: {
      code: `
<template>
  <hs-radio
    name="WarningWithDescription"
    value="Validation"
    label="Warning"
    description="With Description"
    validationState="warning"
  />
</template>`,
    },
  },
};

export const ErrorWithDescription = Template.bind({});
ErrorWithDescription.args = {
  name: 'ErrorWithDescription',
  label: 'Error',
  value: 'Validation',
  description: 'With Description',
  validationState: 'error',
};

ErrorWithDescription.parameters = {
  docs: {
    source: {
      code: `
<template>
  <hs-radio
    name="ErrorWithDescription"
    label="Error"
    value="Validation"
    description="With Description"
    validationState="error"
  />
</template>`,
    },
  },
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
CheckedSuccessWithDescription.parameters = {
  docs: {
    source: {
      code: `
<template>
  <hs-radio
    name="CheckedSuccessWithDescription"
    value="Validation"
    label="Success"
    description="With Description"
    validationState="success"
    checked
  />
</template>`,
    },
  },
};

export const CheckedWarningWithDescription = RadioValidationStories.CheckedWarningWithDescription;
export const CheckedErrorWithDescription = RadioValidationStories.CheckedErrorWithDescription;
export const Disabled = RadioValidationStories.Disabled;
export const DisabledWithDescription = RadioValidationStories.DisabledWithDescription;
export const DisabledAndChecked = RadioValidationStories.DisabledAndChecked;
export const DisabledAndCheckedWithDescription = RadioValidationStories.DisabledAndCheckedWithDescription;
export const ValidationMessageSuccess = RadioValidationStories.ValidationMessageSuccess;
export const ValidationMessageWarning = RadioValidationStories.ValidationMessageWarning;
export const ValidationMessageError = RadioValidationStories.ValidationMessageError;
export const MultipleValidationMessageError = RadioValidationStories.MultipleValidationMessageError;
