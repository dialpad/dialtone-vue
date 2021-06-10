<template>
  <div>
    <dt-breadcrumbs
      class="d-py16 d-px12"
      :breadcrumbs="breadcrumbs"
    />
    <div class="d-bgc-black-700 d-py16 d-px12">
      <dt-breadcrumbs
        inverted
        :breadcrumbs="breadcrumbsInverted"
      />
    </div>

    <dt-breadcrumbs
      class="d-py16 d-px12"
    >
      <dt-breadcrumb-item
        v-for="breadcrumb in breadcrumbs"
        :key="breadcrumb.label"
        v-bind="breadcrumb"
      />
    </dt-breadcrumbs>
  </div>
</template>

<script>
import DtBreadcrumbs from './breadcrumbs';
import DtBreadcrumbItem from './breadcrumb_item';

export default {
  name: 'DtBreadcrumbsVariants',
  components: { DtBreadcrumbs, DtBreadcrumbItem },
  data () {
    return {
      breadcrumbsInverted: [{
        href: '#',
        label: 'Root',
      },
      {
        href: '#',
        label: 'Section',
      },
      {
        href: '#',
        label: 'Section',
      },
      {
        href: '#',
        label: 'Section',
      },
      {
        href: '#',
        label: 'Current Page',
        selected: true,
      }],
    };
  },
};
</script>
