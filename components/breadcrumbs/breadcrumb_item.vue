<template>
  <li :class="breadcrumbItemClasses">
    <dt-link
      :href="href"
      :kind="kind"
      :inverted="inverted"
      :disabled="disabled"
      :aria-current="ariaCurrent"
    >
      <slot />
    </dt-link>
  </li>
</template>

<script>
import { SELECTED } from './breadcrumbs_constants.js';
import { LINK_VARIANTS } from '../link/link_constants';
import { DtLink } from '../link';

export default {
  name: 'DtBreadcrumbItem',

  components: {
    DtLink,
  },

  props: {
    /**
     * Provides the url for the link
     */
    href: {
      type: String,
      required: true,
    },

    /**
     * Applies the link variant styles
     */
    kind: {
      type: String,
      default: '',
      validator (kind) {
        return LINK_VARIANTS.includes(kind);
      },
    },

    /**
     * Applies the inverted styles to the link
     */
    inverted: {
      type: Boolean,
      default: false,
    },

    /**
     * Applies the disabled styles to the link
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    selected: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ariaCurrent () {
      return this.selected ? 'location' : '';
    },

    breadcrumbItemClasses () {
      return [
        'd-breadcrumbs__item',
        { [`d-breadcrumbs__item--${SELECTED}`]: this.selected },
      ];
    },
  },
};
</script>
