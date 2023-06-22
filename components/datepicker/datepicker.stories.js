import { createTemplateFromVueFile } from '@/common/storybook_utils';
import { action } from '@storybook/addon-actions';
import DtDatepicker from './datepicker.vue';
import DtDatepickerDefaultTemplate from './datepicker_default.story.vue';
import DtDatepickerWithPopoverTemplate from './datepicker_popover.story.vue';

export const argsData = {
  changeToLabel: 'Change to',
  prevMonthLabel: 'Previous month',
  nextMonthLabel: 'Next month',
  prevYearLabel: 'Previous year',
  nextYearLabel: 'Next year',
  selectDayLabel: 'Select day',
  onSelectedDate: action('selected-date'),
  onCloseDatepicker: action('close-datepicker'),
};

export const argTypesData = {
  // Props
  prevMonthLabel: {
    control: 'text',
    table: {
      category: 'props',
      type: {
        summary: 'String',
      },
    },
  },
  nextMonthLabel: {
    control: 'text',
    table: {
      category: 'props',
      type: {
        summary: 'String',
      },
    },
  },
  prevYearLabel: {
    control: 'text',
    table: {
      category: 'props',
      type: {
        summary: 'String',
      },
    },
  },
  nextYearLabel: {
    control: 'text',
    table: {
      category: 'props',
      type: {
        summary: 'String',
      },
    },
  },
  selectDayLabel: {
    control: 'text',
    table: {
      category: 'props',
      type: {
        summary: 'String',
      },
    },
  },

  changeToLabel: {
    control: 'text',
    table: {
      category: 'props',
      type: {
        summary: 'String',
      },
    },
  },

  // Action Event Handlers
  onSelectedDate: {
    table: {
      disable: true,
    },
  },

  onCloseDatepicker: {
    table: {
      disable: true,
    },
  },

  'selected-date': {
    description: 'Event fired when a date is selected',
    table: {
      type: { summary: 'event' },
    },
  },

  'close-datepicker': {
    description: 'Event fired when user presses the esc key',
    table: {
      type: { summary: 'event' },
    },
  },
};

export default {
  title: 'Components/Datepicker',
  component: DtDatepicker,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
};

// Templates
const Template = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtDatepickerDefaultTemplate,
);

const WithPopoverTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtDatepickerWithPopoverTemplate,
);

// Stories
export const Default = {
  render: Template,
  args: {},
};

export const WithPopover = {
  render: WithPopoverTemplate,
  args: {},
  parameters: { options: { showPanel: false }, controls: { disable: true } },
};