<template>
  <dt-input
    ref="input"
    v-model="inputValue"
    :value="value"
    :type="type"
    :messages="messages"
    :size="size"
    :label="label"
    :messages-child-props="messagesChildProps"
    :name="name"
    :disabled="disabled"
    :show-messages="showMessages"
    :messages-class="messagesClass"
    :placeholder="placeholder"
    :input-class="inputClass"
    :max-length="maxLength"
    :current-length="currentLength ? currentLength : lengthCounter"
    :warn-length-threshold="warnLengthThreshold"
    :length-description="lengthDescription"
    :length-validation-message="lengthValidationMessage ? lengthValidationMessage : validationMessage"
    @blur="onBlur"
    @input="onInput"
    @clear="onClear"
    @focusin="onFocusIn"
    @focusout="onFocusOut"
  >
    <template
      v-if="labelSlot"
      #labelSlot
    >
      <span v-html="labelSlot" />
    </template>
    <template
      v-if="description"
      #description
    >
      <span v-html="description" />
    </template>
    <template
      v-if="leftIcon"
      #leftIcon
    >
      <component :is="leftIcon" />
    </template>
    <template
      v-if="rightIcon"
      #rightIcon
    >
      <component :is="rightIcon" />
    </template>
  </dt-input>
</template>

<script>
import DtInput from './input';
import icon from '@/common/mixins/icon';

export default {
  name: 'InputDefault',

  components: { DtInput },

  mixins: [icon],

  data () {
    return {
      inputValue: '',
    };
  },

  computed: {
    lengthCounter () {
      return this.inputValue.length;
    },

    validationMessage () {
      return `${(this.maxLength - this.lengthCounter)} characters left`;
    },
  },
};
</script>
