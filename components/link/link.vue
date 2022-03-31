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

<script lang="ts">
import { defineComponent } from 'vue';
import { LINK_VARIANTS, LINK_KIND_MODIFIERS } from './link_constants';

export default defineComponent({
  name: 'DtLink',

  props: {
    /**
     * Applies the link variant styles
     */
    kind: {
      type: String,
      default: '',
      validator: (kind: string) => LINK_VARIANTS.includes(kind),
    },
  },

  data () {
    return {
      LINK_KIND_MODIFIERS,
    };
  },
});
</script>
