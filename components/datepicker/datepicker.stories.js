import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtDatepicker from './datepicker.vue';
import DtDatepickerDefaultTemplate from './datepicker_default.story.vue';
import DtDatepickerVariantsTemplate from './datepicker_variants.story.vue';

/*
  Controls
  ========

  Here we define any custom configuration for props / slots / events in storybook

  By default storybook will display any props / slots / events from the associated component. It will also use jsdoc
  comments on the component to populate details such as description and default value. You should only enter config
  here if it was not possible to add into the jsdoc of the component itself.

  See https://storybook.js.org/docs/vue/api/argtypes#manual-specification

  To set the description of a slot, add the below comment to the line above where the slot is defined:
  <!-- @slot example slot decorator -->
*/

export const argTypesData = {
  // Props: only define things here that cannot be set by jsdoc comments on the component itself.
  genericProp: {
    table: {
      type: {
        summary: 'summary for test purposes',
      },
    },
  },

  // Slots
  default: {
    control: 'text',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },
  /*
    We use the following naming scheme `<SLOT_NAME>Slot` for slot controls to prevent conflicts with props that share
    the same name.
  */
  namedSlot: {
    control: 'text',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },

  // Events: Exclude this from the table as event names will automatically be added from the component itself.
  onGenericEvent: {
    action: 'generic-event',
    table: {
      disable: true,
    },
  },
};

// Set default values at the story level here.
export const argsData = {
  namedSlot: 'This is a named slot with it\'s default set at the story level.',
};

// Story Collection
export default {
  title: 'Components/Datepicker',
  component: DtDatepicker,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtDatepickerDefaultTemplate,
);

// Stories
export const Default = {
  render: DefaultTemplate,
  args: {
    prevMonthLabel: 'Previous month',
    nextMonthLabel: 'Next month',
    prevYearLabel: 'Previous year',
    nextYearLabel: 'Next year',
  },
};

const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtDatepickerVariantsTemplate,
);

export const Variants = {
  render: VariantsTemplate,
  args: {},
};
