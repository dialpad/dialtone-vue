<template>
  <div class="d-d-flex d-ai-center">
    <label
      v-if="$slots.default"
      :class="labelClass"
      :for="id"
      v-bind="labelChildProps"
      data-qa="toggle-label"
    >
      <!-- @slot Slot for the main content -->
      <slot />
    </label>
    <button
      :id="id"
      :role="toggleRole"
      type="button"
      :aria-checked="toggleAriaChecked"
      :disabled="disabled"
      :aria-disabled="disabled.toString()"
      :class="toggleClasses"
      v-bind="$attrs"
      v-on="inputListeners"
    >
      <span
        v-if="showIcon"
        class="d-toggle__inner"
      />
    </button>
  </div>
</template>

<script>
import Vue from 'vue';
import utils from '@/common/utils';
import { TOGGLE_CHECKED_VALUES, TOGGLE_SIZE_MODIFIERS } from '@/components/toggle/toggle_constants';

/**
 * A toggle (or "switch") is a button control element that allows the user to make a binary (on/off) selection.
 * @see https://dialpad.design/components/toggle.html
 */
export default {

  name: 'DtToggle',

  inheritAttrs: false,

  model: {
    prop: 'checked',
    event: 'change',
  },

  props: {

    /**
     * The id of the toggle
     */
    id: {
      type: String,
      default () { return utils.getUniqueString(); },
    },

    /**
     * Disables the toggle interactions
     * @values true, false
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * Value of the toggle
     * @model checked
     * @values true, false, 'mixed'
     */
    checked: {
      type: [Boolean, String],
      default: false,
      validator: (v) => TOGGLE_CHECKED_VALUES.includes(v),
    },

    /**
     * Applies indeterminate state
     * @values true, false
     */
    indeterminate: {
      type: Boolean,
      default: null,
    },

    /**
     * The size of the toggle.
     * @values sm, md
     */
    size: {
      type: String,
      default: 'md',
      validator: (s) => Object.keys(TOGGLE_SIZE_MODIFIERS).includes(s),
    },

    /**
     * Shows the icon
     * @values true, false
     */
    showIcon: {
      type: Boolean,
      default: true,
    },

    /**
     * Used to customize the label container
     */
    labelClass: {
      type: [String, Array, Object],
      default: '',
    },

    /**
     * A set of props that are passed into the label container
     */
    labelChildProps: {
      type: Object,
      default: () => ({}),
    },
  },

  emits: [
    /**
     * Toggle change event
     *
     * @event change
     * @type {Boolean}
     * @model change
     */
    'change',
  ],

  data () {
    return {
      internalChecked: this.checked,
      internalIndeterminate: this.indeterminate,
    };
  },

  computed: {
    inputListeners () {
      return {
        ...this.$listeners,
        click: _ => this.toggleCheckedValue(),
      };
    },

    toggleRole () {
      return this.internalIndeterminate ? 'checkbox' : 'switch';
    },

    toggleAriaChecked () {
      return this.internalIndeterminate ? 'mixed' : this.internalChecked.toString();
    },

    toggleClasses () {
      return [
        'd-toggle',
        TOGGLE_SIZE_MODIFIERS[this.size],
        {
          'd-toggle--checked': this.internalChecked,
          'd-toggle--disabled': this.disabled,
          'd-toggle--indeterminate': this.internalIndeterminate,
        },
      ];
    },
  },

  watch: {
    checked: {
      immediate: true,
      handler (newChecked) {
        if (newChecked === 'mixed') {
          this.internalChecked = null;
          this.internalIndeterminate = true;
        } else {
          this.internalChecked = newChecked;
          this.internalIndeterminate = null;
        }
      },
    },

    indeterminate (newValue) {
      this.internalIndeterminate = newValue;
      if (newValue) {
        this.internalChecked = false;
      }
    },
  },

  mounted () {
    this.runValidations();
  },

  methods: {
    toggleCheckedValue () {
      this.internalChecked = !this.internalChecked;
      this.internalIndeterminate = false;
      this.$emit('change', this.internalChecked);
    },

    hasSlotLabel () {
      return !!(this.$slots.default);
    },

    runValidations () {
      this.validateInputLabels(this.hasSlotLabel(), this.$attrs['aria-label']);
    },

    validateInputLabels (hasLabel, ariaLabel) {
      if (!hasLabel && !ariaLabel) {
        Vue.util.warn(
          'You must provide an aria-label when there is no label passed',
          this,
        );
      }
    },
  },
};
</script>
