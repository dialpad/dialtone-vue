<template>
  <div>
    <hs-link
      :id="id"
      :href="href"
      :kind="kind"
      :inverted="inverted"
      :disabled="disabled"
    >
      {{ defaultSlot }}
    </hs-link>
  </div>
</template>

<script>
import HsLink from './link';

export default {
  name: 'HsLinkDefault',
  components: { HsLink },
  inheritAttrs: false,
};
</script>
