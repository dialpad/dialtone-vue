<template>
  <div
    :class="[
      'd-fl-center d-fd-column d-pt64',
      {
        'd-bgc-purple-800 d-pb64': inverted,
      },
    ]"
  >
    <div class="d-pt16">
      <tooltip-tippy
        :arrow-direction="arrowDirection"
        :inverted="inverted"
        :message="message"
      >
        <template #anchor>
          <dt-button
            importance="outlined"
            :kind="buttonKind"
          >
            {{ anchor }}
          </dt-button>
        </template>
        <template v-if="defaultSlot">
          {{ defaultSlot }}
        </template>
      </tooltip-tippy>
    </div>
  </div>
</template>

<script>
import TooltipTippy from './tooltip-tippy-headless';
import { DtButton } from '../button';

export default {
  name: 'TooltipTippyDefaultStory',
  components: {
    TooltipTippy,
    DtButton,
  },

  computed: {
    buttonKind () {
      return this.inverted ? 'inverted' : 'default';
    },
  },
};
</script>
