<template>
  <dt-root-layout
    :sidebar-position="sidebarPosition"
    :sidebar-width="sidebarWidth"
    :header-height="headerHeight"
    :footer-height="footerHeight"
    :content-wrap-width-percent="contentWrapWidthPercent"
  >
    <template
      v-if="header"
      #header
    >
      <span v-html="header" />
    </template>
    <template
      v-if="sidebar"
      #sidebar
    >
      <span v-html="sidebar" />
    </template>
    <template v-if="defaultSlot">
      <span v-html="defaultSlot" />
    </template>
    <template
      v-if="footer"
      #footer
    >
      <span v-html="footer" />
    </template>
  </dt-root-layout>
</template>

<script>
import DtRootLayout from './root_layout';

export default {
  name: 'DtRootLayoutDefault',
  components: { DtRootLayout },
};
</script>
