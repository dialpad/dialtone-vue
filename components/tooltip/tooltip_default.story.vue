<template>
  <div class="container">
    <dt-tooltip
      v-for="arrowDirection in TOOLTIP_DIRECTION_MODIFIERS"
      :key="arrowDirection"
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
import { TOOLTIP_DIRECTION_MODIFIERS } from './tooltip_constants';

export default {
  name: 'DtTooltipDefault',
  components: { DtTooltip },
  mixins: [fixDefaultSlot],
  data () {
    return {
      TOOLTIP_DIRECTION_MODIFIERS,
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
