<template>
  <span
    :class="badgeClass"
    data-qa="dt-badge"
  >
    <!-- @slot Allows you to override the "text" prop. -->
    <slot>
      {{ text }}
    </slot>
  </span>
</template>

<script>
import { BADGE_COLOR_MODIFIERS } from './badge_constants.js';

export default {
  name: 'DtBadge',

  props: {
    /**
     * Text for the badge content
     */
    text: {
      type: String,
      default: '',
    },

    /**
     * Color for the badge background
     */
    color: {
      type: String,
      default: 'default',
      validator: (color) => Object.keys(BADGE_COLOR_MODIFIERS).includes(color),
    },
  },

  computed: {
    badgeClass () {
      return ['d-badge', BADGE_COLOR_MODIFIERS[this.color]];
    },
  },
};
</script>
