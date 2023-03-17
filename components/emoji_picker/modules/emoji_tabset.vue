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
   * @event selectedTabset
   * @param {String} tabName - The name of the tab that was selected
   */
  'selectedTabset',
]);

function selectTabset (tabName) {
  emits('selectedTabset', tabName);
}
</script>
