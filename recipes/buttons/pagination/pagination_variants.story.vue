<template>
  <dt-recipe-pagination
    :total-pages="10"
  />
</template>

<script>
import DtRecipePagination from './pagination';

export default {
  name: 'DtRecipePaginationVariants',
  components: { DtRecipePagination },
};
</script>
