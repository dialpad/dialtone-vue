<template>
  <dt-recipe-combobox-with-popover
    :show-list="showList"
  >
    <template #input>
      <dt-input
        v-model="value"
      />
    </template>
    <template #content>
      <span
        v-if="content"
        v-html="content"
      />
      <template v-else>
        <p>
          I will be displayed in the popover!
        </p>
      </template>
    </template>
  </dt-recipe-combobox-with-popover>
</template>

<script>
import DtRecipeComboboxWithPopover from './combobox_with_popover';
import { DtInput } from '@';

export default {
  name: 'DtRecipeComboboxWithPopoverDefault',
  components: {
    DtRecipeComboboxWithPopover,
    DtInput,
  },
};
</script>
