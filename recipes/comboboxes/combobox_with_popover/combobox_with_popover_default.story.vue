<template>
  <dt-recipe-combobox-with-popover
    list-aria-label="Example list items"
    max-height="300px"
  >
    <template #input>
      <dt-input
        v-model="value"
        placeholder="Start typing to show list"
      />
    </template>
    <template #list>
      <dt-list-item
        v-for="item in items"
        :key="item.id"
        role="option"
        navigation-type="arrow-keys"
      >
        {{ item.number }}
        <template #right>
          {{ item.type }}
        </template>
      </dt-list-item>
    </template>
  </dt-recipe-combobox-with-popover>
</template>

<script>
import DtRecipeComboboxWithPopover from './combobox_with_popover';
import { DtInput, DtListItem } from '@';

export default {
  name: 'DtRecipeComboboxWithPopoverDefault',
  components: {
    DtRecipeComboboxWithPopover,
    DtInput,
    DtListItem,
  },

  data () {
    return {
      value: '',
      items: [
        { id: 'item1', number: '(732) 338-2720', type: 'MAINLINE' },
        { id: 'item2', number: '(732) 338-2722', type: 'MAINLINE' },
        { id: 'item3', number: '(732) 338-2725', type: 'MAINLINE' },
        { id: 'item4', number: '(732) 338-2764', type: 'MAINLINE' },
        { id: 'item5', number: '(732) 338-2784', type: 'MAINLINE' },
        { id: 'item6', number: '(732) 338-2743', type: 'MAINLINE' },
        { id: 'item7', number: '(732) 338-2728', type: 'MAINLINE' },
        { id: 'item8', number: '(732) 338-2769', type: 'Other' },
        { id: 'item9', number: '(732) 338-2723', type: 'MAINLINE' },
        { id: 'item10', number: '(732) 338-2729', type: 'MAINLINE' },
        { id: 'item11', number: '(732) 338-2489', type: 'MAINLINE' },
        { id: 'item12', number: '(732) 338-2756', type: 'Other' },
      ],
    };
  },
};
</script>
