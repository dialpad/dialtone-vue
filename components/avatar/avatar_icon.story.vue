<template>
  <dt-avatar
    :id="$attrs.id"
    :size="$attrs.size"
    :color="$attrs.color"
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
