<template>
  <dt-badge
    :text="$attrs.text"
    :type="$attrs.type"
    :kind="$attrs.kind"
  >
    <template
      v-if="iconLeft"
      #iconLeft
    >
      <dt-icon
        :name="iconLeft"
        size="200"
      />
    </template>
    <template v-if="defaultSlot">
      {{ defaultSlot }}
    </template>
    <template
      v-if="iconRight"
      #iconRight
    >
      <dt-icon
        :name="iconRight"
        size="200"
      />
    </template>
  </dt-badge>
</template>

<script>
import DtBadge from './badge';
import { DtIcon } from '@/components/icon';

export default {
  name: 'DtBadgeDefault',

  components: { DtBadge, DtIcon },
};
</script>
