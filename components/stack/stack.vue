<template>
  <component
    :is="as"
    :class="[
      stackClasses(),
    ]"
    :style="stackGap"
  >
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
     * Set this prop to render a specific HTML element.
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
    spacing () {
      return this.gap;
    },

    stackGap () {
      return { '--stack-gap': DT_STACK_GAP[this.spacing] };
    },

    stackDir () {
      return this.dir;
    },
  },

  methods: {
    stackClasses () {
      if (DT_STACK_DIR[this.stackDir]) { return `dt-stack--${DT_STACK_DIR[this.stackDir]}`; }

      const { default: defaultStyle } = this.stackDir;

      return ['dt-stack', `dt-stack--${defaultStyle || 'column'}`,
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
    & > :not(style) ~ :not(style) {
      margin-top: var(--stack-gap);
      margin-inline: 0;
      margin-bottom: 0;
    }
  }

  &--column-reverse {
    flex-direction: column-reverse;
    & > :not(style) ~ :not(style) {
      margin-top: 0;
      margin-inline: 0;
      margin-bottom: var(--stack-gap);
    }
  }

  &--row {
    flex-direction: row;
    & > :not(style) ~ :not(style) {
      margin-top: 0;
      margin-inline: var(--stack-gap) 0;
      margin-bottom: 0;
    }
  }

  &--row-reverse {
    flex-direction: row-reverse;
    & > :not(style) ~ :not(style) {
      margin-top: 0;
      margin-inline: 0 var(--stack-gap);
      margin-bottom: 0;
    }
  }

  &--xl{
    @media screen and (max-width: 1264px) {
      &--column {
        flex-direction: column;
        & > :not(style) ~ :not(style) {
          margin-top: var(--stack-gap);
          margin-inline: 0;
          margin-bottom: 0;
        }
      }

      &--column-reverse {
        flex-direction: column-reverse;
        & > :not(style) ~ :not(style) {
          margin-top: 0;
          margin-inline: 0;
          margin-bottom: var(--stack-gap);
        }
      }

      &--row {
        flex-direction: row;
        & > :not(style) ~ :not(style) {
          margin-top: 0;
          margin-inline: var(--stack-gap) 0;
          margin-bottom: 0;
        }
      }

      &--row-reverse {
        flex-direction: row-reverse;
        & > :not(style) ~ :not(style) {
          margin-top: 0;
          margin-inline: 0 var(--stack-gap);
          margin-bottom: 0;
        }
      }
    }
  }

  &--lg{
    @media screen and (max-width: 980px) {
      &--column {
        flex-direction: column;
        & > :not(style) ~ :not(style) {
          margin-top: var(--stack-gap);
          margin-inline: 0;
          margin-bottom: 0;
        }
      }

      &--column-reverse {
        flex-direction: column-reverse;
        & > :not(style) ~ :not(style) {
          margin-top: 0;
          margin-inline: 0;
          margin-bottom: var(--stack-gap);
        }
      }

      &--row {
        flex-direction: row;
        & > :not(style) ~ :not(style) {
          margin-top: 0;
          margin-inline: var(--stack-gap) 0;
          margin-bottom: 0;
        }
      }

      &--row-reverse {
        flex-direction: row-reverse;
        & > :not(style) ~ :not(style) {
          margin-top: 0;
          margin-inline: 0 var(--stack-gap);
          margin-bottom: 0;
        }
      }
    }
  }

  &--md{
    @media screen and (max-width: 640px) {
      &--column {
        flex-direction: column;
        & > :not(style) ~ :not(style) {
          margin-top: var(--stack-gap);
          margin-inline: 0;
          margin-bottom: 0;
        }
      }

      &--column-reverse {
        flex-direction: column-reverse;
        & > :not(style) ~ :not(style) {
          margin-top: 0;
          margin-inline: 0;
          margin-bottom: var(--stack-gap);
        }
      }

      &--row {
        flex-direction: row;
        & > :not(style) ~ :not(style) {
          margin-top: 0;
          margin-inline: var(--stack-gap) 0;
          margin-bottom: 0;
        }
      }

      &--row-reverse {
        flex-direction: row-reverse;
        & > :not(style) ~ :not(style) {
          margin-top: 0;
          margin-inline: 0 var(--stack-gap);
          margin-bottom: 0;
        }
      }
    }
  }

  &--sm{
    @media screen and (max-width: 480px) {
      &--column {
        flex-direction: column;
        & > :not(style) ~ :not(style) {
          margin-top: var(--stack-gap);
          margin-inline: 0;
          margin-bottom: 0;
        }
      }

      &--column-reverse {
        flex-direction: column-reverse;
        & > :not(style) ~ :not(style) {
          margin-top: 0;
          margin-inline: 0;
          margin-bottom: var(--stack-gap);
        }
      }

      &--row {
        flex-direction: row;
        & > :not(style) ~ :not(style) {
          margin-top: 0;
          margin-inline: var(--stack-gap) 0;
          margin-bottom: 0;
        }
      }

      &--row-reverse {
        flex-direction: row-reverse;
        & > :not(style) ~ :not(style) {
          margin-top: 0;
          margin-inline: 0 var(--stack-gap);
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
