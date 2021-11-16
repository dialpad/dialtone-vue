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
        :id="id"
        :arrow-direction="arrowDirection"
        :inverted="inverted"
        :show="showSync"
        :message="message"
        :flip="flip"
        :offset="offset"
        :append-to="appendTo"
        :interactive="interactive"
        :flip-boundary="flipBoundary"
        :interactive-border="interactiveBorder"
        :trigger="trigger"
        :hide-on-click="hideOnClick"
        :transition="transition"
        @update:show="updateShow"
      >
        <template #anchor="{ attrs }">
          <dt-button
            importance="outlined"
            :kind="buttonKind"
            v-bind="attrs"
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

  inheritAttrs: false,

  data: () => ({
    showSync: false,
  }),

  computed: {
    buttonKind () {
      return this.inverted ? 'inverted' : 'default';
    },
  },

  watch: {
    show: {
      immediate: true,
      handler (show) {
        this.showSync = show;
      },
    },
  },

  methods: {
    updateShow (event) {
      this.showSync = event;
      this.onCLose(event);
    },
  },
};
</script>
