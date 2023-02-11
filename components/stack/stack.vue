<template>
  <component
    :is="as"
    :class="[
      'dt-stack',
      DT_STACK_GAP[gap],
      stackStyle(),
    ]"
  >
    {{ dir }}
    {{ as }}
    {{ gap }}
    <slot />
    {{ stackDir }}
  </component>
</template>

<script>
import { DT_STACK_DIR, DT_STACK_GAP, DT_STACK_RESPONSIVE_BREAKPOINTS } from './stack_constants';

export default {
  name: 'DtStack',

  props: {
    /**
     * Set this prop to have the direction of stack.
     * You can override the default direction with 'default' key.
     * All the undefined breakpoints will have 'default' value
     */
    dir: {
      type: [String, Object],
      default: 'column',
    },

    /**
     * Set this prop to have the skeleton render as multiple lines of text.
     * Set only one option prop at a time.
     */
    as: {
      type: String,
      default: 'div',
    },

    /**
     * Set this prop to have the skeleton render as multiple lines of text.
     * Set only one option prop at a time.
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
  },

  methods: {
    stackStyle () {
      if (DT_STACK_DIR[this.stackDir]) { return `dt-stack--${DT_STACK_DIR[this.stackDir]}`; }

      const { default: defaultStyle } = this.stackDir;

      return [`dt-stack--${defaultStyle || 'column'}`,
        ...DT_STACK_RESPONSIVE_BREAKPOINTS.map((breakpoint) => {
          return this.stackDir[breakpoint] ? `dt-stack--${breakpoint}--${this.stackDir[breakpoint]}` : null;
        })];
    },
  },

};
</script>

<style lang="less">
.dt-stack {
  display: flex;

  &--column {
    flex-direction: column;
  }

  &--column-reverse {
    flex-direction: column-reverse;
  }

  &--row {
    flex-direction: row;
  }

  &--row-reverse {
    flex-direction: row-reverse;
  }

  &--xl{
    @media screen and (max-width: 1264px) {
      &--column {
        flex-direction: column;
      }
      &--row {
        flex-direction: row;
      }
      &--column-reverse {
        flex-direction: column-reverse;
      }
      &--row-reverse {
        flex-direction: row-reverse;
      }
    }
  }

  &--lg{
    @media screen and (max-width: 980px) {
      &--column {
        flex-direction: column;
      }
      &--row {
        flex-direction: row;
      }
      &--column-reverse {
        flex-direction: column-reverse;
      }
      &--row-reverse {
        flex-direction: row-reverse;
      }
    }
  }

  &--md{
    @media screen and (max-width: 640px) {
      &--column {
        flex-direction: column;
      }
      &--row {
        flex-direction: row;
      }
      &--column-reverse {
        flex-direction: column-reverse;
      }
      &--row-reverse {
        flex-direction: row-reverse;
      }
    }
  }

  &--sm{
    @media screen and (max-width: 480px) {
      &--column {
        flex-direction: column;
      }
      &--row {
        flex-direction: row;
      }
      &--column-reverse {
        flex-direction: column-reverse;
      }
      &--row-reverse {
        flex-direction: row-reverse;
      }
    }
  }

  &--100 {
    gap: 0.1rem;
  }
  &--200 {
    gap: 0.2rem;
  }
  &--300 {
    gap: 0.4rem;
  }
  &--400 {
    gap: 0.8rem;
  }
  &--500 {
    gap: 1.6rem;
  }
  &--600 {
    gap: 3.2rem;
  }
}
</style>
