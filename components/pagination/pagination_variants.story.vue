<template>
  <div class="d-divide-y d-divide-purple-400">
    <div class="d-m32">
      <p class="d-my16 d-fs14 d-fw-bold">
        separator in the end
      </p>
      <dt-pagination
        :total-pages="10"
      />
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs14 d-fw-bold">
        separator in the beginning
      </p>
      <dt-pagination
        :total-pages="15"
        :active-page="13"
      />
    </div>
    <div class="d-m32">
      <p class="d-my16 d-fs14 d-fw-bold">
        separator on both sides
      </p>
      <dt-pagination
        :total-pages="10"
        :active-page="5"
      />
    </div>
  </div>
</template>

<script>
import DtPagination from './pagination';

export default {
  name: 'DtPaginationVariants',
  components: { DtPagination },
};
</script>
