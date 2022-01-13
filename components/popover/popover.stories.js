import {
  DtPopover,
  POPOVER_PADDING_CLASSES,
  POPOVER_ROLES,
  POPOVER_CONTENT_WIDTHS,
} from './';
import PopoverDefault from './popover_default.story.vue';
import { createTemplateFromVueFile } from '../storybook_utils';
import PopoverMdx from './popover.mdx';
import { action } from '@storybook/addon-actions';
import { TOOLTIP_HIDE_ON_CLICK_VARIANTS } from '../tooltip';
import { POPOVER_DIRECTIONS } from './popover_constants';

const argTypesData = {
  // Slots
  anchor: {
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },
  content: {
    control: 'text',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },

  // Props
  id: {
    table: {
      defaultValue: {
        summary: 'generated unique ID',
      },
    },
  },
  padding: {
    control: {
      type: 'select',
      options: Object.keys(POPOVER_PADDING_CLASSES),
    },
  },
  role: {
    control: {
      type: 'select',
      options: POPOVER_ROLES,
    },
  },
  placement: {
    defaultValue: 'bottom',
    control: {
      type: 'select',
      options: POPOVER_DIRECTIONS,
    },
    table: {
      defaultValue: {
        summary: 'null',
      },
    },
  },
  contentWidth: {
    defaultValue: null,
    control: {
      type: 'select',
      options: POPOVER_CONTENT_WIDTHS,
    },
    table: {
      defaultValue: {
        summary: 'null',
      },
    },
  },

  // Events
  onClose: {
    table: {
      disable: true,
    },
  },

  'update:open': {
    description: `The popover will emit a boolean value for this event when the \
user performs a popover-closing or opening action. Parent components can sync on this value to create \
a 2-way binding to control popover visibility.`,
    table: {
      type: {
        summary: 'boolean',
      },
    },
  },
  hideOnClick: {
    type: 'select',
    options: TOOLTIP_HIDE_ON_CLICK_VARIANTS,
  },
};

// Default Props for all variations
export const argsData = {
  onClose: action('update:show'),
};

export default {
  title: 'Components/Popovers',
  component: DtPopover,
  args: argsData,
  argTypes: argTypesData,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: PopoverMdx,
    },
  },
  excludeStories: /.Data$/,
};

const Template = (args, { argTypes }) => createTemplateFromVueFile(args, argTypes, PopoverDefault);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [() => ({
  template: `<div class="d-d-flex d-jc-center d-ai-center d-h164"><story /></div>`,
})];
Default.parameters = {
  docs: {
    source: {
      code: `
<dt-popover :open.sync="open">
  <template #anchor="{ attrs }">
    <dt-button
      v-bind="attrs"
      @click="open = !open"
    >
      Click to open
    </dt-button>
  </template>
  <template #content>
    <p>I will be displayed in the popover!</p>
  </template>
</dt-popover>
    `,
    },
  },
};

export const FixedRight = Template.bind({});
FixedRight.args = { ...Default.args, placement: 'bottom-end' };
FixedRight.decorators = [() => ({
  template: '<div class="d-h102 d-ai-center d-ta-right"><story /></div>',
})];
FixedRight.parameters = {
  docs: {
    source: {
      code: `
<dt-popover placement="bottom-end">
  <template #anchor="{ attrs }"></template>
  <template #content></template>
</dt-popover>
    `,
    },
  },
};

export const NoPadding = Template.bind({});
NoPadding.args = { ...Default.args, padding: 'none', open: true };
NoPadding.decorators = [() => ({
  template: '<div class="d-d-flex d-jc-center d-ai-center d-h102"><story /></div>',
})];
NoPadding.parameters = {
  docs: {
    source: {
      code: `
<dt-popover padding="none">
  <template #anchor="{ attrs }"></template>
  <template #content></template>
</dt-popover>
    `,
    },
  },
};

export const overlayModal = Template.bind({});
overlayModal.args = { ...Default.args, open: true, modal: true };
overlayModal.decorators = [() => ({
  template: '<div class="d-d-flex d-jc-center d-ai-center d-h102"><story /></div>',
})];
overlayModal.parameters = {
  docs: {
    source: {
      code: `
<dt-popover padding="none">
  <template #anchor="{ attrs }"></template>
  <template #content></template>
</dt-popover>
    `,
    },
  },
};
