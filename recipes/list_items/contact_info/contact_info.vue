<template>
  <ul>
    <dt-list-item
      :id="id"
      :role="role"
      navigation-type="tab"
      data-qa="contact-info"
      @click="onClick"
    >
      <template #left>
        <div
          class="d-ps-relative"
          data-qa="contact-info-left"
        >
          <dt-avatar
            v-if="avatarSrc"
            kind="default"
            size="lg"
            :src="avatarSrc"
            :alt="displayName"
            avatar-class="d-bar0"
          />
          <dt-avatar
            v-else-if="avatarInitials"
            kind="initials"
            size="lg"
            :color="avatarColor"
            :alt="avatarInitials"
          >
            {{ avatarInitials }}
          </dt-avatar>
          <div
            v-if="showUserStatus"
            :class="[
              'd-bc-white',
              'd-baw2',
              'd-ps-absolute',
              'd-b0',
              'd-r0',
              'd-w20p',
              'd-h20p',
              USER_STATUS_COLOR_MODIFIERS[userStatusColor],
            ]"
            data-qa="contact-info-user-status"
          >
            &nbsp;
          </div>
        </div>
      </template>
      <template #default>
        <div
          class="d-d-flex d-ai-center d-mb2"
          data-qa="contact-info-header"
        >
          <div
            v-if="displayName"
            class="d-fs16 d-fw-bold d-mr4"
          >
            {{ displayName }}
          </div>
          <div
            v-else
            class="d-fs16 d-fw-bold d-mr4"
          >
            {{ phoneNumber }}
            <template v-if="showAttestation">
              <icon-checkbox-filled
                class="d-svg--size14 dt-contact-info__check-mark"
              />
            </template>
          </div>
          <!-- @slot Slot for extra header information -->
          <slot name="header" />
        </div>
      </template>

      <template #subtitle>
        <div
          class="d-d-flex d-ai-center"
          data-qa="contact-info-subtitle"
        >
          <div
            v-if="displayName"
            class="d-fs12 d-mt2"
          >
            {{ phoneNumber }}
            <template v-if="showAttestation">
              <icon-checkbox-filled
                class="d-svg--size14 d-va-text-bottom dt-contact-info__check-mark"
              />
            </template>
          </div>
          <!-- @slot Slot for extra subtitle information -->
          <slot name="subtitle" />
        </div>
      </template>

      <template #bottom>
        <div
          class="d-d-flex d-ai-center d-mtn6"
          data-qa="contact-info-bottom"
        >
          <template v-if="groupName">
            <div :class="['d-w8', 'd-h8', 'd-mr4', groupColorClass]">
              &nbsp;
            </div>
            <div class="d-fs11 d-mr4">
              {{ groupName }}
            </div>
          </template>
          <div>
            <!-- @slot Slot for extra information at the bottom -->
            <slot name="bottom" />
          </div>
        </div>
      </template>

      <template #right>
        <!-- @slot Slot for the right content -->
        <slot name="right" />
      </template>
    </dt-list-item>
  </ul>
</template>

<script>
import { DtListItem, DtAvatar, AVATAR_COLOR_MODIFIERS } from '@';
import { USER_STATUS_COLOR_MODIFIERS } from './contact_info_constants.js';
import IconCheckboxFilled from '@dialpad/dialtone/lib/dist/vue/icons/IconCheckboxFilled';
import utils from '@/common/utils';

export default {
  name: 'DtRecipeContactInfo',

  components: {
    DtAvatar,
    DtListItem,
    IconCheckboxFilled,
  },

  mixins: [],

  /* inheritAttrs: false is generally an option we want to set on library
    components. This allows any attributes passed in that are not recognized
    as props to be passed down to another element or component using v-bind:$attrs
    more info: https://vuejs.org/v2/api/#inheritAttrs */
  // inheritAttrs: false,

  props: {
    /**
     * Id for the item.
     */
    id: {
      type: String,
      default () { return utils.getUniqueString(); },
    },

    /**
     * String to use for the item's role.
     */
    role: {
      type: String,
      default: 'listitem',
    },

    displayName: {
      type: String,
      default: '',
    },

    avatarSrc: {
      type: String,
      default: '',
    },

    avatarInitials: {
      type: String,
      default: '',
    },

    avatarColor: {
      type: String,
      default: 'base',
      validator: (color) => Object.keys(AVATAR_COLOR_MODIFIERS).includes(color),
    },

    userStatusColor: {
      type: String,
      default: 'none',
      validator: (color) => Object.keys(USER_STATUS_COLOR_MODIFIERS).includes(color),
    },

    phoneNumber: {
      type: String,
      default: '',
    },

    showAttestation: {
      type: Boolean,
      default: false,
    },

    groupName: {
      type: String,
      default: '',
    },

    groupColorClass: {
      type: String,
      default: 'd-bgc-pink-400',
    },
  },

  emits: ['click'],

  data () {
    return {
      USER_STATUS_COLOR_MODIFIERS,
    };
  },

  computed: {
    showUserStatus () {
      return this.userStatusColor !== 'none';
    },
  },

  methods: {
    onClick () {
      this.$emit('click');
    },
  },
};
</script>

<style lang="less">
.dt-contact-info__check-mark {
  fill: var(--black-400) !important;
}
</style>
