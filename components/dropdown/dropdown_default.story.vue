<template>
  <dt-dropdown
    :open="isOpen"
    @update:open="updateOpen"
  >
    <template #anchor>
      <dt-link
        @click="isOpen = !isOpen"
      >
        Click to open
      </dt-link>
    </template>
    <ul class="d-m0 d-p0">
      <dt-list-item
          navigation-type="tab"
      >
        Item 1
      </dt-list-item>
      <dt-list-item
          navigation-type="tab"
      >
        Item 2
      </dt-list-item>
    </ul>
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
