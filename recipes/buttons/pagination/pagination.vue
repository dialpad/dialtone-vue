<template>
  <div class="d-d-flex d-fd-row d-gg2 d-ai-center">
    <dt-button
      class="d-h32 d-w32"
      data-qa="dt-pagination-prev"
      :aria-label="`pagination-prev`"
      :importance="isFirstPage ? 'primary' : 'clear'"
      :disabled="isFirstPage"
      @click="changePage(currentPage - 1)"
    >
      <template slot="icon">
        <icon-chevron-left />
      </template>
    </dt-button>
    <div
      v-for="(page, index) in pages"
      :key="`page-number-${page}-${index}`"
    >
      <div
        v-if="isNaN(Number(page))"
        data-qa="pagination-separator"
        class="d-h32 d-w32 d-d-flex d-ai-center d-jc-center"
      >
        ...
      </div>
      <dt-button
        v-else
        :aria-label="`page-number-${page}`"
        :importance="currentPage === page ? 'primary' : 'clear'"
        class="d-h32 d-w32"
        label-class="d-fs14"
        @click="changePage(page)"
      >
        {{ page }}
      </dt-button>
    </div>
    <dt-button
      class="d-h32 d-w32"
      data-qa="dt-pagination-next"
      :aria-label="`pagination-next`"
      :disabled="isLastPage"
      :importance="isLastPage ? 'primary' : 'clear'"
      @click="changePage(currentPage + 1)"
    >
      <template slot="icon">
        <icon-chevron-right />
      </template>
    </dt-button>
  </div>
</template>

<script>
import { DtButton } from '@';
import IconChevronLeft from '@dialpad/dialtone/lib/dist/vue/icons/IconChevronLeft';
import IconChevronRight from '@dialpad/dialtone/lib/dist/vue/icons/IconChevronRight';

export default {
  name: 'DtRecipePagination',

  components: {
    DtButton,
    IconChevronLeft,
    IconChevronRight,
  },

  props: {
    /**
     * The total number of the pages
     */
    totalPages: {
      type: Number,
      required: true,
    },

    /**
     * The active current page in the list of pages, defaults to the first page
     */
    activePage: {
      type: Number,
      default: 1,
    },

    /**
     * Determines the max pages to be shown in the list, defaults to 5 and expected to be odd.
     */
    maxVisible: {
      type: Number,
      default: 5,
    },
  },

  emits: ['update:page'],

  data () {
    return {
      currentPage: this.activePage,
    };
  },

  computed: {
    isFirstPage () {
      return this.currentPage === 1;
    },

    isLastPage () {
      return this.currentPage === this.totalPages;
    },

    pages () {
      if (this.maxVisible === 0) {
        return [];
      }
      if (this.totalPages <= this.maxVisible) {
        return this.range(1, this.totalPages);
      }

      const start = this.maxVisible - 1;
      const end = this.totalPages - start;

      if (this.currentPage <= start) {
        return [...this.range(1, start), '...', this.totalPages];
      }

      if (this.currentPage > end) {
        return [1, '...', ...this.range(end + 1, this.totalPages)];
      }

      // rounding to the nearest odd according to the maxlength to always show the page number in the middle.
      const total = this.maxVisible - (3 - this.maxVisible % 2);
      const centerIndex = Math.floor(total / 2);
      const left = this.currentPage - centerIndex;
      const right = this.currentPage + centerIndex;
      return [1, '...', ...this.range(left, right), '...', this.totalPages];
    },
  },

  watch: {},

  methods: {
    range (from, to) {
      const range = [];
      from = from > 0 ? from : 1;
      for (let i = from; i <= to; i++) {
        range.push(i);
      }
      return range;
    },

    changePage (page) {
      this.currentPage = page;
      this.$emit('update:page', this.currentPage);
    },
  },
};
</script>
