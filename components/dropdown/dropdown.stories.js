import { action } from '@storybook/addon-actions';
import { createTemplateFromVueFile } from '../storybook_utils';
import DtDropdown from './dropdown';
import DtDropdownMdx from './dropdown.mdx';
import DtDropdownDefaultTemplate from './dropdown_default.story.vue';
import DtDropdownVariantsTemplate from './dropdown_variants.story.vue';
import {LIST_ITEM_NAVIGATION_TYPES} from "../list_item/list_item_constants";
import {POPOVER_HORIZONTAL_ALIGNMENT} from "../popover";

// Constants
const LIST_ITEMS = [
  { name: '1st menu item', id: 1 },
  { name: '2nd menu item', id: 2 },
  { name: '3rd menu item', id: 3 },
];

// Default Prop Values
export const argsData = {
  items: LIST_ITEMS,
  onEvent: action('event'),
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
  // Slots
  default: {
    control: 'text',
    table: {
      type: {
        summary: 'text/html',
      },
    },
  },

  // Props
  navigationType: {
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'none' },
    },
    control: {
      type: 'select',
      options: Object.values(LIST_ITEM_NAVIGATION_TYPES),
    },
  },
  fixedAlignment: {
    control: {
      type: 'select',
      options: POPOVER_HORIZONTAL_ALIGNMENT,
    },
  },

  // Action Event Handlers
  onEvent: {
    table: {
      disable: true,
    },
  },
};

// Story Collection
export default {
  title: 'Components/Dropdown',
  component: DtDropdown,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: DtDropdownMdx,
    },
  },
};

// Templates
const DefaultTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtDropdownDefaultTemplate,
);
const VariantsTemplate = (args, { argTypes }) => createTemplateFromVueFile(
  args,
  argTypes,
  DtDropdownVariantsTemplate,
);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};
Default.decorators = [() => ({
  template: `<div class="d-h100vh d-d-flex d-ai-center d-jc-center"><story /></div>`,
})];

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
