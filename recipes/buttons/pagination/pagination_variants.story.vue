<template>
  <div class="d-divide-y d-divide-purple-400">
    <div class="d-m32">
      <p class="d-my16 d-fs14 d-fw-bold">
        Pagination component when total pages is 10 and max visible is less than default(3)
      </p>
      <dt-recipe-pagination
        :total-pages="10"
        :max-visible="3"
      />
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs14 d-fw-bold">
        Pagination component when total pages is 10 and max visible is 5(odd)
      </p>
      <dt-recipe-pagination
        :total-pages="10"
      />
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs14 d-fw-bold">
        Pagination component when total pages is 15 and max visible is 8(even)
      </p>
      <dt-recipe-pagination
        :total-pages="15"
        :max-visible="8"
      />
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs14 d-fw-bold">
        Pagination component when active page is not default
      </p>
      <dt-recipe-pagination
        :total-pages="10"
        :active-page="5"
      />
    </div>
  </div>
</template>

<script>
import DtRecipePagination from './pagination';

export default {
  name: 'DtRecipePaginationVariants',
  components: { DtRecipePagination },
};
</script>
