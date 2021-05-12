<template>
  <div>
    <ds-link
      :id="id"
      :href="href"
      :kind="kind"
      :inverted="inverted"
      :disabled="disabled"
    >
      {{ defaultSlot }}
    </ds-link>
  </div>
</template>

<script>
import DsLink from './link';

export default {
  name: 'DsLinkDefault',
  components: { DsLink },
  inheritAttrs: false,
};
</script>
