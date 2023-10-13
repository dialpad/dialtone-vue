<template>
  <dt-stack
    direction="row"
    gap="600"
    class="d-mt64"
  >
    <dt-button
      v-dt-tooltip="{ placement: 'top-start', text: 'Tooltip text on button top-start' }"
      importance="clear"
      kind="danger"
    >
      Trying complex examples
    </dt-button>
    <span v-dt-tooltip="'Simple example'">More text</span>
    <dt-button v-dt-tooltip="'Tooltip text on button'">
      Button with tooltip
    </dt-button>
  </dt-stack>
</template>

<script>
import DtStack from '@/components/stack/stack.vue';
import DtButton from '@/components/button/button.vue';
export default {
  name: 'DtTooltipDirectiveDefault',
  components: { DtButton, DtStack },
};
</script>
