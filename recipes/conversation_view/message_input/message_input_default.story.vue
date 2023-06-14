<template>
  <div class="d-h264">
    <dt-recipe-message-input
      :input-aria-label="$attrs.inputAriaLabel"
      :auto-focus="$attrs.autoFocus"
      :editable="$attrs.editable"
      :input-class="inputClass"
      :link="$attrs.link"
      :output-format="$attrs.outputFormat"
      :placeholder="$attrs.placeholder"
      :value="$attrs.value"
      :disable-send="$attrs.disableSend"
      :has-character-limit="$attrs.hasCharacterLimit"
      :character-limit-count="$attrs.characterLimitCount"
      :character-limit-warning="$attrs.characterLimitWarning"
      @submit="$attrs.onSubmit"
      @focus="$attrs.onFocus"
      @blur="$attrs.onBlur"
      @input="$attrs.onInput"
    >
      <template
        #footerLeft
      >
        <div class="message-input-recipe-subtitle d-fc-black-500">
          <b>Dwight</b> is typing...
        </div>
      </template>
      <template
        #footerRight
      >
        <div class="message-input-recipe-subtitle d-fc-black-500">
          <b>Shift</b> + <b>Return</b> to add a new line
        </div>
      </template>
    </dt-recipe-message-input>
  </div>
</template>

<script>
import DtRecipeMessageInput from './message_input.vue';

export default {
  name: 'DtRecipeMessageInputDefault',
  components: { DtRecipeMessageInput },
};
</script>

<style>
.message-input-recipe-subtitle {
  font-size: 1rem;
}
</style>
