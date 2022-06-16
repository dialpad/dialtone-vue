<template>
  <div>
    <header
      class="root-layout__header"
      :class="{ 'root-layout__header--sticky': headerSticky }"
      :style="{ 'height': headerHeight }"
    >
      <slot name="header" />
    </header>
    <dt-root-layout-body
      :sidebar-width="sidebarWidth"
      :sidebar-position="sidebarPosition"
      :content-wrap-width-percent="contentWrapWidthPercent"
    >
      <template #sidebar>
        <slot name="sidebar" />
      </template>
      <template #content>
        <slot name="default" />
      </template>
    </dt-root-layout-body>
    <footer
      class="root-layout__footer"
      :style="{ 'height': footerHeight }"
    >
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
import DtRootLayoutBody from './root_layout_body';
import { ROOT_LAYOUT_SIDEBAR_POSITIONS } from './root_layout_constants';

export default {
  name: 'DtRootLayout',

  components: {
    DtRootLayoutBody,
  },

  mixins: [],

  inheritAttrs: false,

  props: {
    /**
     * The height of the header
     * Possible units rem|px|%|em
     */
    headerHeight: {
      type: String,
      default: '64px',
    },

    /**
     * Scroll the header with the page
     */
    headerSticky: {
      type: Boolean,
      default: false,
    },

    /**
     * The width of the sidebar
     * Possible units rem|px|%|em
     */
    sidebarWidth: {
      type: String,
      default: '256px',
    },

    /**
     * Whether the sidebar is on the left or right side
     * Possible options: 'left', 'right'
     */
    sidebarPosition: {
      type: String,
      default: 'left',
      validator: (s) => Object.values(ROOT_LAYOUT_SIDEBAR_POSITIONS).includes(s),
    },

    /**
     * For responsive layouts. When the main content is at the specified width percentage,
     * the sidebar will display above the content rather than beside it. Please enter a percentage string value
     *
     * ex: '50%', '30%'
     */
    contentWrapWidthPercent: {
      type: String,
      default: '50%',
    },

    /**
     * The height of the footer
     * Possible units rem|px|%|em
     */
    footerHeight: {
      type: String,
      default: '64px',
    },
  },

  data () {
    return {};
  },

  computed: {},

  watch: {},

  methods: {},
};
</script>

<style lang="less">
.root-layout__header {
  background-color: var(--purple-100);
}

.root-layout__header--sticky {
  position: sticky;
  top: 0;
}

.root-layout__footer {
  background-color: var(--yellow-050);
}
</style>
