<template>
  <dt-recipe-general-row
    :unread-count="unreadCount"
    :has-unreads="hasUnreads"
    :selected="selected"
    :has-call-button="true"
    v-on="$listeners"
  >
    <template #left>
      <dt-avatar
        size="sm"
        :seed="avatarSeed"
        :presence="avatarPresence"
      >
        <img
          v-if="avatarSrc"
          data-qa="dt-avatar-image"
          :src="avatarSrc"
          :alt="name"
        >
        <template v-else>
          {{ avatarInitial }}
        </template>
      </dt-avatar>
    </template>
    <template #label>
      <dt-emoji-text-wrapper
        class="dt-leftbar-row__description"
        data-qa="dt-leftbar-row-description"
        size="200"
      >
        {{ name }}
      </dt-emoji-text-wrapper>
      <div class="dt-leftbar-row__status">
        <span
          v-if="presenceText"
          data-qa="dt-leftbar-row-presence-text"
          class="dt-leftbar-row__meta-context"
          :style="{ color: presenceColor }"
        >
          {{ presenceText }}
        </span>
        <dt-emoji-text-wrapper
          v-if="userStatus"
          size="100"
          element-type="span"
          data-qa="dt-leftbar-row-user-status"
          class="dt-leftbar-row__meta-custom"
        >
          {{ userStatus }}
        </dt-emoji-text-wrapper>
      </div>
    </template>
  </dt-recipe-general-row>
</template>

<script>
import { DtRecipeGeneralRow } from '@/recipes/leftbar/general_row';
import DtEmojiTextWrapper from '@/components/emoji_text_wrapper/emoji_text_wrapper.vue';
import DtAvatar from '@/components/avatar/avatar.vue';

export default {
  name: 'DtRecipeGroupRow',

  components: {
    DtAvatar,
    DtRecipeGeneralRow,
    DtEmojiTextWrapper,
  },

  props: {
    /**
     * Optional avatar image url.
     * if provided, it's also required to provide a value in the `avatarInitials` prop to use
     * in the alt attribute of the avatar.
     */
    avatarSrc: {
      type: String,
      default: '',
    },

    /**
     * Avatar presence such as "active" or "busy". Maps to the presence prop in the Avatar component.
     */
    avatarPresence: {
      type: String,
      default: 'active',
    },

    /**
     * Avatar seed, set this to the user's ID to get the same avatar background gradient each time it is displayed.
     */
    avatarSeed: {
      type: String,
      default: null,
    },

    /**
     * Text describing the user's presence, such as "in a meeting"
     */
    presenceText: {
      type: String,
      default: '',
    },

    /**
     * Name of the contact
     */
    name: {
      type: String,
      required: true,
    },

    /**
     * Status as set by the user.
     */
    userStatus: {
      type: String,
      default: '',
    },

    /**
     * Number of unread messages
     */
    unreadCount: {
      type: String,
      default: null,
    },

    /**
     * Styles the row with an increased font weight to convey it has unreads
     */
    hasUnreads: {
      type: Boolean,
      default: false,
    },

    /**
     * Determines if the row is selected
     */
    selected: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    presenceColor () {
      switch (this.avatarPresence) {
        case 'active':
          return 'var(--theme-presence-color-background-available)';
        case 'busy':
          return 'var(--theme-presence-color-background-busy-unavailable)';
        case 'away':
          return 'var(--theme-presence-color-background-busy)';
        default:
          return undefined;
      }
    },

    avatarInitial () {
      return this.name[0] ?? '';
    },
  },
};
</script>
