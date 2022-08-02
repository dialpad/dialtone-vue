<template>
  <dt-pagination
    :total-pages="totalPages"
    :active-page="activePage"
    :max-visible="maxVisible"
    :aria-label="'pagination'"
    :prev-aria-label="'previous'"
    :next-aria-label="'next'"
    :page-number-aria-label="getPageNumberAriaLabel"
    @change="onChange"
  />
</template>

<script>
import DtPagination from './pagination';

export default {
  name: 'DtPaginationDefault',
  components: { DtPagination },
  methods: {
    getPageNumberAriaLabel (page) {
      return page === this.totalPages ? `Last page ${page}` : `Page ${page}`;
    },
  },
};
</script>
