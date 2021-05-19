<template>
  <div>
    <dt-link
      :id="id"
      :href="href"
      :kind="kind"
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
