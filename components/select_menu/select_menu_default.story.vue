<template>
  <dt-select-menu
    :name="name"
    :label="label"
    :options="options"
    :size="size"
    :description="description"
    :messages="messages"
    :messages-child-props="messagesChildProps"
    :disabled="disabled"
    :show-messages="showMessages"
    :messages-class="messagesClass"
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
    <template v-if="defaultSlot">
      <div v-html="defaultSlot" />
    </template>
  </dt-select-menu>
</template>

<script>
import DtSelectMenu from './select_menu';

export default {
  name: 'DtSelectMenuDefault',
  components: { DtSelectMenu },
};
</script>
