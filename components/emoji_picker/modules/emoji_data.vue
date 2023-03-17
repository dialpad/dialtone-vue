<template>
  <div class="d-emoji-picker__hovering">
    <!--    Display emoji data -->
  </div>
</template>

<script setup>
const props = defineProps({
  /**
   * Emoji data
   * @type {Object}
   * @default null
   */
  emojiData: {
    type: Object,
    default: null,
  },
});
</script>
