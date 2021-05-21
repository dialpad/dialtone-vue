<template>
  <dt-breadcrumbs :breadcrumbs="breadcrumbs" :inverted="inverted"/>
</template>

<script>
import DtBreadcrumbs from './breadcrumbs';

export default {
  name: 'DtBreadcrumbsDefault',
  components: { DtBreadcrumbs },
};
</script>
