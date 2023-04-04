<template>
  <div class="d-emoji-picker__data">
    <dt-emoji
      v-if="emojiData"
      :code="emojiData.shortname"
    />
    {{ emojiData?.name }}
  </div>
</template>

<script setup>
import { DtEmoji } from '@/components/emoji';

defineProps({
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

<style lang="less" scoped>
.d-emoji-picker {
  &__data {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
