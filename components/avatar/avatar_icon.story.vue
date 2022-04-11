<template>
  <dt-avatar
    :id="id"
    :size="size"
    :color="color"
  >
    <component
      :is="defaultSlot"
    />
  </dt-avatar>
</template>

<script>
import DtAvatar from './avatar';
import icon from '@/common/mixins/icon';
import { htmlFragment } from '@/common/utils';

export default {
  name: 'DtAvatarDefault',
  components: { DtAvatar, htmlFragment },
  mixins: [icon],
};
</script>
