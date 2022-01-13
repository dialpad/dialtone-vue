<template>
  <div class="d-d-flex d-ai-center">
    <div
      v-if="hasLabel"
      :class="labelClass"
      v-bind="labelChildProps"
      data-qa="d-toggle-label"
    >
      <!-- @slot slot for Toggle Label -->
      <slot>{{ label }}</slot>
    </div>
    <button
      role="switch"
      type="button"
      data-qa="d-toggle-button"
      :aria-checked="internalChecked"
      :disabled="internalDisabled"
      :aria-disabled="internalDisabled"
      :class="['d-toggle', {
        'd-toggle--checked': internalChecked,
        'd-toggle--disabled': internalDisabled,
      }]"
      v-bind="$attrs"
      v-on="inputListeners"
    >
      <span class="d-toggle__inner">
        <icon-close
          v-if="!internalChecked"
        />
        <icon-check-mark
          v-if="internalChecked"
        />
      </span>
    </button>
  </div>
</template>

<script>
import {
  InputMixin,
  CheckableMixin,
} from '../mixins/input.js';
import IconClose from '@dialpad/dialtone/lib/dist/vue/icons/IconClose';
import IconCheckMark from '@dialpad/dialtone/lib/dist/vue/icons/IconCheckmark';

export default {

  name: 'DtToggle',

  components: {
    IconClose,
    IconCheckMark,
  },

  mixins: [InputMixin, CheckableMixin],

  inheritAttrs: false,

  emits: ['click'],

  computed: {

    hasLabel () {
      return !!(this.$slots.default || this.label);
    },

    inputListeners () {
      return {
        // eslint-disable-next-line vue/no-deprecated-dollar-listeners-api
        ...this.$listeners,
        /*
         * Override input listener to as no-op. Prevents parent input listeners from being passed through onto the input
         * element which will result in the hander being called twice (once on the input element and once by the emitted
         * input event by the change listener).
        */
        click: event => this.updateToggleValue(event.target),
      };
    },
  },

  mounted () {
    this.runValidations();
  },

  methods: {
    updateToggleValue () {
      this.internalChecked = !this.internalChecked;
      this.$emit('click', this.internalChecked);
    },

    runValidations () {
      this.validateInputLabels(this.hasLabel, this.$attrs['aria-label']);
    },
  },

};
</script>

<style lang="less">
@transition-speed: var(--td200);
@easing-function: var(--ttf-in-out);

.d-toggle {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 48px;
  height: 24px;
  line-height: 20px;
  padding: 0;
  vertical-align: middle;
  border-radius: 25px 25px;
  border: 1px solid var(--black-200);
  background-color: var(--black-200);
  cursor: pointer;
  transition: all @transition-speed @easing-function;

  &__inner {
    color: var(--white);
    font-size: 12px;
    position: absolute;
    left: 23px;
    top: 2px;
  }

  &:after {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 1px;
    top: 1px;
    border-radius: 50% 50%;
    background-color: var(--white);
    content: " ";
    cursor: pointer;
    transform: scale(1);
    transition: left @transition-speed @easing-function;
    animation-timing-function: @easing-function;
    animation-duration: @transition-speed;
    animation-name: revertToNormalScale;
  }

  &:hover:after {
    transform: scale(1.1);
    animation-name: slowMagnify;
  }

  &:focus {
    box-shadow: var(--bs-focus-ring);
    outline: none;
  }

  &--checked {
    border: 1px solid var(--primary-color);
    background-color: var(--primary-color);

    .d-toggle__inner {
      left: 4px;
    }

    &:after{
      left: 25px;
    }
  }

  &--disabled {
    cursor: no-drop;
    opacity: 0.5;

    &:after{
      animation-name: none;
      cursor: no-drop;
    }

    &:hover:after{
      transform: scale(1);
      animation-name: none;
    }
  }
}

@keyframes slowMagnify {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1.1);
  }
}

@keyframes revertToNormalScale {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
