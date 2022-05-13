<template>
  <dt-emoji
    :code="code"
    :size="size"
    :emoji-class="emojiClass"
  />
</template>

<script>
import DtEmoji from './emoji';

export default {
  name: 'DtEmojiDefault',
  components: { DtEmoji },
};
</script>
