<template>
  <div>
    <dt-link
      :id="id"
      :href="href"
      :kind="kind"
      :disabled="disabled"
    >
      {{ defaultSlot }}
    </dt-link>
  </div>
</template>

<script>
import DtLink from './link';

export default {
  name: 'DtLinkDefault',
  components: { DtLink },
  inheritAttrs: false,
};
</script>
