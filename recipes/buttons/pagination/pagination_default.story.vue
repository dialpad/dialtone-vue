<template>
  <dt-recipe-pagination :total-pages="5" />
</template>

<script>
import DtRecipePagination from './pagination';

export default {
  name: 'DtRecipePaginationDefault',
  components: { DtRecipePagination },
  methods: {},
};
</script>
