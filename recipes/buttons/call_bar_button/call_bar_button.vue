<template>
  <dt-tooltip
    :offset="[0, -12]"
  >
    <template #anchor>
      <dt-button
        :importance="circle ? 'outlined' : 'clear'"
        kind="muted"
        iconPosition="top"
        :disabled="disabled"
        class="dt-recipe-call-bar-button d-stack4"
        label-class="d-fs11"
        :class="{
          'dt-recipe-call-bar-button--circle': circle,
          'dt-recipe-call-bar-button--active': active,
          'dt-recipe-call-bar-button--danger': danger,
        }"
      >
        <template v-if="$slots.label">
          <slot name="label" />
        </template>
        <template v-else-if="$slots.default">
          <slot />
        </template>
        <template #icon v-if="hasIcon">
          <slot name="icon" />
        </template>
      </dt-button>
    </template>
    <slot name="tooltip" />
    </dt-tooltip>
</template>

<script>
import {} from './call_bar_button_constants.js';
import { DtButton, DtTooltip } from '@';
import utils from '@/common/utils';

export default {
  name: 'DtRecipeCallBarButton',

  components: { DtButton, DtTooltip },

  /* inheritAttrs: false is generally an option we want to set on library
    components. This allows any attributes passed in that are not recognized
    as props to be passed down to another element or component using v-bind:$attrs
    more info: https://vuejs.org/v2/api/#inheritAttrs */
  inheritAttrs: false,

  data () {
    return {};
  },

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

    label: {
      type: String,
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
    }
  },

  computed: {
    // hasLabel () {
    //   return Boolean(this.$slots.default || this.$slots.label);
    // },

    hasIcon () {
      return Boolean(this.$slots.icon);
    },
  },

  watch: {},

  methods: {},
};
</script>

<style lang="less">
.dt-recipe-call-bar-button:not(.dt-recipe-call-bar-button--circle) {
  width: 8rem;
  height: 6.2rem;
  letter-spacing: -0.011rem;
  line-height: 1.6rem;
}

.dt-recipe-call-bar-button--circle {
  border-radius: var(--br-circle);
}

.dt-recipe-call-bar-button.d-btn .d-btn__icon .d-svg {
  width: 2.4rem;
  height: 2.4rem;
}

.dt-recipe-call-bar-button.d-btn[disabled] {
  background-color: unset;
}

.dt-recipe-call-bar-button--circle.d-btn[disabled] {
  border-color: unset;
}

.dt-recipe-call-bar-button--active {
  --button--fc: var(--muted-color-hover);
  --button--bgc: hsla(var(--muted-color-hsl) ~' / ' 15%);
}

.dt-recipe-call-bar-button--danger.dt-recipe-call-bar-button--active {
  --button--bgc: hsla(var(--error-color-hsl) ~' / ' 10%);
  --button--fc: var(--error-color-hover);
}

.dt-recipe-call-bar-button--danger.dt-recipe-call-bar-button--active:hover {
  --button--bgc: hsla(var(--error-color-hsl)  ~' / ' 20%);
  --button--fc: var(--error-color-hover);
}
</style>
