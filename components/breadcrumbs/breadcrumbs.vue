<template>
  <div
    :id="id"
    :class="breadcrumbClasses"
  >
    <ol>
      <template v-if="breadcrumbs.length">
        <dt-breadcrumb-item
          v-for="(item, index) in breadcrumbs"
          :key="getBreadcrumbItemKey(item.url, index)"
          :inverted="inverted"
          v-bind="item"
        />
      </template>
      <template v-else>
        <slot />
      </template>
    </ol>
  </div>
</template>

<script>
import { BREADCRUMBS_INVERTED_MODIFIER } from './breadcrumbs_constants.js';
import DtBreadcrumbItem from './breadcrumb_item';
import utils from '../utils';

export default {
  name: 'DtBreadcrumbs',

  components: {
    DtBreadcrumbItem,
  },

  props: {
    /**
     * The id of the breadcrumbs
     */
    id: {
      type: String,
      default () { return utils.getUniqueString(); },
    },

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
