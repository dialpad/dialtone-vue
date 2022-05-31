<template>
  <div>
    <dt-emoji-text-wrapper>
      <dt-button kind="danger">
        Button with custom :smile: and invalid 🫡 emojis
      </dt-button>
    </dt-emoji-text-wrapper>

    <dt-emoji-text-wrapper>
      <dt-input placeholder="value with :smile: emoji inside">
        Input with custom :smile: emoji
      </dt-input>
    </dt-emoji-text-wrapper>
  </div>
</template>

<script>
import DtEmojiTextWrapper from './emoji_text_wrapper';
import { DtInput, DtButton } from '@';

export default {
  name: 'DtEmojiTextWrapperVariants',
  components: {
    DtButton,
    DtInput,
    DtEmojiTextWrapper,
  },
};
</script>
