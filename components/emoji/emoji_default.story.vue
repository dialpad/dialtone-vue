<template>
  <dt-emoji
    :code="code"
    :size="size"
  />
</template>

<script>
import DtEmoji from './emoji';

export default {
  name: 'DtEmojiDefault',
  components: { DtEmoji },
};
</script>
