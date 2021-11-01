import { generateTemplate } from '../storybook_utils';
import { VALIDATION_MESSAGE_TYPES } from '../constants';
import DtValidationMessages from './validation_messages';
import BaseValidationMessagesMdx from './validation_messages.mdx';

// Constants
const VALIDATION_MESSAGES = [{
  message: 'Validation Message',
  type: VALIDATION_MESSAGE_TYPES.SUCCESS,
}];

// Default Prop Values
export const argsData = {
  validationMessages: VALIDATION_MESSAGES,
};

// Manual Prop Controls
export const argTypesData = {
  id: {
    defaultValue: 'default-id',
  },
};

// Story Collection
export default {
  title: 'Forms/Validation Messages',
  component: DtValidationMessages,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: BaseValidationMessagesMdx,
    },
  },
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
};

// Validation Messages Template
const baseRadioTemplate = generateTemplate(DtValidationMessages, {});
const Template = (_args, { argTypes }) => {
  return {
    components: { DtValidationMessages },
    template: baseRadioTemplate,
    props: Object.keys(argTypes),
  };
};

// Stories
export const Default = Template.bind({});

// Variants Story
const VariantsTemplate = () => {
  return {
    components: { DtValidationMessages },
    template: `
      <div id="forms-validation-messages--variants-container">
        <dt-validation-messages
          :validationMessages="[{ message: 'With Success Validation Message', type: 'success' }]"
        />
        <br />
        <dt-validation-messages
          :validationMessages="[{ message: 'With Warning Validation Message', type: 'warning' }]"
        />
        <br />
        <dt-validation-messages
          :validationMessages="[{ message: 'With Error Validation Message', type: 'error' }]"
        />
        <br />
      </div>
    `,
  };
};
export const Variants = VariantsTemplate.bind({});
Variants.parameters = {
  controls: { hideNoControlsWarning: true },
};
