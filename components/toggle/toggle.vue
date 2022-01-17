<template>
  <div class="d-d-flex d-ai-center">
    <div
      v-if="hasLabel"
      :class="labelClass"
      v-bind="labelChildProps"
      data-qa="d-toggle-label"
    >
      <slot>{{ label }}</slot>
    </div>
    <button
      role="switch"
      type="button"
      :aria-checked="internalChecked.toString()"
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
import Vue from 'vue';
import IconClose from '@dialpad/dialtone/lib/dist/vue/icons/IconClose';
import IconCheckMark from '@dialpad/dialtone/lib/dist/vue/icons/IconCheckmark';

export default {

  name: 'DtToggle',

  components: {
    IconClose,
    IconCheckMark,
  },

  inheritAttrs: false,

  props: {

    label: {
      type: String,
      default: '',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    checked: {
      type: Boolean,
      default: false,
    },

    labelClass: {
      type: [String, Array, Object],
      default: '',
    },

    labelChildProps: {
      type: Object,
      default: () => ({}),
    },
  },

  emits: ['change'],

  data () {
    return {
      internalDisabled: this.disabled,
      internalChecked: this.checked,
    };
  },

  computed: {

    hasLabel () {
      return !!(this.$slots.default || this.label);
    },

    inputListeners () {
      return {
        // eslint-disable-next-line vue/no-deprecated-dollar-listeners-api
        ...this.$listeners,
        click: _ => this.toggleCheckedValue(),
      };
    },
  },

  watch: {
    disabled (newDisabled) {
      this.internalDisabled = newDisabled;
    },

    checked (newChecked) {
      this.internalChecked = newChecked;
    },
  },

  mounted () {
    this.runValidations();
  },

  methods: {
    toggleCheckedValue () {
      this.internalChecked = !this.internalChecked;
      this.$emit('change', this.internalChecked);
    },

    runValidations () {
      this.validateInputLabels(this.hasLabel, this.$attrs['aria-label']);
    },

    validateInputLabels (hasLabelOrLabel, ariaLabel) {
      if (!hasLabelOrLabel && !ariaLabel) {
        Vue.util.warn(
          'You must provide an aria-label when there is no label passed',
          this,
        );
      }
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
    transition: left @transition-speed @easing-function, transform @transition-speed @easing-function;
  }

  &:focus {
    box-shadow: var(--bs-focus-ring);
    outline: none;
  }

  &:focus:not(:focus-visible) {
    outline: 0;
    box-shadow: none;
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
      transition-property: none;
      cursor: no-drop;
    }

    &:hover:after{
      transform: scale(1);
      transition-property: none;
    }
  }
}
</style>
