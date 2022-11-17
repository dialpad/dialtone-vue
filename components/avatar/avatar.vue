<template>
  <div
    :id="id"
    :class="[
      'd-avatar',
      AVATAR_KIND_MODIFIERS[kind],
      AVATAR_SIZE_MODIFIERS[size],
      AVATAR_COLOR_MODIFIERS[color],
      avatarClass,
      'd-ps-relative',
    ]"
    data-qa="dt-avatar"
  >
    <!-- TODO: remove ^d-ps-relative when DT is updated -->
    <!-- @slot Slot for avatar content -->
    <slot />
    <dt-presence
      v-if="presence"
      :presence="presence"
      class="d-ps-absolute"
      :style="presenceStyles"
    />
  </div>
</template>

<script>
import { warn } from 'vue';
import {
  AVATAR_SIZE_MODIFIERS,
  AVATAR_COLOR_MODIFIERS,
  AVATAR_KIND_MODIFIERS,
} from './avatar_constants.js';
import { getUniqueString } from '@/common/utils';
import { DtPresence } from '../presence';
/**
 * An avatar is a visual representation of a user or object.
 * @see https://dialpad.design/components/avatar.html
 */
export default {
  name: 'DtAvatar',

  components: {
    DtPresence,
  },

  inheritAttrs: false,

  props: {
    /**
     * Id of the avatar content wrapper element
     */
    id: {
      type: String,
      default () { return getUniqueString(); },
    },

    /**
     * The size of the avatar
     * @values sm, md, lg
     */
    size: {
      type: String,
      default: 'md',
      validator: (size) => Object.keys(AVATAR_SIZE_MODIFIERS).includes(size),
    },

    /**
     * The color of the avatar
     * @values base
     * orange-200, orange-300, orange-400, orange-500,
     * pink-300, pink-400, pink-500, pink-600,
     * purple-200, purple-300, purple-500, purple-600,
     * yellow-200, yellow-300, yellow-400, yellow-500
     */
    color: {
      type: String,
      default: 'base',
      validator: (color) => Object.keys(AVATAR_COLOR_MODIFIERS).includes(color),
    },

    /**
     * Used to customize the avatar container
     */
    avatarClass: {
      type: [String, Array, Object],
      default: '',
    },

    /**
     * Determines the presence state for the avatar.
     * Accepts one of 4 values: 'busy', 'away', 'active', 'offline'
     * By default, it's set to null and the presence circle is not shown
     */
    presence: {
      type: String,
      default: null,
    },
  },

  data () {
    return {
      // initials, image or icon
      kind: 'initials',
      AVATAR_SIZE_MODIFIERS,
      AVATAR_COLOR_MODIFIERS,
      AVATAR_KIND_MODIFIERS,
    };
  },

  computed: {
    presenceStyles () {
      // Adjust the position of presence
      // based on the Avatar's size.
      switch (this.size) {
        case 'lg':
          return {
            bottom: '1px',
            right: '1px',
          };
        case 'md':
          return {
            bottom: '-1px',
            right: '-1px',
          };
        case 'sm':
          return {
            bottom: '-2px',
            right: '-2px',
          };
        default:
          return {
            bottom: '0',
            right: '0',
          };
      }
    },
  },

  mounted () {
    this.init();
  },

  updated () {
    this.init();
  },

  methods: {
    init () {
      const firstChild = this.$el.children[0];
      if (firstChild) {
        this.setKind(firstChild);
        this.validateImageAttrsPresence();
      }
    },

    setKind (element) {
      if (this.isSvgType(element)) { this.kind = 'icon'; return; }
      if (this.isImageType(element)) { this.kind = 'image'; return; }
      this.kind = 'initials';
    },

    isSvgType (element) {
      return element?.tagName?.toUpperCase() === 'SVG';
    },

    isImageType (element) {
      return element?.tagName?.toUpperCase() === 'IMG';
    },

    validateImageAttrsPresence () {
      if (this.kind === 'image') {
        // Check that default slot image required attributes are provided
        if (!this.$el.children[0].getAttribute('src') || !this.$el.children[0].getAttribute('alt')) {
          warn('src and alt attributes are required for image avatars', this);
        }
      }
    },
  },
};
</script>
