<template>
  <div data-qa="dt-tabs">
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
      @keyup.left="tabLeft"
      @keyup.right="tabRight"
    >
      <!-- @slot slot for tabs -->
      <slot name="tabs" />
    </div>
    <!-- @slot slot for panel -->
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
      tabListClass: this.tabListClass,
      tabListChildProps: this.tabListChildProps,
    };
  },

  props: {
    /**
     * Additional class name for the tab's list elements.
     */
    tabListClass: {
      type: [String, Array, Object],
      default: '',
    },

    /**
     * Additional props for the tab list elements.
     */
    tabListChildProps: {
      type: Object,
      default: () => ({}),
    },

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
      preSelectedTab: null,
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
    getTabChildren () {
      return this.$children.map(({ $el }) => $el)
        .filter(({ className }) => className.includes('d-tab'))
        .map(el => ({
          context: el,
          panelId: el.getAttribute('aria-controls').replace('dt-panel-', ''),
          isSelected: el.getAttribute('aria-selected') === 'true',
        }));
    },

    onChange () {
      this.$emit('change', { ...this.provideObj });
    },

    changeContentPanel ({ selected }) {
      this.provideObj.selected = selected;
      this.onChange();
    },

    tabLeft () {
      const { index, tabs } = this.getIndexAndTabs();
      if (index === -1) return;
      const indexElement = index - 1 < 0 ? tabs.length - 1 : index - 1;
      this.selectTabByIndex(indexElement, tabs);
    },

    tabRight () {
      const { index, tabs } = this.getIndexAndTabs();
      if (index === -1) return;

      const indexElement = index + 1 > tabs.length - 1 ? 0 : index + 1;
      this.selectTabByIndex(indexElement, tabs);
    },

    selectTabByIndex (index, tabs) {
      const { context, panelId } = tabs[index];
      this.provideObj.selected = panelId;
      context.focus();
    },

    getIndexAndTabs () {
      const tabs = this.getTabChildren();
      const index = tabs.findIndex((context) => context.isSelected);

      return {
        tabs,
        index,
      };
    },
  },
};
</script>
