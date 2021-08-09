<template>
  <div
    ref="tooltip-holder"
    class="tooltip-holder"
  >
    <div class="container">
      <div class="some-text" />
      <tooltip-tippy
        v-if="modifiers.length"
        trigger="click"
        interactive
        class="d-mt12"
        placement="auto"
        :popper-options="{
          modifiers: modifiers,
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

      <div class="some-text" />
    </div>
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
    modifiers: [],
  }),

  mounted () {
    this.appendTo = document.body;
    this.modifiers.push([
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top', 'bottom'],
        },
      },
    ]);
  },
};
</script>

<style scoped lang="less">
.tooltip-holder {
  margin: 150px;
  //height: 1000px;
}
.container {
  position: relative;
  width: 300px;
  height: 300px;
  padding: 10px;
  background-color: pink;
  border-radius: 10px;
  overflow-y: scroll;
  overscroll-behavior: contain;
  border: 2px dashed #ff6b81;
}
.some-text {
  height: 400px;
  cursor: pointer;
  background-color: cyan;
}
</style>
