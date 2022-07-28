<template>
  <dt-pagination
    :total-pages="totalPages"
    :active-page="activePage"
    :max-visible="maxVisible"
    :prev-aria-label="'previous'"
    :next-aria-label="'next'"
    @change="onChange"
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
