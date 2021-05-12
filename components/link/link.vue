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
import { LINK_MODIFIERS_CLASSES, DANGER, LINK_KINDS } from './link_constants.js';

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
        return LINK_KINDS.includes(kind);
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
      return this.inverted ? LINK_MODIFIERS_CLASSES.invertedDisabled : LINK_MODIFIERS_CLASSES.disabled;
    },

    linkInvertedClass () {
      return this.kind === DANGER ? LINK_MODIFIERS_CLASSES.invertedDanger : LINK_MODIFIERS_CLASSES.inverted;
    },
  },
};
</script>
