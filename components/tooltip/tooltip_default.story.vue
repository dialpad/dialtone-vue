<template>
  <div class="container">
    <dt-tooltip
      :message="message"
      :arrow-direction="arrowDirection"
      :show="show"
      :inverted="inverted"
      :hover="hover"
    >
      {{ defaultSlot }}

      <template #anchor>
        <dt-button importance="outlined">
          {{ anchorSlot }}
        </dt-button>
      </template>
    </dt-tooltip>
  </div>
</template>

<script>
import { DtTooltip } from './';
import { DtButton } from '../button';
import fixDefaultSlot from '../plugins/fixDefaultSlot';

export default {
  name: 'DtTooltipDefault',
  components: { DtTooltip, DtButton },
  mixins: [fixDefaultSlot],
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
}
</style>
