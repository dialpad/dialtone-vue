<template>
  <dt-breadcrumbs
    class="d-py16 d-px12"
    :breadcrumbs="breadcrumbs"
  />
</template>

<script>
import DtBreadcrumbs from './breadcrumbs';

export default {
  name: 'DtBreadcrumbsDefault',
  components: { DtBreadcrumbs },
};
</script>
