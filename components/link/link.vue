<template>
  <a
    :class="[
      'd-link',
      LINK_KIND_MODIFIERS[kind],
    ]"
    data-qa="dt-link"
  >
    <slot />
  </a>
</template>

<script>
import { LINK_VARIANTS, LINK_KIND_MODIFIERS } from './link_constants.js';

/**
 * @property {String} href attribute
 * @property {String} rel attribute
 */
export default {
  name: 'DtLink',

  props: {
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
  },

  /**
   * Emits
   */
  /**
   * Native click event
   *
   * @event click
   * @type {PointerEvent | KeyboardEvent}
   */
  /**
   * Native focus in event
   *
   * @event focusin
   * @type {FocusEvent}
   */
  /**
   * Native focus out event
   *
   * @event focusout
   * @type {FocusEvent}
   */

  data () {
    return {
      LINK_KIND_MODIFIERS,
    };
  },
};
</script>
