<template>
  <li :class="breadcrumbItemClasses">
    <dt-link
      :kind="linkKind"
      :aria-current="ariaCurrent"
      data-qa="breadcrumb-item"
      v-bind="$attrs"
    >
      <slot>
        {{ label }}
      </slot>
    </dt-link>
  </li>
</template>

<script>
import { BREADCRUMB_ITEM_SELECTED_MODIFIER } from './breadcrumbs_constants';
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
  },

  computed: {
    linkKind () {
      return this.inverted ? INVERTED : MUTED;
    },

    ariaCurrent () {
      return this.selected ? 'location' : '';
    },

    breadcrumbItemClasses () {
      return [
        'd-breadcrumbs__item',
        { [BREADCRUMB_ITEM_SELECTED_MODIFIER]: this.selected },
      ];
    },
  },
};
</script>
