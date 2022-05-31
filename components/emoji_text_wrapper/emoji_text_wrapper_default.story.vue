<template>
  <dt-emoji-text-wrapper>
    <div>
      <button>Some text with :smile:</button>
      <button>Some text with :cry:</button>
      <div>
        <button>Some text with :smile:</button>
        <button>Some text with :cry:</button>
      </div>
    </div>
    <dt-button>Another example :cry:</dt-button>
  </dt-emoji-text-wrapper>
</template>

<script>
import DtEmojiTextWrapper from './emoji_text_wrapper';
import DtButton from '@/components/button/button';

export default {
  name: 'DtEmojiTextWrapperDefault',
  components: { DtButton, DtEmojiTextWrapper },
};
</script>
