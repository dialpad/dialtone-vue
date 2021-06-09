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
    :disabled="isDisabled"
    @click="selectPanel"
  >
    <slot />
  </button>
</template>

<script>
import { TAB_IMPORTANCE_MODIFIERS } from './tabs_constants.js';

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
          [TAB_IMPORTANCE_MODIFIERS.selected]: this.isSelected,
        },
      ];
    },

    ariaSelected () {
      return `${this.isSelected}`;
    },

    isSelected () {
      return this.groupContext.selected === this.panelId;
    },

    isDisabled () {
      return this.groupContext.disabled || this.disabled;
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
