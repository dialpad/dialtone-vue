<template>
  <div class="d-d-flex d-fd-row d-gg2">
    <dt-button
      class="d-h32 d-w32"
      :importance="activePage > 1 ? 'clear' : 'primary'"
      :disabled="activePage === 1"
    >
      <template slot="icon">
        <icon-chevron-left />
      </template>
    </dt-button>
    <dt-button
      v-for="(item, index) in pages"
      id="list"
      :key="index"
      :importance="activePage === index + 1 ? 'primary' : 'clear'"
      class="d-h32 d-w32"
      label-class="d-fs14"
    >
      {{ item }}
    </dt-button>
    <dt-button
      class="d-h32 d-w32"
      :disabled="activePage === totalPages"
      :importance="activePage < totalPages ? 'clear' : 'primary'"
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

  mixins: [],

  /* inheritAttrs: false is generally an option we want to set on library
    components. This allows any attributes passed in that are not recognized
    as props to be passed down to another element or component using v-bind:$attrs
    more info: https://vuejs.org/v2/api/#inheritAttrs */
  // inheritAttrs: false,

  props: {
    /**
     * Number of pages to be shown
     */
    totalPages: {
      type: Number,
      default: 5,
    },

    /**
     * Selected/Active page
     */
    activePage: {
      type: Number,
      default: 1,
    },
  },

  data () {
    return {};
  },

  computed: {
    pages () {
      return Array(this.totalPages).fill().map((_, i) => i + 1);
    },
  },

  watch: {},

  methods: {},
};
</script>

<style lang="less">

</style>
