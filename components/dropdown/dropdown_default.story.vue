<template>
  <dt-dropdown
    :open="$attrs.open"
    :fixed-vertical-alignment="$attrs.fixedVerticalAlignment"
    :fixed-alignment="$attrs.fixedAlignment"
    :content-width="$attrs.contentWidth"
    :padding="$attrs.padding"
    :navigation-type="$attrs.navigationType"
    @highlight="$attrs.onHighlight"
    @escape="onDropdownEscape"
    @update:open="$attrs.onUpdateOpen"
  >
    <template #anchor="{ attrs, toggleOpen }">
      <div
        v-if="anchor"
        v-html="anchor"
      />
      <dt-button
        v-else
        v-bind="attrs"
        @click.prevent="toggleOpen"
      >
        Click to open
      </dt-button>
    </template>
    <template #list="{ close }">
      <div
        v-if="list"
        v-html="list"
      />
      <dt-list-item
        v-for="(item) in items"
        v-else
        :key="item.id"
        role="menuitem"
        :navigation-type="navigationType"
        @click="close"
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

  methods: {
    onDropdownEscape () {
      this.onEscape();
    },
  },
};
</script>
