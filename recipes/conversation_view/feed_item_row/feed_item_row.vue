<template>
  <dt-list-item
    ref="FeedItemRef"
    element-type="article"
    navigation-type="tab"
    class="d-w100p d-box-border d-ps-relative d-py8 d-pl16"
    :class="{ 'd-bgc-black-100': isActive }"
    data-qa="feed-item-row"
    v-on="feedListeners"
  >
    <!-- Avatar or time -->
    <template #left>
      <dt-avatar
        v-if="showHeader"
        avatar-class="d-mt4"
        :initials="avatarInitials"
      >
        <img
          v-if="avatarImageUrl"
          data-qa="feed-item-row-avatar"
          alt=""
          :src="avatarImageUrl"
        >
      </dt-avatar>
      <!-- show time instead of avatar when headers not present -->
      <div
        v-if="!showHeader"
        v-show="isActive"
        class="d-fs-100 d-fw-normal d-ws-nowrap d-lh-100 d-fc-tertiary"
        data-qa="feed-item-row-time-left"
      >
        {{ time }}
      </div>
    </template>

    <!-- Feed Item -->
    <div
      v-if="showHeader"
      class="d-d-flex"
    >
      <p class="d-fs-200 d-fw-bold d-to-ellipsis d-of-hidden d-ws-nowrap">
        {{ displayName }}
      </p>
      <time
        class="d-fs-100 d-lh-600 d-fc-black-500 d-fw-normal d-ml4 d-fl-shrink0"
      >
        {{ time }}
      </time>
    </div>
    <!-- Default content slot -->
    <slot />

    <template #bottom>
      <div class="d-d-flex d-fw-wrap">
        <slot name="reactions" />
      </div>
      <!-- Threads -->
      <slot name="threading" />
    </template>

    <!-- Action menu -->
    <template #right>
      <div
        v-show="isActive"
        class="d-ps-absolute d-tn16 d-r12"
      >
        <dt-lazy-show
          :appear="true"
          transition="fade"
          :show="isActive"
        >
          <slot name="menu" />
        </dt-lazy-show>
      </div>
    </template>
  </dt-list-item>
</template>

<script>
import {} from './feed_item_row_constants.js';
import { DtAvatar } from '@/components/avatar';
import { DtLazyShow } from '@/components/lazy_show';
import { DtListItem } from '@/components/list_item';

export default {
  name: 'DtRecipeFeedItemRow',

  components: {
    DtAvatar,
    DtLazyShow,
    DtListItem,
  },

  mixins: [],

  inheritAttrs: false,

  props: {
    /**
     * Show avatar, show header text or dont show left time and vice versa
     */
    showHeader: {
      type: Boolean,
      default: false,
    },

    /**
     * Show the avatar of the user, if this is not passed in, the initials would display
     */
    avatarImageUrl: {
      type: String,
      default: '',
    },

    /**
     * The display name
     */
    displayName: {
      type: String,
      default: '',
    },

    time: {
      type: String,
      default: '',
    },

    isActive: {
      type: Boolean,
      default: false,
    },

    // state: {
    //   type: String,
    //   default: 'normal',
    // },
  },

  emits: [
    /**
     * Fires when hovered over feed row
     *
     * @event onHover
     * @type {Boolean}
     */
    'onHover',

    /**
     * Fires when focused over feed row
     *
     * @event onFocus
     * @type {Boolean}
     */
    'onFocus',
  ],

  computed: {
    avatarInitials () {
      const name = this.displayName.split(' ');
      if (name.length >= 2) {
        return name[0].charAt(0) + name[1].charAt(0);
      } else if (name && name[0].charAt(0) != null) {
        return name[0].charAt(0);
      }

      return '';
    },

    feedListeners () {
      return {
        ...this.$listeners,
        mouseenter: _ => this.setHover(true),
        mouseleave: _ => this.setHover(false),
        focusin: _ => this.setFocus(true),
        focusout: _ => this.setFocus(false),
      };
    },
  },

  methods: {
    setFocus (bool) {
      this.$emit('onFocus', bool);
    },

    setHover (bool) {
      this.$emit('onHover', bool);
    },
  },
};
</script>

<style lang="less">

</style>
