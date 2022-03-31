<script lang="ts">
export default {
  name: 'DtAvatar',
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import {
  defineProps,
  warn,
  onMounted,
  onBeforeUpdate,
  toRefs,
  useSlots,
  useAttrs,
  reactive,
} from 'vue';
import {
  AVATAR_SIZE_MODIFIERS,
  AVATAR_COLOR_MODIFIERS,
  AVATAR_KIND_MODIFIERS,
} from './avatar_constants';
import { getUniqueString } from '@/common/utils';

const props = defineProps({
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
    validator: (kind: string) => Object.keys(AVATAR_KIND_MODIFIERS).includes(kind),
  },

  /**
   * The size of the avatar
   */
  size: {
    type: String,
    default: 'md',
    validator: (size: string) => Object.keys(AVATAR_SIZE_MODIFIERS).includes(size),
  },

  /**
   * The color of the avatar
   */
  color: {
    type: String,
    default: 'base',
    validator: (color: string) => Object.keys(AVATAR_COLOR_MODIFIERS).includes(color),
  },

  /**
   * Used to customize the avatar container
   */
  avatarClass: {
    type: [String, Array, Object],
    default: '',
  },
});

const { kind } = reactive(toRefs(props));
const attrs = useAttrs();
const slots = useSlots();

const altText = attrs.alt as string;

const validateImageAttrsPresence = () => {
  if (kind === 'default' && !slots.default) {
    // Check that default slot image required attributes are provided
    if (!attrs.src || !attrs.alt) {
      warn('src and alt attributes are required for image avatars');
    }
  }
};

onMounted(() => {
  validateImageAttrsPresence();
});

onBeforeUpdate(() => {
  validateImageAttrsPresence();
});
</script>

<template>
  <div
    :id="id"
    :class="[
      'd-avatar',
      AVATAR_KIND_MODIFIERS[kind],
      AVATAR_SIZE_MODIFIERS[size],
      AVATAR_COLOR_MODIFIERS[color],
      avatarClass,
    ]"
    data-qa="dt-avatar"
  >
    <!-- @slot Slot for avatar content -->
    <slot>
      <img
        data-qa="dt-avatar-image"
        v-bind="$attrs"
        :alt="altText"
      >
    </slot>
  </div>
</template>
