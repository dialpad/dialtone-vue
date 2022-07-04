<template>
  <div :class="size === 'd-svg--size100p' ? 'd-w264 d-h264 d-ba' : undefined">
    <dt-emoji
      :code="code"
      :size="size"
      :img-class="imgClass"
      :aria-label="ariaLabel"
      :custom-emoji="customEmojiProp"
    />
  </div>
</template>

<script>
import DtEmoji from './emoji';
import * as customEmojiJson from '@/custom-emoji.json';

export default {
  name: 'DtEmojiDefault',
  components: { DtEmoji },
  data () {
    return {
      customEmojiProp: customEmojiJson,
    };
  },
};
</script>
