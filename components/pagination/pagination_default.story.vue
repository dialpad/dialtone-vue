<template>
  <dt-pagination
    :total-pages="$attrs.totalPages"
    :active-page="$attrs.activePage"
    :max-visible="$attrs.maxVisible"
    :aria-label="'pagination'"
    :prev-aria-label="'previous'"
    :next-aria-label="'next'"
    :page-number-aria-label="getPageNumberAriaLabel"
    @change="$attrs.onChange"
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
