<template>
  <dt-select-menu
    :name="name"
    :label="label"
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
    <!--
    <template v-if="defaultSlot">
      <div v-html="defaultSlot" />
    </template>
    -->
    <template>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
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
