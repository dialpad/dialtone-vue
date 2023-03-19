<template>
  <div class="d-emoji-picker__tabset" />
  <!--  Emoji Tabset -->
</template>

<script setup>
const props = defineProps({
  /**
   * Whether to show the recently used tab or not
   * @type {Boolean}
   * @default false
   */
  showRecentlyUsedTab: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits([
  /**
   * Emitted when a tab is selected
   * @event selected-tabset
   * @param {String} tabName - The name of the tab that was selected
   */
  'selected-tabset',
]);

function selectTabset (tabName) {
  emits('selected-tabset', tabName);
}
</script>
