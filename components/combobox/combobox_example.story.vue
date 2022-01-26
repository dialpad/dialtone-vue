<template>
  <dt-combobox
    :show-list="true"
    list-aria-label="Example list items"
  >
    <template #input="{ inputProps }">
      <dt-input
        v-model="value"
        v-bind="inputProps"
        placeholder="Type to show the items"
      />
    </template>
    <template #list="{ opened }">
      <dt-popover
        :open="true"
        fixed-alignment="left"
        :hide-on-click="false"
        :fixed-header-footer="true"
        :has-caret="false"
        content-class="d-w464"
        padding="small"
        max-height="300px"
        @update:open="opened"
      >
        <template #anchor>
          <span />
        </template>
        <template #footerContent>
          <div
            v-if="!isEmpty"
            class="d-d-flex d-ai-center"
          >
            <dt-checkbox class="d-pr8" /> Apply primary number to assigned Contact Centers
          </div>
        </template>
        <template #content>
          <div v-if="isEmpty">
            <div>You don't have any SMS enabled numbers</div>
            <a href="#">Add SMS enabled numbers</a>
          </div>
          <ol
            v-else
            class="d-p0"
          >
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
          </ol>
        </template>
      </dt-popover>
    </template>
  </dt-combobox>
</template>

<script>
import DtCombobox from './combobox';
import DtCheckbox from '../checkbox/checkbox';
import DtInput from '../input/input';
import DtPopover from '../popover/popover';
import DtListItem from '../list_item/list_item';

export default {
  name: 'DtComboboxExample',

  components: {
    DtCombobox,
    DtInput,
    DtListItem,
    DtPopover,
    DtCheckbox,
  },

  data () {
    return {
      value: 'example',
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

  computed: {
    isEmpty () {
      return this.value <= 0;
    },
  },
};
</script>
