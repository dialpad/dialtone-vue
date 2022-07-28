<template>
  <dt-pagination
    :total-pages="$attrs.totalPages"
    :active-page="$attrs.activePage"
    :max-visible="$attrs.maxVisible"
  />
</template>

<script>
import DtPagination from './pagination';

export default {
  name: 'DtPaginationDefault',
  components: { DtPagination },
  methods: {},
};
</script>
