<template>
  <div
    class="d-d-flex d-fd-column d-w100p d-stack16"
    data-qa="dt-tabs"
  >
    <div
      :class="tabsClasses"
      role="tablist"
      :aria-label="label"
    >
      <slot name="tabs" />
    </div>
    <slot />
  </div>
</template>

<script>
import { TABS_SIZES, INVERTED, NO_BORDER } from './tabs_constants.js';

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
      validate (kind) {
        return TABS_SIZES.includes(kind);
      },
    },
  },

  data () {
    return {
      provideObj: {
        selected: '', // The id of the currently displayed tab content panel
        disabled: false, // Used to disable the group
      },
    };
  },

  computed: {
    tabsClasses () {
      return [
        'd-tablist',
        `d-tablist--${this.size}`,
        {
          [`d-tablist--${INVERTED}`]: this.inverted,
          [`d-tablist--${NO_BORDER}`]: this.borderless,
        },
      ];
    },
  },

  mounted () {
    /**
     * Prevent override tab selected by default
     */
    if (!this.provideObj.selected) {
      this.provideObj.selected = this.selected;
    }

    this.provideObj.disabled = this.disabled;
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
