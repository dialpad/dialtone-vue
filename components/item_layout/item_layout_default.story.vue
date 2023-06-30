<template>
  <dt-item-layout>
    <template #left>
      <span v-html="left" />
    </template>
    <span v-html="defaultSlot" />
    <template #subtitle>
      <span v-html="subtitle" />
    </template>
    <template #bottom>
      <span v-html="bottom" />
    </template>
    <template #right>
      <span v-html="right" />
    </template>
    <template #selected>
      <span v-html="selected" />
    </template>
  </dt-item-layout>
</template>

<script>
import DtItemLayout from './item_layout.vue';

export default {
  name: 'DtItemLayoutDefault',
  components: { DtItemLayout },
};
</script>
