<template>
  <div class="d-fl-center d-fd-column d-h216">
    <div class="d-mb64">
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
        some text
      </template>
    </dt-tooltip>
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
