<template>
  <dt-pagination
    :total-pages="totalPages"
    :active-page="activePage"
    :max-visible="maxVisible"
  />
</template>

<script>
import DtPagination from './pagination';

export default {
  name: 'DtRecipePaginationDefault',
  components: { DtPagination },
  methods: {},
};
</script>
