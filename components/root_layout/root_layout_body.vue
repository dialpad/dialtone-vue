<template>
  <div
    class="root-layout__body"
    :class="bodyClass"
  >
    <aside
      :style="{ 'flex-basis': sidebarWidth }"
      class="root-layout__sidebar"
    >
      <slot name="sidebar" />
    </aside>
    <main
      class="root-layout__content"
      :style="{ 'min-inline-size': contentWrapWidthPercent }"
    >
      <slot name="content" />
    </main>
  </div>
</template>

<script>
import { ROOT_LAYOUT_SIDEBAR_POSITIONS } from '@/components/root_layout/root_layout_constants';

export default {
  name: 'DtRootLayoutBody',
  props: {
    /**
     * The width of the sidebar
     * Possible units rem|px|%|em
     */
    sidebarWidth: {
      type: String,
      default: undefined,
    },

    /**
     * Whether the sidebar is on the left or right side
     * Possible options: 'left', 'right'
     */
    sidebarPosition: {
      type: String,
      default: undefined,
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

  computed: {
    bodyClass () {
      return { 'root-layout__body--invert': this.sidebarPosition === ROOT_LAYOUT_SIDEBAR_POSITIONS.RIGHT };
    },
  },
};
</script>

<style lang="less">
.root-layout__body {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
}

.root-layout__body--invert {
  flex-direction: row-reverse;
}

.root-layout__sidebar {
  flex-grow: 1;
  background-color: var(--black-025);
}

.root-layout__content {
  flex-basis: 0;
  flex-grow: 999;
}
</style>
