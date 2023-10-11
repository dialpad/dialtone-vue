<template>
  <div class="dt-mention-suggestion-list-text">
    {{ item }}
  </div>
</template>

<script>
export default {
  name: 'MentionSuggestion',

  props: {
    item: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>
