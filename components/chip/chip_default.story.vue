<template>
  <dt-chip
    :hide-close="hideClose"
    :close-button-props="closeButtonProps"
    :interactive="interactive"
    :size="size"
    :labelled-by-id="labelledById"
    :avatar-props="avatarProps"
    @click="onClick"
    @close="onClose"
  >
    <template
      v-if="icon"
      slot="icon"
    >
      <component :is="icon" />
    </template>
    <span
      v-if="defaultSlot"
      v-html="defaultSlot"
    />
  </dt-chip>
</template>

<script>
import DtChip from './chip';
import icon from '@/common/mixins/icon';

export default {
  name: 'DtChipDefault',
  components: { DtChip },
  mixins: [icon],
};
</script>
