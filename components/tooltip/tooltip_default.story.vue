<template>
  <div class="d-fl-center d-fd-column d-h216">
    <dt-tooltip
      :message="message"
      :arrow-direction="arrowDirection"
      :show="show"
      :inverted="inverted"
      :hover="hover"
    >
      <template v-if="defaultSlot">
        {{ defaultSlot }}
      </template>
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
