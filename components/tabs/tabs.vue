<template>
  <div
    class="d-d-flex d-fd-column d-w100p d-stack16"
    data-qa="dt-tabs"
  >
    <div
      :class="[
        'd-tablist',
        TAB_LIST_SIZE_MODIFIERS[size],
        TAB_LIST_SIZE_MODIFIERS[size],
        {
          [TAB_LIST_KIND_MODIFIERS.inverted]: inverted,
          [TAB_LIST_IMPORTANCE_MODIFIERS.borderless]: borderless,
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
import {
  TAB_LIST_SIZES,
  TAB_LIST_KIND_MODIFIERS,
  TAB_LIST_IMPORTANCE_MODIFIERS,
  TAB_LIST_SIZE_MODIFIERS,
} from './tabs_constants.js';

export default {
  name: 'DtTabGroup',

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
        return TAB_LIST_SIZES.includes(size);
      },
    },
  },

  data () {
    return {
      provideObj: {
        selected: '', // the currently displayed tab id
        disabled: false, // disable group
      },

      TAB_LIST_SIZE_MODIFIERS,
      TAB_LIST_KIND_MODIFIERS,
      TAB_LIST_IMPORTANCE_MODIFIERS,
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
