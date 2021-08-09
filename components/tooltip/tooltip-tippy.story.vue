<template>
  <div class="tooltip-holder">
    <tooltip-tippy
      trigger="click"
      interactive
      class="d-mt12"
      placement="auto"
      :append-to="appendTo"
      :popper-options="{
        modifiers: [
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['top', 'bottom'],
            },
          },
        ],
      }"
    >
      <template #anchor>
        <dt-button
          id="tippy-1"
          importance="outlined"
          kind="default"
        >
          anchor
        </dt-button>
      </template>
      <template #default>
        <dt-button
          id="tippy-1"
          importance="outlined"
          kind="default"
        >
          anchor
        </dt-button>
      </template>
    </tooltip-tippy>
  </div>
</template>

<script>
import TooltipTippy from './tooltip-tippy';
import { DtButton } from '../button';

export default {
  name: 'TooltipTippyStory',
  components: {
    TooltipTippy,
    DtButton,
  },

  data: () => ({
    appendTo: null,
  }),

  created () {
    this.appendTo = document.body;
  },
};
</script>

<style scoped>
.tooltip-holder {
  height: 1000px;
}
</style>
