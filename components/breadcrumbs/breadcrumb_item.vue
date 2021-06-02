<template>
  <li :class="breadcrumbItemClasses">
    <dt-link
      :kind="kindLink"
      :aria-current="ariaCurrent"
      :href="url"
      data-qa="breadcrumb"
      v-bind="$attrs"
    >
      <slot>
        {{ label }}
      </slot>
    </dt-link>
  </li>
</template>

<script>
import { SELECTED } from './breadcrumbs_constants.js';
import { DtLink } from '../link';
import { INVERTED, MUTED } from '../link/link_constants';

export default {
  name: 'DtBreadcrumbItem',

  components: {
    DtLink,
  },

  inheritAttrs: false,

  props: {
    /**
     * Applies the inverted styles to the link
     */
    inverted: {
      type: Boolean,
      default: false,
    },

    /**
     * Applies selected styles to the breadcrumb
     */
    selected: {
      type: Boolean,
      default: false,
    },

    /**
     * Describes the breadcrumb. Overridden by default slot
     * */
    label: {
      type: String,
      default: '',
    },

    /**
     * Provides the link element with a URL
     * */
    url: {
      type: String,
      required: true,
    },
  },

  computed: {
    kindLink () {
      return this.inverted ? INVERTED : MUTED;
    },

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
