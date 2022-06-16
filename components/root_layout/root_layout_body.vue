<template>
  <div
    :style="bodyStyle"
    class="root-layout__body"
  >
    <aside
      :style="sidebarStyle"
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
  },

  computed: {
    bodyStyle () {
      switch (this.sidebarPosition) {
        case 'right': {
          return {
            'flex-direction': 'row-reverse',
          };
        }
        default: {
          return {
            'flex-direction': 'row',
          };
        }
      }
    },

    sidebarStyle () {
      return {
        'flex-basis': this.sidebarWidth,
      };
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

.root-layout__sidebar {
  flex-grow: 1;
  background-color: var(--black-025);
}

.root-layout__content {
  flex-basis: 0;
  flex-grow: 999;
}
</style>
