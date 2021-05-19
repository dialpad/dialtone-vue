<template>
  <a
    :href="href"
    :class="['d-link', linkClasses]"
    data-qa="dt-link"
  >
    <slot />
  </a>
</template>

<script>
import { LINK_MODIFIER_CLASSES, LINK_KIND_CLASSES } from './link_constants.js';

export default {
  name: 'DtLink',

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
        return LINK_KIND_CLASSES.includes(kind);
      },
    },

    /**
     * Applies the disabled styles to the link
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    linkClasses () {
      return [
        'd-link',
        { [`d-link--${this.kind}`]: this.kind.length > 0 },
        { [LINK_MODIFIER_CLASSES.disabled]: this.disabled },
      ];
    },
  },
};
</script>
