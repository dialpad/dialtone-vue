<template>
  <div>
    <hs-link
      v-for="kind in LINK_KINDS"
      :key="kind"
      href="#"
      :kind="kind"
    >
      {{ kind }} link
    </hs-link>
    <hs-link
      href="#"
      disabled
    >
      Disabled link
    </hs-link>
    <div class="d-bgc-blue-800">
      <hs-link
        href="#"
        disabled
        inverted
      >
        Inverted Disabled link
      </hs-link>
      <hs-link
        href="#"
        inverted
      >
        Inverted link
      </hs-link>
      <hs-link
        href="#"
        :kind="DANGER"
        inverted
      >
        Inverted Danger link
      </hs-link>
    </div>
  </div>
</template>

<script>
import HsLink from './link';
import { LINK_KINDS, DANGER } from './link_constants';

export default {
  name: 'HsLinkVariants',
  components: { HsLink },
  data () {
    return {
      LINK_KINDS,
      DANGER,
    };
  },
};
</script>
