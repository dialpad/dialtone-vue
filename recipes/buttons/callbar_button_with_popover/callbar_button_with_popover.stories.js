import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtRecipeCallbarButtonWithPopover from './callbar_button_with_popover';
import DtRecipeCallbarButtonWithPopoverMdx from './callbar_button_with_popover.mdx';
import DtRecipeCallbarButtonWithPopoverDefaultTemplate from './callbar_button_with_popover_default.story.vue';
import DtRecipeCallbarButtonWithPopoverVariantsTemplate from './callbar_button_with_popover_variants.story.vue';

import { POPOVER_DIRECTIONS, POPOVER_INITIAL_FOCUS_STRINGS } from '../../../components/popover/popover_constants';

// Default Prop Values
export const argsData = {
  default: 'Button',
  icon: '',
  tooltip: 'A tooltip',
  content: 'Popover body content',
  headerContent: 'Header content',
  onArrowClick: action('arrowClick'),
  onClick: action('click'),
};

/**
 * example prop description decorator
 */

/*
  Controls
  ========

  Here we define any custom controls or control overrides for our components.

  By default storybook will attempt to provide an appropriate control of the same name for each property in the
  component as well as include any description provided using a prop decorator within your component (see above).

  Storybook will also attempt to provide an appropriate control for each slot in the component as well as include any
  description provided using a slot decorator within your component (see below).

  <!-- @slot example slot decorator -->
*/
export const argTypesData = {
  // Button Slots
  default: {
    description: 'Slot default content. This will be the button label',
    control: 'text',
    table: {
      type: {
        summary: 'text/html',
      },
    },
  },
  icon: {
    description: 'Slot for button icon',
    control: 'none',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },
  tooltip: {
    description: 'Slot tooltip',
    control: 'text',
    table: {
      type: {
        summary: 'text/html',
      },
    },
  },

  // Popover slots
  content: {
    description: 'Slot for popover content',
    control: 'text',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },
  headerContent: {
    description: 'Slot for popover header content',
    control: 'text',
    table: {
      category: 'slots',
      type: {
        summary: 'VNode',
      },
    },
  },

  // Action Event Handlers
  arrowClick: {
    description: 'Triggered when the arrow is clicked',
    table: {
      disable: false,
      type: {
        summary: 'event',
      },
    },
  },
  click: {
    description: 'Triggered when the button is clicked',
    table: {
      disable: false,
      type: {
        summary: 'event',
      },
    },
  },

  id: {
    table: {
      defaultValue: {
        summary: 'auto-generated',
      },
    },
  },

  // Popover props
  initialFocusElement: {
    control: {
      type: 'select',
      options: [...Object.values(POPOVER_INITIAL_FOCUS_STRINGS), '#content-close'],
    },
  },
  placement: {
    control: {
      type: 'select',
      options: POPOVER_DIRECTIONS,
    },
  },

  // Action Event Handlers
  onArrowClick: {
    table: {
      disable: true,
    },
  },
  // Action Event Handlers
  onClick: {
    table: {
      disable: true,
    },
  },

};

// Story Collection
export default {
  title: 'Recipes/Buttons/DtRecipeCallbarButtonWithPopover',
  component: DtRecipeCallbarButtonWithPopover,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: DtRecipeCallbarButtonWithPopoverMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipeCallbarButtonWithPopoverDefaultTemplate,
);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtRecipeCallbarButtonWithPopoverVariantsTemplate,
);
// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
