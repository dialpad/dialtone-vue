<template>
  <dt-chip
    :hide-close="$attrs.hideClose"
    :close-button-props="$attrs.closeButtonProps"
    :interactive="$attrs.interactive"
    :size="$attrs.size"
    :labelled-by-id="$attrs.labelledById"
    :avatar-props="$attrs.avatarProps"
    @click="$attrs.onClick"
    @close="$attrs.onClose"
  >
    <template
      v-if="$attrs.icon"
      #icon
    >
      <component :is="$attrs.icon" />
    </template>
    <v-html :html="defaultSlot" />
  </dt-chip>
</template>

<script>
import DtChip from './chip';
import icon from '@/common/mixins/icon';
import VHtml from '@/common/v_html';

export default {
  name: 'DtChipDefault',
  components: { DtChip, VHtml },
  mixins: [icon],
};
</script>
