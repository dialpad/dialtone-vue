<template>
  <div>
    <header
      class="root-layout__header"
      :style="{ 'height': headerHeight }"
    >
      <slot name="header" />
    </header>
    <div
      :class="['with-sidebar', {
        'with-sidebar-left': sidebarPosition === 'left',
        'with-sidebar-right': sidebarPosition === 'right',
      }]"
    >
      <aside
        v-if="sidebarPosition === 'left'"
        :style="{ 'flex-basis': sidebarWidth }"
        class="root-layout__sidebar"
      >
        <slot name="sidebar" />
      </aside>
      <main :style="{ 'min-inline-size': contentWrapWidthPercent }">
        <slot />
      </main>
      <aside
        v-if="sidebarPosition === 'right'"
        :style="{ 'flex-basis': sidebarWidth }"
        class="root-layout__sidebar"
      >
        <slot name="sidebar" />
      </aside>
    </div>
    <footer
      class="root-layout__footer"
      :style="{ 'height': footerHeight }"
    >
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
import { ROOT_LAYOUT_POSITIONS } from './root_layout_constants.js';

export default {
  name: 'DtRootLayout',

  components: {},

  mixins: [],

  /* inheritAttrs: false is generally an option we want to set on library
    components. This allows any attributes passed in that are not recognized
    as props to be passed down to another element or component using v-bind:$attrs
    more info: https://vuejs.org/v2/api/#inheritAttrs */
  // inheritAttrs: false,

  props: {
    /**
     * The height of the header
     * Possible units rem|px|%|em
     */
    headerHeight: {
      type: String,
      default: '',
    },

    /**
     * Whether the side bar is on the left or right side
     * Possible options: 'left', 'right'
     */
    sidebarPosition: {
      type: String,
      default: 'left',
      validator: (s) => Object.values(ROOT_LAYOUT_POSITIONS).includes(s),
    },

    /**
     * The width of the sidebar
     * Possible units rem|px|%|em
     */
    sidebarWidth: {
      type: String,
      default: '260px',
    },

    /**
     * The height of the footer
     * Possible units rem|px|%|em
     */
    footerHeight: {
      type: String,
      default: '',
    },

    /**
     * For responsive layouts. When the main content is at the specified width percentage,
     * the sidebar will display above the content rather than beside it. Please enter a percentage string value
     *
     * ex: '50%', '30%'
     */
    contentWrapWidthPercent: {
      type: String,
      default: undefined,
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
  height: 64px;
}

.root-layout__footer {
  background-color: var(--yellow-050);
  height: 64px;
}

.root-layout__sidebar {
  background-color: var(--black-025);
}

.with-sidebar {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
}

.with-sidebar-left > :first-child {
  flex-grow: 1;
}

.with-sidebar-left > :last-child {
  flex-basis: 0;
  flex-grow: 999;
}

.with-sidebar-right > :first-child {
  flex-basis: 0;
  flex-grow: 999;
}

.with-sidebar-right > :last-child {
  flex-grow: 1;
}
</style>
