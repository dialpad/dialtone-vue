import {
  argsData,
  argTypesData,
  Default,
  WithMaxSelectValidation,
} from '@/recipes/comboboxes/combobox_multi_select/combobox_multi_select.stories';

export default {
  title: 'Visual Testing/Combobox Multi-Select',
  parameters: {
    options: { showPanel: false },
  },
  args: { ...argsData, showList: true },
  argTypes: argTypesData,
};

export { Default, WithMaxSelectValidation };
