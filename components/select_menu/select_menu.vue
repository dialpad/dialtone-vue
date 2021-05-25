<template>
  <div>
    <label>
      <div
        :aria-details="labelAriaDetails"
        :class="labelClasses"
        data-qa="dt-select-label"
      >
        <!-- @slot slot for label, defaults to label prop -->
        <slot name="label">{{ label }}</slot>
      </div>
      <div
        v-if="$slots.description || description"
        :id="descriptionKey"
        :class="descriptionClasses"
        data-qa="dt-select-description"
      >
        <!-- @slot slot for description, defaults to description prop -->
        <slot name="description">{{ description }}</slot>
      </div>
      <div :class="selectClasses">
        <select
          :class="selectInputClasses"
          v-bind="$attrs"
          v-on="selectListeners"
          data-qa="dt-select"
        >
          <!-- @slot Select menu options -->
          <slot>
            <option
              v-for="option in options"
              :key="getOptionKey(option.value)"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </slot>
        </select>
      </div>
    </label>
    <dt-validation-messages
      :validation-messages="formattedMessages"
      :show-messages="showMessages"
      :class="messagesClass"
      v-bind="messagesChildProps"
      data-qa="dt-select-messages"
    />
  </div>
</template>

<script>
import {
  LABEL_SIZE_MODIFIERS,
  DESCRIPTION_SIZE_MODIFIERS,
} from '../constants';
import {
  SELECT_SIZE_MODIFIERS,
  SELECT_STATE_MODIFIERS,
} from './select_menu_constants.js';
import {
  getUniqueString,
  getValidationState,
} from '../utils';
import { MessagesMixin } from '../mixins/input.js';
import { optionsValidator } from './select_menu_validators.js';
import { DtValidationMessages } from '../validation_messages';

export default {
  name: 'DtSelectMenu',

  components: { DtValidationMessages },

  mixins: [MessagesMixin],

  inheritAttrs: false,

  props: {
    /**
     * Label for the select
     */
    label: {
      type: String,
      default: '',
    },

    /**
     * Description for the select
     */
    description: {
      type: String,
      default: '',
    },

    /**
     * Select Menu Options, overridden by default slot
     */
    options: {
      type: Array,
      default: () => [],
      validator: options => optionsValidator(options),
    },

    /**
     * The size of the button.
     * @values xs, s, md, lg, xl
     * @see https://dialpad.design/components/select
     */
    size: {
      type: String,
      default: 'md',
      validator: (s) => Object.keys(SELECT_SIZE_MODIFIERS).includes(s),
    },
  },

  computed: {
    selectListeners () {
      return {
        /* TODO
            Check if any usages of this component leverage $listeners and either remove if unused or scope the removal
            and migration prior to upgrading to Vue 3.x
        */
        // eslint-disable-next-line vue/no-deprecated-dollar-listeners-api
        ...this.$listeners,
        /*
         * Override input listener to as no-op. Prevents parent input listeners from being passed through onto the input
         * element which will result in the hander being called twice (once on the select element and once by the
         * emitted input event by the change listener).
        */
        input: () => {},
        change: event => this.emitValue(event.target.value),
      };
    },

    state () {
      return getValidationState(this.formattedMessages);
    },

    selectClasses () {
      return [
        'd-select',
        SELECT_SIZE_MODIFIERS[this.size],
      ];
    },

    selectInputClasses () {
      return [
        'd-select__input',
        SELECT_STATE_MODIFIERS[this.state],
      ];
    },

    labelClasses () {
      return [
        'd-label',
        LABEL_SIZE_MODIFIERS[this.size],
      ];
    },

    descriptionClasses () {
      return [
        'd-description',
        DESCRIPTION_SIZE_MODIFIERS[this.size],
      ];
    },

    selectKey () {
      return getUniqueString();
    },

    descriptionKey () {
      return `select-${this.selectKey}-description`;
    },

    labelAriaDetails () {
      if (this.$slots.description || this.description) {
        return this.descriptionKey;
      }

      return undefined;
    },
  },

  methods: {
    emitValue (value) {
      this.$emit('input', value);
      this.$emit('change', value);
    },

    getOptionKey (value) {
      return `select-${this.selectKey}-option-${value}`;
    },
  },
};
</script>

<style lang="less">
</style>
