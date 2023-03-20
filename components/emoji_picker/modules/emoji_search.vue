<template>
  <div class="d-emoji-picker__search">
    <dt-input
      placeholder="Search..."
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
</script>
