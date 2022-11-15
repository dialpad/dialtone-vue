<template>
  <dt-avatar
    :id="id"
    :size="size"
    :color="color"
  >
    <dt-icon :name="defaultSlot" />
  </dt-avatar>
</template>

<script>
import DtAvatar from './avatar';
import { DtIcon } from '@/components/icon';

export default {
  name: 'DtAvatarDefault',
  components: { DtAvatar, DtIcon },
};
</script>
