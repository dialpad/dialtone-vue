import {
  argsData,
  argTypesData,
  Default,
} from '@/recipes/comboboxes/combobox_with_popover/combobox_with_popover.stories';

export default {
  title: 'Visual Testing/Combobox With Popover',
  parameters: {
    options: { showPanel: false },
  },
  args: { ...argsData, showList: true },
  argTypes: argTypesData,
};

export { Default };
