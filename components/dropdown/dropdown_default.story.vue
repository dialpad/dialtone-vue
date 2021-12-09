<template>
  <dt-dropdown
    :open="isOpen"
    :fixed-alignment="fixedAlignment"
    @update:open="updateOpen"
  >
    <template #anchor>
      <dt-link
        @click="isOpen = !isOpen"
      >
        Click to open
      </dt-link>
    </template>
    <template #list="{ listProps, getItemProps, activeItemIndex, setHighlightIndex }">
      <ul
        v-bind="listProps"
        class="d-p0"
      >
        <dt-list-item
          v-for="(item, i) in items"
          v-bind="getItemProps(i)"
          :key="item.id"
          :navigation-type="navigationType"
        >
          {{ item.name }}
        </dt-list-item>
      </ul>
    </template>
  </dt-dropdown>
</template>

<script>
import DtDropdown from './dropdown';
import { DtListItem } from '../list_item';
import { DtLink } from '../link';

export default {
  name: 'DtDropdownDefault',
  components: { DtDropdown, DtListItem, DtLink },
  data () {
    return {
      isOpen: false,
    } 
  },
  methods: {
    updateOpen (isOpen) {
      this.isOpen = isOpen;
    },
  },
};
</script>
