<template>
  <button
    :id="panelId"
    :class="tabClasses"
    role="tab"
    :aria-selected="ariaSelected"
    :aria-controls="panelId"
    :aria-label="label"
    data-qa="dt-tab"
    tabindex="0"
    :disabled="disabled"
    @click="selectPanel"
  >
    <slot />
  </button>
</template>

<script>
import { SELECTED } from './tabs_constants.js';

export default {
  name: 'DtTab',

  inject: ['changeContentPanel', 'groupContext'],
  props: {
    /**
     * Id of the associated content panel
     */
    panelId: {
      type: String,
      required: true,
    },

    /**
     * Describes the tab
     */
    label: {
      type: String,
      default: '',
    },

    /**
     * Controls the state of the tab
     */
    selected: {
      type: Boolean,
      default: false,
    },

    /**
     * If true, disables the tab
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    tabClasses () {
      return [
        'd-tab',
        {
          [`d-tab--${SELECTED}`]: this.isSelected,
        },
      ];
    },

    ariaSelected () {
      return `${this.isSelected}`;
    },

    isSelected () {
      return this.groupContext.selected === this.panelId;
    },
  },

  mounted () {
    if (this.selected) {
      this.selectPanel();
    }
  },

  methods: {
    selectPanel () {
      this.changeContentPanel({
        selected: this.panelId,
      });
    },
  },
};
</script>

<style scoped>

</style>
