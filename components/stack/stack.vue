<template>
  <component
    :is="stackElement"
    :class="[
      'd-stack',
      defaultDirection,
      stackResponsive,
      stackGap,
    ]"
  >
    <!-- @slot Slot for main content -->
    <slot />
  </component>
</template>

<script>
import { DT_STACK_DIRECTION, DT_STACK_GAP, DT_STACK_RESPONSIVE_BREAKPOINTS } from './stack_constants';
import { directionValidator, gapValidator } from './validators';
import { getDefaultDirectionClass, getResponsiveClasses } from './utils';

export default {
  name: 'DtStack',

  props: {
    /**
     * Set this prop to the direction to stack the items.
     * You can override the default direction with 'default' key.
     * All the undefined breakpoints will have 'default' value
     */
    direction: {
      type: [String, Object],
      default: 'column',
      validator: (direction) => directionValidator(direction),
    },

    /**
     * Set this prop to render stack as a specific HTML element.
     */
    as: {
      type: String,
      default: 'div',
    },

    /**
     * Set this prop to have the space between each stack item
     */
    gap: {
      type: String,
      default: '0',
      validator: (gap) => gapValidator(gap),
    },
  },

  data () {
    return {
      DT_STACK_DIRECTION,
      DT_STACK_GAP,
      DT_STACK_RESPONSIVE_BREAKPOINTS,
    };
  },

  computed: {
    stackGap () {
      return `d-stack--gap-${this.gap}`;
    },

    stackElement () {
      return this.as ? this.as : 'div';
    },

    defaultDirection () {
      return getDefaultDirectionClass(this.direction);
    },

    stackResponsive () {
      return getResponsiveClasses(this.direction);
    },
  },
};
</script>

<style lang="less">
.direction-options() {
  &--column {
    --stack-direction: column;
  }
  &--column-reverse {
    --stack-direction: column-reverse;
  }
  &--row {
    --stack-direction: row;
  }
  &--row-reverse {
    --stack-direction: row-reverse;
  }
}

.d-stack {
  --stack-gap: 0;
  --stack-direction: column;

  display: flex;
  flex-direction: var(--stack-direction);
  gap: var(--stack-gap);

  &--column-reverse {
    --stack-direction: column-reverse;
  }

  &--row {
    --stack-direction: row;
  }

  &--row-reverse {
    --stack-direction: row-reverse;
  }

  &--xl{
    @media screen and (max-width: 1264px) {
      .direction-options();
    }
  }

  &--lg{
    @media screen and (max-width: 980px) {
      .direction-options();
    }
  }

  &--md{
    @media screen and (max-width: 640px) {
      .direction-options();
    }
  }

  &--sm{
    @media screen and (max-width: 480px) {
      .direction-options();
    }
  }

  &--gap-100 { --stack-gap: var(--space-100); }
  &--gap-200 { --stack-gap: var(--space-200); }
  &--gap-300 { --stack-gap: var(--space-300); }
  &--gap-400 { --stack-gap: var(--space-400); }
  &--gap-500 { --stack-gap: var(--space-500); }
  &--gap-600 { --stack-gap: var(--space-500); }
}
</style>
