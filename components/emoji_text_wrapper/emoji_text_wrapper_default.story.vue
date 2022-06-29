<template>
  <dt-emoji-text-wrapper
    :size="size"
    :element-type="elementType"
    :custom-emoji="customEmojiProp"
  >
    <template v-if="defaultSlot">
      <html-fragment :html="defaultSlot" />
    </template>
  </dt-emoji-text-wrapper>
</template>

<script>
import DtEmojiTextWrapper from './emoji_text_wrapper';
import { htmlFragment } from '@/common/utils';
import * as customEmojiJson from '@/custom-emoji.json';

export default {
  name: 'DtEmojiTextWrapperDefault',
  components: { DtEmojiTextWrapper, htmlFragment },
  data () {
    return {
      customEmojiProp: customEmojiJson,
    };
  },
};
</script>
