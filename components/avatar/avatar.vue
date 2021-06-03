<template>
  <div
    :id="id"
    :class="avatarClasses"
  >
    <!-- @slot Slot for avatar content -->
    <slot>
      <img
        v-if="shouldRenderImage"
        :src="imageUrl"
        :alt="alt"
      >
    </slot>

    <!-- @slot Slot for avatar presence component -->
    <slot name="presence" />
  </div>
</template>

<script>
import {
  AVATAR_SIZE_MODIFIERS,
  AVATAR_COLOR_MODIFIERS,
  AVATAR_KIND_MODIFIERS,
} from './avatar_constants.js';
import { getUniqueString } from '../utils';

export default {
  name: 'DtAvatar',

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
     * URL for the avatar image
     */
    imageUrl: {
      type: String,
      default: '',
    },

    /**
     * Description of the image. Required if imageUrl is present
     */
    alt: {
      type: String,
      default: '',
    },

    /**
     * Applies variant class to the avatar
     */
    kind: {
      type: String,
      default: 'default',
      validation: (kind) => Object.keys(AVATAR_KIND_MODIFIERS).includes(kind),
    },

    /**
     * The size of the avatar
     */
    size: {
      type: String,
      default: 'md',
      validation: (size) => Object.keys(AVATAR_SIZE_MODIFIERS).includes(size),
    },

    /**
     * The color of the avatar
     */
    color: {
      type: String,
      default: 'base',
      validation: (color) => Object.keys(AVATAR_COLOR_MODIFIERS).includes(color),
    },
  },

  computed: {
    avatarClasses () {
      return ['d-avatar',
        AVATAR_KIND_MODIFIERS[this.kind],
        AVATAR_SIZE_MODIFIERS[this.size],
        AVATAR_COLOR_MODIFIERS[this.color],
      ];
    },

    shouldRenderImage () {
      return this.imageUrl && this.alt;
    },
  },

};
</script>
