<template>
  <a
    :id="id"
    :href="href"
    :class="['d-link', linkKindClass, linkModifierClassDisabled, linkModifierClassInverted]"
    data-qa="hs-link"
  >
    <slot />
  </a>
</template>

<script>
import { LINK_VALIDATION_CLASSES, LINK_MODIFIERS, DANGER, ALLOW_KINDS } from './link_constants.js';
import util from '../utils';

export default {
  name: 'HsLink',

  props: {
    id: {
      type: String,
      default () {
        return util.getUniqueString();
      },
    },

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
        return ALLOW_KINDS.includes(kind);
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
    linkKindClass () {
      return LINK_VALIDATION_CLASSES[this.kind];
    },

    linkModifierClassDisabled () {
      if (!this.disabled) {
        return '';
      }

      return this.inverted ? LINK_MODIFIERS.invertedDisabled : LINK_MODIFIERS.disabled;
    },

    linkModifierClassInverted () {
      if (this.kind === DANGER && this.inverted) {
        return LINK_MODIFIERS.invertedDanger;
      }

      return this.inverted ? LINK_MODIFIERS.inverted : '';
    },
  },
};
</script>
