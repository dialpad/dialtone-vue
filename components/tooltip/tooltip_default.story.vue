<template>
  <div class="d-fl-center d-fd-column d-pt64">
    <div class="d-pt16">
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
  </div>
</template>

<script>
import { DtTooltip } from './';
import { DtButton } from '../button';

export default {
  name: 'DtTooltipDefault',
  components: { DtTooltip, DtButton },
};
</script>
