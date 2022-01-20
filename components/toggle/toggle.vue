<template>
  <div class="d-d-flex d-ai-center">
    <label
      v-if="hasLabel"
      :class="labelClass"
      :for="id"
      v-bind="labelChildProps"
      data-qa="toggle-label"
    >
      <slot>{{ label }}</slot>
    </label>
    <button
      :id="id"
      role="switch"
      type="button"
      :aria-checked="internalChecked.toString()"
      :disabled="disabled"
      :aria-disabled="disabled.toString()"
      :class="['d-toggle', {
        'd-toggle--checked': internalChecked,
        'd-toggle--disabled': disabled,
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
import utils from '../utils';

export default {

  name: 'DtToggle',

  components: {
    IconClose,
    IconCheckMark,
  },

  inheritAttrs: false,

  model: {
    prop: 'checked',
    event: 'change',
  },

  props: {

    id: {
      type: String,
      default () { return utils.getUniqueString(); },
    },

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

    validateInputLabels (hasLabelOrSlotLabel, ariaLabel) {
      if (!hasLabelOrSlotLabel && !ariaLabel) {
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
// TODO: remove all this to Dialtone
.d-toggle {
  //  Component specific CSS Vars
  //  ------------------------------------------------------------------------
  --toggle--ta: var(--ttf-in-out);
  --toggle-ts: var(--td200);
  --toggle-bc: var(--black-200);

  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 48px;
  height: 24px;
  line-height: 20px;
  padding: 0;
  vertical-align: middle;
  border-radius: 25px 25px;
  border: 1px solid var(--toggle-bc);
  background-color: var(--toggle-bc);
  cursor: pointer;

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
    transition: left var(--toggle-ts) var(--toggle--ta);
  }

  // TODO: to be removed in favour of .focus-visible
  &:focus:not(:focus-visible) {
    outline: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: var(--bs-focus-ring);
  }
}

.d-toggle--checked {
  --toggle-bc: var(--primary-color);

  .d-toggle__inner {
    left: 4px;
  }

  &:after{
    left: 25px;
  }
}

.d-toggle--disabled {
  cursor: no-drop;
  opacity: 0.5;

  &:after {
    transition-property: none;
    cursor: no-drop;
  }
}
</style>
