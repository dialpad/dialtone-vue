import {
  argsData,
  argTypesData,
  Default,
} from '@/recipes/comboboxes/combobox_with_popover/combobox_with_popover.stories';
import ComboboxRecipes from './combobox_recipes.mdx';

export default {
  title: 'Visual Testing/Combobox With Popover',
  parameters: {
    percy: {
      queryParams: {
        viewMode: 'docs',
      },
    },
    docs: {
      page: ComboboxRecipes,
    },
    options: { showPanel: false },
  },
  args: { ...argsData, showList: true },
  argTypes: argTypesData,
};

export { Default };
