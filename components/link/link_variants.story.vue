<template>
  <div>
    <dt-link
      v-for="kind in LINK_KIND_CLASSES"
      :key="kind"
      href="#"
      :kind="kind"
    >
      {{ kind }} link
    </dt-link>
    <dt-link
      href="#"
      disabled
    >
      Disabled link
    </dt-link>
    <div class="d-bgc-blue-800">
      <dt-link
        href="#"
        disabled
        inverted
      >
        Inverted Disabled link
      </dt-link>
      <dt-link
        href="#"
        inverted
      >
        Inverted link
      </dt-link>
      <dt-link
        href="#"
        :kind="DANGER"
        inverted
      >
        Inverted Danger link
      </dt-link>
    </div>
  </div>
</template>

<script>
import DtLink from './link';
import { LINK_KIND_CLASSES, DANGER } from './link_constants';

export default {
  name: 'DtLinkVariants',
  components: { DtLink },
  data () {
    return {
      LINK_KIND_CLASSES,
      DANGER,
    };
  },
};
</script>
