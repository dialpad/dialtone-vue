<template>
  <div
    :id="id"
    :class="breadcrumbClasses"
    :aria-label="'breadcrumbs'"
  >
    <ol>
      <template v-if="breadcrumbs.length">
        <dt-breadcrumb-item
          v-for="(item, index) in breadcrumbs"
          :key="getMessageKey(item.url, index)"
          :inverted="inverted"
          v-bind="item"
        >
          {{ item.label }}
        </dt-breadcrumb-item>
      </template>
      <template v-else>
        <slot />
      </template>
    </ol>
  </div>
</template>

<script>
import { INVERTED } from './breadcrumbs_constants.js';
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
        { [`d-breadcrumbs--${INVERTED}`]: this.inverted },
      ];
    },
  },

  methods: {
    getMessageKey (url, index) {
      return `breadcrumb-item-${url}-${index}`;
    },
  },
};
</script>
