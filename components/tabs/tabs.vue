<template>
  <div
    class="d-d-flex d-fd-column d-w100p d-stack16"
    data-qa="dt-tabs"
  >
    <div
      :class="[
        'd-tablist',
        TABS_SIZE_MODIFIERS[size],
        {
          [TABS_KIND_MODIFIERS.inverted]: inverted,
          [TABS_IMPORTANCE_MODIFIERS.borderless]: borderless,
        },
      ]"
      role="tablist"
      :aria-label="label"
    >
      <slot name="tabs" />
    </div>
    <slot />
  </div>
</template>

<script>
import { TABS_SIZES, TABS_KIND_MODIFIERS, TABS_IMPORTANCE_MODIFIERS, TABS_SIZE_MODIFIERS } from './tabs_constants.js';

export default {
  name: 'DtTabs',

  provide () {
    return {
      groupContext: this.provideObj,
      changeContentPanel: this.changeContentPanel,
    };
  },

  props: {
    /**
     * Identifies the tab group
     */
    label: {
      type: String,
      default: '',
    },

    /**
     * The id of the selected tab panel which should be displayed
     */
    selected: {
      type: String,
      default: '',
    },

    /**
     * If true, disables the tab group
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * If true, applies inverted styles to the tab group
     */
    inverted: {
      type: Boolean,
      default: false,
    },

    /**
     * If true, applies borderless styles to the tab group
     */
    borderless: {
      type: Boolean,
      default: false,
    },

    /**
     * If provided, applies size styles to the tab group
     */
    size: {
      type: String,
      default: '',
      validate (size) {
        return TABS_SIZES.includes(size);
      },
    },
  },

  data () {
    return {
      provideObj: {
        selected: '', // the currently displayed tab id
        disabled: false, // disable group
      },

      TABS_SIZE_MODIFIERS,
      TABS_KIND_MODIFIERS,
      TABS_IMPORTANCE_MODIFIERS,
    };
  },

  watch: {
    disabled: {
      immediate: true,
      handler () {
        this.provideObj.disabled = this.disabled;
      },
    },
  },

  mounted () {
    /**
     * Prevent override tab selected by default
     */
    if (!this.provideObj.selected) {
      this.provideObj.selected = this.selected;
    }
  },

  methods: {
    onChange () {
      this.$emit('change', { ...this.provideObj });
    },

    changeContentPanel ({ selected }) {
      this.provideObj.selected = selected;
      this.onChange();
    },
  },
};
</script>
