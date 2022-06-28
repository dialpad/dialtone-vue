<template>
  <dt-recipe-combobox-multi-select
    ref="comboboxMultiSelect"
    :label="label"
    :description="description"
    :loading="loading"
    :loading-message="loadingMessage"
    :show-list="showList"
    :selected-items="selectedItems"
    :max-selected="maxSelected"
    :list-max-height="listMaxHeight"
    :max-selected-message="maxSelectedMessage"
    @input="onComboboxInput"
    @select="onComboboxSelect"
    @remove="onComboboxRemove"
    @max-selected="onComboboxMaxSelected"
  >
    <template
      v-if="header"
      #header
    >
      <span v-html="header" />
    </template>
    <template #list>
      <ul
        class="d-p0"
      >
        <dt-list-item
          v-for="(item, i) in items"
          :key="item.id"
          role="option"
          navigation-type="arrow-keys"
          @click="onComboboxSelect(i)"
        >
          {{ item.value }}
          <template #right>
            {{ item.type }}
          </template>
        </dt-list-item>
      </ul>
    </template>
    <template
      v-if="footer"
      #footer
    >
      <span v-html="footer" />
    </template>
  </dt-recipe-combobox-multi-select>
</template>

<script>
import DtRecipeComboboxMultiSelect from './combobox_multi_select';
import { DtListItem } from '@';

export default {
  name: 'DtRecipeComboboxMultiSelectDefault',
  components: {
    DtRecipeComboboxMultiSelect,
    DtListItem,
  },

  data () {
    return {
      items: [
        { id: 'item1', value: '(732) 338-2720', type: 'MAINLINE' },
        { id: 'item2', value: '(732) 338-2722', type: 'MAINLINE' },
        { id: 'item3', value: '(732) 338-2725', type: 'MAINLINE' },
        { id: 'item4', value: '(732) 338-2764', type: 'MAINLINE' },
        { id: 'item5', value: '(732) 338-2784', type: 'MAINLINE' },
        { id: 'item6', value: '(732) 338-2743', type: 'MAINLINE' },
        { id: 'item7', value: '(732) 338-2728', type: 'MAINLINE' },
        { id: 'item8', value: '(732) 338-2769', type: 'Other' },
        { id: 'item9', value: '(732) 338-2723', type: 'MAINLINE' },
        { id: 'item10', value: '(732) 338-2729', type: 'MAINLINE' },
        { id: 'item11', value: '(732) 338-2489', type: 'MAINLINE' },
        { id: 'item12', value: '(732) 338-2756', type: 'Other' },
        { id: 'item13', value: '(732) 338-3725', type: 'MAINLINE' },
        { id: 'item14', value: '(732) 338-3764', type: 'MAINLINE' },
        { id: 'item15', value: '(732) 338-3784', type: 'MAINLINE' },
        { id: 'item16', value: '(732) 338-3743', type: 'MAINLINE' },
        { id: 'item17', value: '(732) 338-3728', type: 'MAINLINE' },
        { id: 'item18', value: '(732) 338-4769', type: 'Other' },
        { id: 'item19', value: '(732) 338-3723', type: 'MAINLINE' },
        { id: 'item20', value: '(732) 338-3729', type: 'MAINLINE' },
        { id: 'item21', value: '(732) 338-3489', type: 'MAINLINE' },
        { id: 'item22', value: '(732) 338-3756', type: 'Other' },
      ],
    };
  },

  methods: {
    onComboboxInput (value) {
      this.onInput(value);
    },

    onComboboxSelect (i) {
      this.onSelect(i);
      const item = this.items[i].value;
      if (this.selectedItems.includes(item)) {
        return;
      }
      this.selectedItems.push(item);
    },

    onComboboxMaxSelected () {
      this.onMaxSelected();
    },

    onComboboxRemove (item) {
      this.onRemove(item);
      const index = this.selectedItems.indexOf(item);
      if (index < 0) {
        return;
      }
      this.selectedItems.splice(index, 1);
    },
  },
};
</script>
