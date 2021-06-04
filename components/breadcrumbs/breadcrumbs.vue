<template>
  <nav :class="breadcrumbClasses">
    <ol>
      <slot>
        <dt-breadcrumb-item
          v-for="(item, index) in breadcrumbs"
          :key="getBreadcrumbItemKey(item.url, index)"
          :inverted="inverted"
          v-bind="item"
        />
      </slot>
    </ol>
  </nav>
</template>

<script>
import { BREADCRUMBS_INVERTED_MODIFIER } from './breadcrumbs_constants.js';
import DtBreadcrumbItem from './breadcrumb_item';

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

  computed: {
    breadcrumbClasses () {
      return [
        'd-breadcrumbs',
        { [BREADCRUMBS_INVERTED_MODIFIER]: this.inverted },
      ];
    },
  },

  methods: {
    getBreadcrumbItemKey (url, index) {
      return `breadcrumb-item-${url}-${index}`;
    },
  },
};
</script>
