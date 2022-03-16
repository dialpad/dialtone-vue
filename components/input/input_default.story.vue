<template>
  <dt-input
    :value="$attrs.value"
    :type="$attrs.type"
    :messages="$attrs.messages"
    :size="$attrs.size"
    :label="$attrs.label"
    :messages-child-props="$attrs.messagesChildProps"
    :name="$attrs.name"
    :disabled="$attrs.disabled"
    :show-messages="$attrs.showMessages"
    :messages-class="$attrs.messagesClass"
    :placeholder="$attrs.placeholder"
    :input-class="$attrs.inputClass"
    @blur="$attrs.onBlur"
    @input="$attrs.onInput"
    @clear="$attrs.onClear"
    @focusin="$attrs.onFocusIn"
    @focusout="$attrs.onFocusOut"
    @focus="$attrs.onFocus"
  >
    <template
      v-if="$attrs.labelSlot"
      #labelSlot
    >
      <span v-html="$attrs.labelSlot" />
    </template>
    <template
      v-if="$attrs.description"
      #description
    >
      <span v-html="$attrs.description" />
    </template>
    <template
      v-if="$attrs.leftIcon"
      #leftIcon
    >
      <component :is="$attrs.leftIcon" />
    </template>
    <template
      v-if="$attrs.rightIcon"
      #rightIcon
    >
      <component :is="$attrs.rightIcon" />
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
};
</script>
