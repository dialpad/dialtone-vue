<template>
  <div
    :class="breadcrumbClasses"
    :aria-label="'breadcrumb'"
  >
    <ol>
      <template v-if="breadcrumbs.length">
        <dt-breadcrumb-item
          v-for="(item, index) in breadcrumbs"
          :key="getMessageKey(item.url, index)"
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

export default {
  name: 'DtBreadcrumbs',

  components: {
    DtBreadcrumbItem,
  },

  props: {
    breadcrumbs: {
      type: Array,
      default: () => [],
      validate (breadcrumbs) {
        return breadcrumbs.every(({ href, label }) => {
          return href !== undefined && label !== undefined;
        });
      },
    },

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
