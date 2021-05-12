<template>
  <div>
    <ds-link
      v-for="kind in LINK_KINDS"
      :key="kind"
      href="#"
      :kind="kind"
    >
      {{ kind }} link
    </ds-link>
    <ds-link
      href="#"
      disabled
    >
      Disabled link
    </ds-link>
    <div class="d-bgc-blue-800">
      <ds-link
        href="#"
        disabled
        inverted
      >
        Inverted Disabled link
      </ds-link>
      <ds-link
        href="#"
        inverted
      >
        Inverted link
      </ds-link>
      <ds-link
        href="#"
        :kind="DANGER"
        inverted
      >
        Inverted Danger link
      </ds-link>
    </div>
  </div>
</template>

<script>
import DsLink from './link';
import { LINK_KINDS, DANGER } from './link_constants';

export default {
  name: 'DsLinkVariants',
  components: { DsLink },
  data () {
    return {
      LINK_KINDS,
      DANGER,
    };
  },
};
</script>
