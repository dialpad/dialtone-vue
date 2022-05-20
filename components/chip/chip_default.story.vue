<template>
  <dt-chip
    :hide-close="hideClose"
    :close-button-props="buttonCloseProps"
    :interactive="interactive"
    :size="size"
    :labelled-by-id="labelledById"
    :avatar-props="avatarProps"
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

  computed: {
    buttonCloseProps () {
      return {
        ...this.closeButtonProps,
        ariaLabel: 'Close',
      };
    },
  },
};
</script>
