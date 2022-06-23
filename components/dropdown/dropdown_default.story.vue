<!-- eslint-disable vue/no-deprecated-v-bind-sync -->
<template>
  <dt-dropdown
    :open.sync="isOpen"
    :placement="placement"
    :fallback-placements="fallbackPlacements"
    :content-width="contentWidth"
    :padding="padding"
    :modal="modal"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :list-class="listClass"
    :navigation-type="navigationType"
    @highlight="onHighlight"
    @opened="onOpened"
  >
    <template
      slot="anchor"
      slot-scope="{ attrs }"
    >
      <div
        v-if="anchor"
        v-html="anchor"
      />
      <dt-button
        v-else
        v-bind="attrs"
      >
        Click to open
      </dt-button>
    </template>
    <template
      slot="list"
      slot-scope="{ close }"
    >
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
      isOpen: this.open,
    };
  },

  computed: {
    items () {
      return [
        { name: 'Menu item 1', id: 1 },
        { name: 'Menu item 2', id: 2 },
        { name: 'Another menu item', id: 3 },
        { name: 'Another another menu item', id: 4 },
      ];
    },
  },

  watch: {
    open (open) {
      this.isOpen = open;
    },
  },
};
</script>
