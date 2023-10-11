<template>
  <div
    class="dt-emoji-suggestion"
  >
    <dt-emoji
      size="200"
      :code="item"
    />
    <div class="dt-emoji-suggestion--text">
      {{ item }}
    </div>
  </div>
</template>

<script>
import { DtEmoji } from '@/emoji';

export default {
  name: 'EmojiSuggestion',
  components: {
    DtEmoji,
  },

  props: {
    item: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.dt-emoji-suggestion {
  display: flex;
}
.dt-emoji-suggestion--text {
  margin-left: var(--dt-size-350);
}
</style>
