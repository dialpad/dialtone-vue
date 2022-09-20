<template>
  <dt-dropdown
    placement="bottom-end"
  >
    <template #anchor>
      <dt-button
        importance="clear"
        :aria-label="dropdownButtonLabel"
      >
        <template #icon>
          <icon-menu-vertical class="d-fc-black-900" />
        </template>
      </dt-button>
    </template>
    <template #list>
      <slot name="menuItems" />
    </template>
  </dt-dropdown>
</template>

<script>
import { DtButton, DtDropdown } from '@';
import IconMenuVertical from '@dialpad/dialtone/lib/dist/vue/icons/IconMenuVertical';

export default {
  name: 'IvrNodeActions',
  components: {
    DtButton,
    DtDropdown,
    IconMenuVertical,
  },

  props: {
    /**
     * Translated string for header menu button
     */
    dropdownButtonLabel: {
      type: String,
      required: true,
    },
  },
};
</script>
