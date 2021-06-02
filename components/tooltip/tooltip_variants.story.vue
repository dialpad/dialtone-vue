<template>
  <div
    id="forms-radio--variants-container"
    class="d-pt64 d-px64"
  >
    <div class="d-pt16 d-mb64 d-px64">
      <!-- Default -->
      <dt-tooltip
        :message="localMessage"
      >
        <template #anchor>
          <dt-button importance="outlined">
            {{ localAnchor }}
          </dt-button>
        </template>
      </dt-tooltip>
    </div>

    <!-- Arrow Description -->
    <div class="d-d-flex d-fw-wrap d-ff-row-wrap">
      <div
        v-for="direction in TOOLTIP_DIRECTION_MODIFIERS"
        :key="direction"
        class="d-mb64 d-px64"
      >
        <dt-tooltip
          :arrow-direction="direction"
          :message="localMessage"
        >
          <template #anchor>
            <dt-button importance="outlined">
              {{ localAnchor }}
            </dt-button>
          </template>
        </dt-tooltip>
      </div>

      <!-- Text -->
      <dt-tooltip
        class="d-mb64 d-px64"
        :message="localMessage"
      >
        <template #anchor>
          {{ localAnchor }}
        </template>
      </dt-tooltip>
    </div>

    <div class="d-fd-column d-pt24">
      <!-- Open state -->
      <dt-tooltip
        class="d-mb64 d-px64"
        :show="true"
        :hover="false"
        :message="localMessage"
      >
        <template #anchor>
          <dt-button
            importance="outlined"
          >
            {{ localAnchor }}
          </dt-button>
        </template>
      </dt-tooltip>
    </div>

    <div class="d-bgc-purple-800 d-pt64">
      <div class="d-py64 d-px64">
        <!-- Inverted state -->
        <dt-tooltip
          :show="true"
          :hover="false"
          :inverted="true"
          :message="localMessage"
        >
          <template #anchor>
            <dt-button
              kind="inverted"
              importance="outlined"
            >
              {{ localAnchor }}
            </dt-button>
          </template>
        </dt-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import DtTooltip from './tooltip';
import { DtButton } from './../button';
import { TOOLTIP_DIRECTION_MODIFIERS, TOOLTIP_STATE_MODIFIERS } from './tooltip_constants';

export default {
  name: 'TooltipVariants',
  components: { DtTooltip, DtButton },
  data () {
    return {
      TOOLTIP_DIRECTION_MODIFIERS,
      TOOLTIP_STATE_MODIFIERS,
      localMessage: `This is a simple tooltip. The tooltip can be positioned in multiple areas too!`,
      localAnchor: 'Hover over me to see a tooltip',
    };
  },
};
</script>
