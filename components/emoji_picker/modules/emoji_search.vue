<template>
  <div class="d-emoji-picker__search">
    <input
      :value="modelValue"
      type="text"
      class="d-emoji-picker__search--input"
      placeholder="Search"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script setup>
const props = defineProps({
  /**
   * Value of the input
   */
  modelValue: {
    type: String,
    default: '',
  },
});

const emits = defineEmits([
  /**
     * Event fired to sync the modelValue prop with the parent component
     * @event update:modelValue
     */
  'update:modelValue',
]);
</script>
