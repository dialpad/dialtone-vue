<template>
  <dt-tooltip
    :id="id"
    :offset="[0, -12]"
  >
    <template #anchor>
      <dt-button
        :importance="circle ? 'outlined' : 'clear'"
        kind="muted"
        icon-position="top"
        :disabled="disabled"
        :aria-label="ariaLabel"
        label-class="d-fs11"
        :class="callbarButtonClass"
        v-on="$listeners"
      >
        <slot />
        <slot
          slot="icon"
          name="icon"
        />
      </dt-button>
    </template>
    <slot name="tooltip" />
  </dt-tooltip>
</template>

<script>
import DtButton from '@/components/button/button';
import DtTooltip from '@/components/tooltip/tooltip';
import utils from '@/common/utils';

export default {
  name: 'DtRecipeCallbarButton',

  components: { DtButton, DtTooltip },

  inheritAttrs: true,

  props: {
    /**
     * Id for the item.
     */
    id: {
      type: String,
      default () {
        return utils.getUniqueString();
      },
    },

    active: {
      type: Boolean,
      default: false,
    },

    danger: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    circle: {
      type: Boolean,
      default: false,
    },

    ariaLabel: {
      type: String,
      default: null,
      validator: (label) => {
        return label || this.$slots.default;
      },
    },
  },

  emits: ['click'],

  computed: {
    callbarButtonClass () {
      return [
        'dt-recipe-callbar-button',
        'd-stack4',
        {
          'dt-recipe-callbar-button--circle': this.circle,
          'dt-recipe-callbar-button--active': this.active,
          'dt-recipe-callbar-button--danger': this.danger,
        }];
    },
  },
};
</script>

<style lang="less">
.dt-recipe-callbar-button:not(.dt-recipe-callbar-button--circle) {
  width: 8rem;
  height: 6.2rem;
  letter-spacing: -0.011rem;
  line-height: 1.6rem;
}

.dt-recipe-callbar-button--circle {
  border-radius: var(--br-circle);
}

.dt-recipe-callbar-button.d-btn .d-btn__icon .d-svg {
  width: 2.4rem;
  height: 2.4rem;
}

.dt-recipe-callbar-button.d-btn[disabled] {
  background-color: unset;
}

.dt-recipe-callbar-button--circle.d-btn[disabled] {
  border-color: unset;
}

.dt-recipe-callbar-button--active {
  --button--fc: var(--muted-color-hover);
  --button--bgc: hsla(var(--muted-color-hsl) ~' / ' 15%);
}

.dt-recipe-callbar-button--danger.dt-recipe-callbar-button--active {
  --button--bgc: hsla(var(--error-color-hsl) ~' / ' 10%);
  --button--fc: var(--error-color-hover);
}

.dt-recipe-callbar-button--danger.dt-recipe-callbar-button--active:hover {
  --button--bgc: hsla(var(--error-color-hsl)  ~' / ' 20%);
  --button--fc: var(--error-color-hover);
}
</style>
