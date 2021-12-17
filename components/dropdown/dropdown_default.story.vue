<template>
  <dt-dropdown
    :items="items"
    :open="isOpen"
    :fixed-alignment="fixedAlignment"
    :content-width="contentWidth"
    :padding="padding"
    @highlight="onHighlight"
    @select="onDropdownSelect"
    @escape="onDropdownEscape"
    :navigation-type="navigationType"
    @update:open="updateOpen"
  >
    <template #anchor="{ attrs }">
      <dt-link
        v-bind="attrs"
        class="d-link"
        href="#"
        @click.prevent="isOpen = !isOpen"
        @keydown.space="isOpen = !isOpen"
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
          :is-highlighted="activeItemIndex === i"
          :set-highlight="() => setHighlightIndex(i)"
          :navigation-type="navigationType"
          :focusable="true"
          @click="onDropdownSelect(i)"
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
    };
  },
  methods: {
    updateOpen (isOpen) {
      this.isOpen = isOpen;
    },

    onDropdownSelect (i) {
      this.isOpen = false;
      this.onSelect(i);
    },

    onDropdownEscape () {
      this.isOpen = false;
      this.onEscape();
    },
  },
};
</script>
