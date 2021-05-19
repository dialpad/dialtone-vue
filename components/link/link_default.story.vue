<template>
  <div>
    <dt-link
      :href="href"
      :kind="kind"
      class="base-link"
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

<style lang="less">
.base-link {
  text-transform: capitalize;
}
</style>
