<template>
  <div>
    <hs-link
      href="#"
    >
      {{ defaultSlot }}
    </hs-link>
    <hs-link
      href="#"
      kind="danger"
    >
      Danger link
    </hs-link>
    <hs-link
      href="#"
      kind="warning"
    >
      Warning link
    </hs-link>
    <hs-link
      href="#"
      kind="success"
    >
      Success link
    </hs-link>
    <hs-link
      href="#"
      kind="muted"
    >
      Dark link
    </hs-link>
    <hs-link
      href="#"
      :disabled="true"
    >
      Disabled link
    </hs-link>
    <div class="d-bgc-blue-800">
      <hs-link
        href="#"
        :disabled="true"
        :inverted="true"
      >
        Inverted Disabled link
      </hs-link>
      <hs-link
        href="#"
        :inverted="true"
      >
        Inverted link
      </hs-link>
      <hs-link
        href="#"
        kind="danger"
        :inverted="true"
      >
        Inverted Danger link
      </hs-link>
    </div>
  </div>
</template>

<script>
import HsLink from './link';

export default {
  name: 'HsLinkVariants',
  components: { HsLink },
};
</script>
