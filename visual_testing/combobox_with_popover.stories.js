import {
  argsData,
  argTypesData,
  Default,
} from '@/recipes/comboboxes/combobox_with_popover/combobox_with_popover.stories';
import ComboboxRecipes from './combobox_recipes.mdx';

import DtRecipeComboboxWithPopover from '@/recipes/comboboxes/combobox_with_popover/combobox_with_popover';

export default {
  title: 'Visual Testing/Combobox With Popover',
  component: DtRecipeComboboxWithPopover,
  parameters: {
    docs: {
      page: ComboboxRecipes,
    },
    options: { showPanel: false },
    a11y: {
      disable: true,
    },
  },
  args: { ...argsData, showList: true },
  argTypes: argTypesData,
};

export { Default };
