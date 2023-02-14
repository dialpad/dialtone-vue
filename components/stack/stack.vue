<template>
  <component
    :is="stackElement"
    :class="[
      'd-stack',
      stackResponsive(),
      defaultDir(),
      stackGap,
    ]"
  >
    <!-- @slot Slot for main content -->
    <slot />
  </component>
</template>

<script>
import { DT_STACK_DIR, DT_STACK_GAP, DT_STACK_RESPONSIVE_BREAKPOINTS } from './stack_constants';

export default {
  name: 'DtStack',

  props: {
    /**
     * Set this prop to the direction to stack the items.
     * You can override the default direction with 'default' key.
     * All the undefined breakpoints will have 'default' value
     */
    dir: {
      type: [String, Object],
      default: 'column',
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
    },
  },

  data () {
    return {
      DT_STACK_DIR,
      DT_STACK_GAP,
      DT_STACK_RESPONSIVE_BREAKPOINTS,
    };
  },

  computed: {
    stackDir () {
      return this.dir;
    },

    stackGap () {
      return DT_STACK_GAP[this.gap] ? `d-stack--gap-${this.gap}` : null;
    },

    stackElement () {
      return this.as ? this.as : 'div';
    },
  },

  methods: {
    defaultDir () {
      if (DT_STACK_DIR[this.stackDir]) {
        /** String dir resolution */
        return DT_STACK_DIR[this.stackDir] !== 'column' ? `d-stack--${DT_STACK_DIR[this.stackDir]}` : null;
      } else {
        /** Object dir resolution */
        const { default: defaultStyle } = this.stackDir;

        return defaultStyle !== 'column' ? `d-stack--${DT_STACK_DIR[defaultStyle]}` : null;
      }
    },

    stackResponsive () {
      return [
        ...DT_STACK_RESPONSIVE_BREAKPOINTS.map((breakpoint) => {
          return this.stackDir[breakpoint] ? `d-stack--${breakpoint}--${this.stackDir[breakpoint]}` : null;
        })];
    },
  },

};
</script>

<style lang="less">
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
  }

  &--lg{
    @media screen and (max-width: 980px) {
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
  }

  &--md{
    @media screen and (max-width: 640px) {
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
  }

  &--sm{
    @media screen and (max-width: 480px) {
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
  }

  &--gap-100 { --stack-gap: var(--space-100); }
  &--gap-200 { --stack-gap: var(--space-200); }
  &--gap-300 { --stack-gap: var(--space-300); }
  &--gap-400 { --stack-gap: var(--space-400); }
  &--gap-500 { --stack-gap: var(--space-500); }
  &--gap-600 { --stack-gap: var(--space-500); }
}
</style>
