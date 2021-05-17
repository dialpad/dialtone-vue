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
      <template
        v-if="anchorSlot"
        #anchor
      >
        <span v-html="anchorSlot" />
      </template>
    </dt-tooltip>
  </div>
</template>

<script>
import DtTooltip from './tooltip';
import fixDefaultSlot from '../plugins/fixDefaultSlot';

export default {
  name: 'DtTooltipDefault',
  components: { DtTooltip },
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
