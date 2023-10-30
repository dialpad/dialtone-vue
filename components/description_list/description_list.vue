<!-- eslint-disable vue/require-v-for-key -->
<template>
  <dl :class="['dt-description-list', getDirectionClass, getGapClass]">
    <template
      v-for="item in items"
    >
      <dt
        :class="['dt-description-list__term', termClass]"
      >
        {{ item.term }}
      </dt>
      <dd
        :class="['dt-description-list__description', descriptionClass]"
      >
        {{ item.description }}
      </dd>
    </template>
  </dl>
</template>

<script>
import { DT_STACK_GAP } from '../stack/stack_constants';
import { DT_DESCRIPTION_LIST_DIRECTION } from './description_list_constants';
import { itemsValidator } from './description_list_validators';

export default {
  name: 'DtDescriptionList',

  props: {
    /**
     * The direction for the list
     * @values row, column
     */
    direction: {
      type: String,
      default: 'row',
      validator: direction => DT_DESCRIPTION_LIST_DIRECTION.includes(direction),
    },

    /**
     * A list of items that represent the term and the description
     */
    items: {
      type: Array,
      default: () => [],
      validator: items => itemsValidator(items),
      required: true,
    },

    /**
     * Set the space between the elements
     * @values 0, 100, 200, 300, 400, 500, 600
     */
    gap: {
      type: String,
      default: '400',
      validator: (gap) => DT_STACK_GAP.includes(gap),
    },

    /**
     * Used to customize the term element
     */
    termClass: {
      type: [String, Array, Object],
      default: '',
    },

    /**
     * Used to customize the description element
     */
    descriptionClass: {
      type: [String, Array, Object],
      default: '',
    },
  },

  computed: {
    getDirectionClass () {
      return `dt-description-list--${this.direction}`;
    },

    getGapClass () {
      return DT_STACK_GAP.includes(this.gap) ? `dt-description-list--gap-${this.gap}` : null;
    },
  },
};
</script>

<style lang="less">
.dt-description-list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--dt-space-400);
  flex-direction: row;
  line-height: var(--lh2);
  font-size: var(--dt-font-size-100);
  &--column {
    flex-direction: column;
  }
  &__term {
    color: var(--dt-color-foreground-tertiary);
    flex: 0 1 40%;
  }
  &__description {
    color: var(--dt-color-foreground-primary);
    flex: 1 1 50%;
    margin-left: 0;
  }
}
each(range(0, 600, 100), {
  .dt-description-list--gap-@{value} {
    gap: ~"var(--dt-space-@{value})";
  }
});
</style>
