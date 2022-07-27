<template>
  <dt-pagination :total-pages="5" />
</template>

<script>
import DtPagination from './pagination';

export default {
  name: 'DtRecipePaginationDefault',
  components: { DtPagination },
  methods: {},
};
</script>
