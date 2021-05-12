<template>
  <hs-input
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
    :show-clear-button="showClearButton"
    @input="onInput"
    @clear="onClear"
  >
    <template
      v-if="label"
      #label
    >
      <span v-html="label" />
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
  </hs-input>
</template>

<script>
import HsInput from './input';
import icon from '../mixins/icon';

export default {
  name: 'InputDefault',
  components: { HsInput },
  mixins: [icon],
};
</script>
