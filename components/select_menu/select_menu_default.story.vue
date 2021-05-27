<template>
  <dt-select-menu
    :label="label"
    :options="options"
    :size="size"
    :description="description"
    :show-messages="showMessages"
    :messages="messages"
    :messages-class="messagesClass"
    :messages-child-props="messagesChildProps"
    :name="name"
    :value="value"
    :disabled="disabled"
    @input="onInput"
    @change="onChange"
  >
    <template
      #label
      v-if="labelSlot"
    >
      <span v-html="labelSlot" />
    </template>
    <template
      #description
      v-if="descriptionSlot"
    >
      <span v-html="descriptionSlot" />
    </template>
    <div v-if="defaultSlot" v-html="defaultSlot" />
  </dt-select-menu>
</template>

<script>
import DtSelectMenu from './select_menu';

export default {
  name: 'DtSelectMenuDefault',
  components: { DtSelectMenu },
};
</script>
