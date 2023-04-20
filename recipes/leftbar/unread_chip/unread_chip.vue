<template>
  <button
    :class="['dt-leftbar-unread-chip', `dt-leftbar-unread-chip__${kind}`]"
    data-qa="dt-leftbar-unread-chip"
    v-on="unreadChipListeners"
  >
    <dt-icon
      :name="`arrow-${direction}`"
      size="300"
    />
    <span data-qa="dt-leftbar-unread-chip__label">
      <slot />
    </span>
  </button>
</template>

<script>
import { DtIcon } from '@/components/icon';
import { UNREAD_CHIP_DIRECTIONS, UNREAD_CHIP_KINDS } from './unread_chip_constants';
export default {
  name: 'DtRecipeUnreadChip',

  components: {
    DtIcon,
  },

  props: {
    /**
     * The kind of unread chip which determines the styling
     * @values 'mentions', 'messages'
     **/
    kind: {
      type: String,
      required: true,
      validator: (kind) => UNREAD_CHIP_KINDS.includes(kind),
    },

    /**
     * The direction of the arrow icon
     * @values 'up', 'down'
     **/
    direction: {
      type: String,
      required: true,
      validator: (dir) => UNREAD_CHIP_DIRECTIONS.includes(dir),
    },
  },

  emits: [
    /**
     * Native click event
     *
     * @event click
     * @type {PointerEvent | KeyboardEvent}
     */
    'click',
  ],

  computed: {
    unreadChipListeners () {
      return {
        click: event => this.$emit('click', event),
      };
    },
  },
};
</script>

<style lang="less">
.dt-leftbar-unread-chip {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-200) var(--space-500) var(--space-200) var(--space-400);
  gap: var(--space-300);
  font-size: var(--fs-100);
  box-shadow: var(--bs-md);
  border-radius: var(--br-pill);
  border: none;
  height: 28px;
  cursor: pointer;

  &__mentions {
    font-weight: var(--fw-bold);
    background-color: var(--theme-mention-color-background);
    color: var(--theme-mention-color-foreground);
  }

  &__messages {
    background-color: var(--bgc-primary);
    color: var(--fc-primary);
  }
}
</style>
