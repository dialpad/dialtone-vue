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
import { LINK_MODIFIER_CLASSES, DANGER, LINK_KIND_CLASSES } from './link_constants.js';

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
  },

  computed: {
    linkClasses () {
      return [
        'd-link',
        { [`d-link--${this.kind}`]: this.kind.length > 0 },
        { [this.linkDisabledClass()]: this.disabled },
        { [this.linkInvertedClass()]: this.inverted },
      ];
    },
  },

  methods: {
    linkDisabledClass () {
      return this.inverted ? LINK_MODIFIER_CLASSES.invertedDisabled : LINK_MODIFIER_CLASSES.disabled;
    },

    linkInvertedClass () {
      return this.kind === DANGER ? LINK_MODIFIER_CLASSES.invertedDanger : LINK_MODIFIER_CLASSES.inverted;
    },
  },
};
</script>
