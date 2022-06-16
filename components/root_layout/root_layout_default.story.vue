<template>
  <dt-root-layout
    :header-sticky="headerSticky"
    :header-height="headerHeight"
    :sidebar-position="sidebarPosition"
    :sidebar-width="sidebarWidth"
    :content-wrap-width-percent="contentWrapWidthPercent"
    :footer-height="footerHeight"
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
