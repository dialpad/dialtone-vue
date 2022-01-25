<template>
  <dt-dropdown
    :open="isOpen"
    :fixed-vertical-alignment="fixedVerticalAlignment"
    :fixed-alignment="fixedAlignment"
    :content-width="contentWidth"
    :padding="padding"
    :navigation-type="navigationType"
    @highlight="onHighlight"
    @escape="onDropdownEscape"
    @update:open="updateOpen"
  >
    <template #anchor="{ attrs }">
      <div
        v-if="anchor"
        v-html="anchor"
      />
      <dt-button
        v-else
        v-bind="attrs"
        @click.prevent="isOpen = !isOpen"
      >
        Click to open
      </dt-button>
    </template>
    <template #list>
      <div
        v-if="list"
        v-html="list"
      />
      <dt-list-item
        v-else
        v-for="(item, i) in items"
        role="menuitem"
        :key="item.id"
        :navigation-type="navigationType"
        @click="onClick(i)"
      >
        {{ item.name }}
      </dt-list-item>
    </template>
  </dt-dropdown>
</template>

<script>
import DtDropdown from './dropdown';
import { DtListItem } from '../list_item';
import { DtButton } from '../button';
import { LIST_ITEM_NAVIGATION_TYPES } from '../list_item/list_item_constants';

export default {
  name: 'DtDropdownDefault',

  components: { DtDropdown, DtListItem, DtButton },

  data () {
    return {
      isOpen: this.open || false,
      LIST_ITEM_NAVIGATION_TYPES,
    };
  },

  computed: {
    items () {
      return [
        { name: '1st menu item', id: 1 },
        { name: '2nd menu item', id: 2 },
        { name: '3rd menu item', id: 3 },
      ];
    },
  },

  watch: {
    open: {
      handler () {
        this.isOpen = this.open;
      },
    },
  },

  methods: {
    updateOpen (isOpen) {
      this.isOpen = isOpen;
    },

    onClick (i) {
      this.isOpen = false;
    },

    onDropdownEscape () {
      this.isOpen = false;
      this.onEscape();
    },
  },
};
</script>
