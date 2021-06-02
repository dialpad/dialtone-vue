<template>
  <dt-avatar
    :kind="kind"
    :size="size"
    :color="color"
    :image-url="imageUrl"
    :alt="alt"
  >
    <template
      v-if="defaultSlot"
      #default
    >
      <component
        :is="defaultSlot"
        v-if="kind === 'icon'"
      />
      <span
        v-else
        v-html="defaultSlot"
      />
    </template>

    <template
      #presence
    >
      {{ presence }}
    </template>
  </dt-avatar>
</template>

<script>
import DtAvatar from './avatar';
import icon from '../mixins/icon';

export default {
  name: 'DtAvatarDefault',
  components: { DtAvatar },
  mixins: [icon],
};
</script>
