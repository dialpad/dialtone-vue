<template>
  <dt-chip
    :show-remove-icon="showRemoveIcon"
    :show-asset="showAsset"
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
