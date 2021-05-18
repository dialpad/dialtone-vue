<template>
  <!-- template -->
  <div
    :class="selectClasses"
    data-qa="dt-select"
  >
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
      <select
        :name="name"
        :class="selectInputClasses"
        data-qa="dt-select-input"
      >
        <!-- @slot Select menu options -->
        <slot />
      </select>
    </label>
    <dt-validation-messages
      :validation-messages="formattedMessages"
      :show-messages="showMessages"
      :class="messagesClass"
      v-bind="messagesChildProps"
      data-qa="dt-input-messages"
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
     * Name property of the select element (TODO: See if we can bind attrs instead and use a native prop)
     */
    name: {
      type: String,
      default: '',
    },

    /**
     * Disables the select  (TODO: See if we can bind attrs instead and use a native prop)
     */
    disabled: {
      type: Boolean,
      default: false,
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

  data () {
    return {};
  },

  computed: {
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

    descriptionKey () {
      return `select-description-${getUniqueString()}`;
    },

    labelAriaDetails () {
      if (this.$slots.description || this.description) {
        return this.descriptionKey;
      }

      return undefined;
    },
  },

  watch: {},

  methods: {},
};
</script>

<style lang="less">

</style>
