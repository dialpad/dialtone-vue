<template>
  <a
    :href="url"
    :class="['d-link', linkValidationClass, linkModifierClass]"
    :disabled="disabled"
    v-bind="$attrs"
    data-qa="hs-link"
  >
    <span data-qa="hs-link-label">
      <slot>
        {{ label }}
      </slot>
    </span>
  </a>
</template>

<script>
import { LINK_VALIDATION_CLASSES, LINK_MODIFIERS } from './link_constants.js';

export default {
  name: 'HsLink',

  /* inheritAttrs: false is generally an option we want to set on library
    components. This allows any attributes passed in that are not recognized
    as props to be passed down to another element or component using v-bind:$attrs
    more info: https://vuejs.org/v2/api/#inheritAttrs */
  inheritAttrs: false,

  props: {
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
    linkValidationClass () {
      return LINK_VALIDATION_CLASSES[this.kind];
    },

    linkModifierClass () {
      if (this.disabled && !this.inverted) return LINK_MODIFIERS.disabled;
      if (this.disabled && this.inverted) return LINK_MODIFIERS.invertedDisabled;
      if (this.kind === 'danger' && this.inverted) return LINK_MODIFIERS.invertedDanger;

      return this.inverted ? LINK_MODIFIERS.inverted : '';
    },
  },
};
</script>
