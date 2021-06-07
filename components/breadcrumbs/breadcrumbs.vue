<template>
  <div
    :class="[
      'd-breadcrumbs',
      { [BREADCRUMBS_INVERTED_MODIFIER]: inverted },
    ]"
  >
    <ol v-if="isBreadcrumbsExist">
      <dt-breadcrumb-item
        v-for="item in breadcrumbs"
        :key="getBreadcrumbItemKey(item)"
        :inverted="inverted"
        v-bind="item"
      />
    </ol>
    <ol v-else>
      <slot />
    </ol>
  </div>
</template>

<script>
import { BREADCRUMBS_INVERTED_MODIFIER } from './breadcrumbs_constants.js';
import DtBreadcrumbItem from './breadcrumb_item';
import { getUniqueString } from '../utils';

export default {
  name: 'DtBreadcrumbs',

  components: {
    DtBreadcrumbItem,
  },

  props: {
    /**
     * A provided list of breadcrumbs. Overridden by default slot
     */
    breadcrumbs: {
      type: Array,
      default: () => [],
      validate (breadcrumbs) {
        return breadcrumbs.every(({ href, label }) => {
          return href !== undefined && label !== undefined;
        });
      },
    },

    /**
     * Passed through to link. If true, applies inverted styles to the link.
     */
    inverted: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      BREADCRUMBS_INVERTED_MODIFIER,
    };
  },

  computed: {
    isBreadcrumbsExist () {
      return this.breadcrumbs.length !== 0;
    },
  },

  methods: {
    getBreadcrumbItemKey () {
      return getUniqueString('breadcrumbs');
    },
  },
};
</script>
