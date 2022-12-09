<template>
  <div
    id="components-badge--variants-container"
    class="d-d-flex"
  >
    <dt-badge
      v-for="type in types"
      :key="type"
      :text="type"
      :type="type"
      class="d-mr8 d-mb8"
    />
    <dt-badge
      v-for="type in types.slice(0, types.length - 1)"
      :key="`${type}-count`"
      text="1"
      :type="type"
      kind="count"
      class="d-mr8 d-mb8"
    />
  </div>
</template>

<script>
import DtBadge from './badge';
import { BADGE_TYPE_MODIFIERS } from './badge_constants';

export default {
  name: 'DtBadgeVariants',

  components: { DtBadge },

  data () {
    return {
      BADGE_TYPE_MODIFIERS,
    };
  },

  computed: {
    types () {
      return Object.keys(BADGE_TYPE_MODIFIERS);
    },
  },
};
</script>
