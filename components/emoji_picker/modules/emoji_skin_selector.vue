<template>
  <div class="d-emoji-picker__skin-selector">
    <!--    Skin Selector -->
  </div>
</template>

<script setup>
const emits = defineEmits([
  /**
   * The skin tone that was selected
   * @event skin-tone
   * @type {Number}
   */
  'skinTone',
]);
</script>
