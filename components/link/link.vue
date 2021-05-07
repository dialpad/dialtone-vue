<template>
  <a
    :id="id"
    :href="url"
    :class="['d-link', linkKindClass, linkModifierClassDisabled, linkModifierClassInverted]"
    data-qa="hs-link"
  >
    <span data-qa="hs-link-label">
      {{ label }}
      <slot v-if="!label" />
    </span>
  </a>
</template>

<script>
import { LINK_VALIDATION_CLASSES, LINK_MODIFIERS } from './link_constants.js';
import { getUniqueString } from '../utils';

export default {
  name: 'HsLink',

  props: {
    id: {
      type: String,
      default: () => getUniqueString(),
    },

    /**
     * Provides the url for the link
     */
    url: {
      type: String,
      required: true,
    },

    /**
     * Provides a label for the link, overridden by default slot.
     */
    label: {
      type: String,
      default: '',
    },

    /**
     * Applies the link variant styles
     */
    kind: {
      type: String,
      default: '',
      validator: kind => kind === '' || !!LINK_VALIDATION_CLASSES[kind],
    },

    /**
     * Applies the inverted styles to the link
     */
    inverted: {
      type: Boolean,
      default: false,
    },

    /**
     * Disables the link
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
      if (this.kind === 'danger' && this.inverted) {
        return LINK_MODIFIERS.invertedDanger;
      }

      return this.inverted ? LINK_MODIFIERS.inverted : '';
    },
  },
};
</script>
