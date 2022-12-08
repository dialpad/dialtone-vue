<template>
  <span
    :class="[
      'd-badge',
      'd-box-border',
      BADGE_TYPE_MODIFIERS[type],
      BADGE_KIND_MODIFIERS[kind],
    ]"
    data-qa="dt-badge"
  >
    <span
      v-if="$slots.iconLeft || type === 'ai'"
      class="d-badge__icon-left"
    >
      <!-- @slot Slot for an icon to the left of the badge, insert a dt-icon -->
      <slot name="iconLeft">
        <dt-icon
          name="dialpad-ai"
          size="200"
        />
      </slot>
    </span>
    <span class="d-badge__label">
      <!-- @slot Slot for badge content, defaults to text prop -->
      <slot>
        {{ text }}
      </slot>
    </span>
    <span
      v-if="$slots.iconRight"
      class="d-badge__icon-right"
    >
      <!-- @slot Slot for an icon to the right of the badge, insert a dt-icon -->
      <slot name="iconRight" />
    </span>
  </span>
</template>

<script>
import { BADGE_TYPE_MODIFIERS, BADGE_KIND_MODIFIERS } from './badge_constants.js';
import { DtIcon } from '@/components/icon';

/**
 * A badge is a compact UI element that provides brief, descriptive information about an element.
 * It is terse, ideally one word.
 * @see https://dialpad.design/components/badge.html
 */
export default {
  name: 'DtBadge',

  components: {
    DtIcon,
  },

  props: {
    /**
     * Text for the badge content
     */
    text: {
      type: String,
      default: '',
    },

    /**
     * The kind of badge which determines the styling
     * @values label, count
     */
    kind: {
      type: String,
      default: 'label',
      validator: (kind) => Object.keys(BADGE_KIND_MODIFIERS).includes(kind),
    },

    /**
     * Color for the badge background
     * @values default, info, success, warning, critical, bulletin, ai
     */
    type: {
      type: String,
      default: 'default',
      validator: (type) => Object.keys(BADGE_TYPE_MODIFIERS).includes(type),
    },
  },

  data () {
    return {
      BADGE_TYPE_MODIFIERS,
      BADGE_KIND_MODIFIERS,
    };
  },

  watch: {
    $props: {
      immediate: true,
      deep: true,
      handler () {
        this.validateProps();
      },
    },
  },

  methods: {
    validateProps () {
      if (this.type === 'ai' && this.kind === 'count') {
        console.error('type: ai and kind: count is an invalid combination.');
      }
    },
  },
};
</script>
