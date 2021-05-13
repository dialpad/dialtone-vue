<template>
  <div>
    <dt-breadcrumbs :breadcrumbs="breadcrumbs" />
    <div class="d-bgc-black-700 d-border-radius--md d-py16 d-px12 d-mxn12">
      <dt-breadcrumbs
        inverted
        :breadcrumbs="breadcrumbsInverted"
      />
    </div>
  </div>
</template>

<script>
import DtBreadcrumbs from './breadcrumbs';

export default {
  name: 'DtBreadcrumbsVariants',
  components: { DtBreadcrumbs },
};
</script>
