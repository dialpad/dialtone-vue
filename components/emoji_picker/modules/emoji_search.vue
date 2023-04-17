<template>
  <div class="d-emoji-picker__search">
    <dt-input
      :placeholder="searchPlaceholderLabel"
      @update:model-value="$emit('update:modelValue', $event)"
    >
      <template #leftIcon>
        <dt-icon name="search" />
      </template>
    </dt-input>
  </div>
</template>

<script setup>
import DtInput from '@/components/input/input.vue';
import DtIcon from '@/components/icon/icon.vue';

defineEmits(['update:modelValue']);
defineProps({
  searchPlaceholderLabel: {
    type: String,
    required: true,
  },
});
</script>

<style>
.d-emoji-picker__search {
  position: relative;
  z-index: 1;
  margin: var(--su16) 0 var(--su16) 0;
}
</style>
