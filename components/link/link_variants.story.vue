<template>
  <div>
    <dt-link
      v-for="kind in filteredKindClasses"
      :key="kind"
      href="#"
      :kind="kind"
      class="base-link"
    >
      {{ kind || 'default' }} link
    </dt-link>
    <div class="d-bgc-blue-800">
      <dt-link
        kind="inverted"
        href="#"
      >
        Inverted link
      </dt-link>
    </div>
  </div>
</template>

<script>
import DtLink from './link';
import { LINK_KIND_CLASSES, INVERTED } from './link_constants';

export default {
  name: 'DtLinkVariants',
  components: { DtLink },
  data () {
    return {
      LINK_KIND_CLASSES,
    };
  },

  computed: {
    filteredKindClasses () {
      return LINK_KIND_CLASSES.filter(kind => kind !== INVERTED);
    },
  },
};
</script>

<style lang="less">
.base-link {
  text-transform: capitalize;
}
</style>
