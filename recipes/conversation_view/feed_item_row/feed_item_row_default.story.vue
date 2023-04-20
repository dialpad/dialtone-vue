<template>
  <dt-recipe-feed-item-row
    :show-header="showHeader"
    :avatar-image-url="avatarImageUrl"
    :display-name="displayName"
    :time="time"
    :is-active="isActive"
    @on-hover="onHover"
    @on-focus="onFocus"
  >
    <template v-if="defaultSlot">
      <span v-html="defaultSlot" />
    </template>
    <template
      v-if="threading"
      #threading
    >
      <div class="d-d-flex d-my6">
        <dt-avatar
          presence="busy"
          class="d-mx1"
          seed="seed"
          size="sm"
        >
          <img
            data-qa="dt-avatar-image"
            src="./person.png"
            alt="Person Avatar"
          >
        </dt-avatar>
        <dt-avatar
          presence="active"
          class="d-mx1"
          seed="seed"
          size="sm"
        >
          <img
            data-qa="dt-avatar-image"
            src="./person.png"
            alt="Person Avatar"
          >
        </dt-avatar>
        <dt-avatar
          class="d-mx1"
          seed="seed"
          size="sm"
        >
          <img
            data-qa="dt-avatar-image"
            src="./person.png"
            alt="Person Avatar"
          >
        </dt-avatar>
        <div
          class="d-mx6 d-my-auto d-fs-100"
        >
          3 replies
        </div>
      </div>
    </template>
    <template
      v-if="reactions"
      #reactions
    >
      <dt-emoji-text-wrapper
        class="d-btn d-btn--outlined d-btn--xs"
        element-type="button"
        size="200"
      >
        <span v-html="reactions" /> :smile:
      </dt-emoji-text-wrapper>
    </template>
    <template
      v-if="menu"
      #menu
    >
      <dt-icon :name="menu" />
    </template>
  </dt-recipe-feed-item-row>
</template>

<script>
import DtRecipeFeedItemRow from './feed_item_row';
import { DtEmojiTextWrapper } from '@/components/emoji_text_wrapper';
import { DtAvatar } from '@/components/avatar';
import { DtIcon } from '@/components/icon';

export default {
  name: 'DtRecipeFeedItemRowDefault',
  components: {
    DtAvatar,
    DtRecipeFeedItemRow,
    DtEmojiTextWrapper,
    DtIcon,
  },
};
</script>
