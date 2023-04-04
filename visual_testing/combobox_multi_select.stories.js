import {
  argsData,
  argTypesData,
  Default,
  WithMaxSelectValidation,
} from '@/recipes/comboboxes/combobox_multi_select/combobox_multi_select.stories';
import ComboboxRecipes from './combobox_recipes.mdx';

import DtRecipeComboboxMultiSelect from '@/recipes/comboboxes/combobox_multi_select/combobox_multi_select';

export default {
  title: 'Visual Testing/Combobox Multi-Select',
  component: DtRecipeComboboxMultiSelect,
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

export { Default, WithMaxSelectValidation };
