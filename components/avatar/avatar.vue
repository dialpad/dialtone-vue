<template>
  <div
    :id="id"
    :class="avatarClasses"
    data-qa="dt-avatar"
  >
    <!-- @slot Slot for avatar content -->
    <slot>
      <img
        v-if="shouldRenderImage"
        v-bind="$attrs"
        :alt="$attrs.alt"
      >
    </slot>
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
      return [
        'd-avatar',
        AVATAR_KIND_MODIFIERS[this.kind],
        AVATAR_SIZE_MODIFIERS[this.size],
        AVATAR_COLOR_MODIFIERS[this.color],
      ];
    },

    shouldRenderImage () {
      return this.$attrs.src && this.$attrs.alt;
    },
  },
};
</script>
