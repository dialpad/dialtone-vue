<template>
  <div class="d-m64">
    <div
      ref="container"
      class="container"
    >
      <div class="some-text"/>
      <div class="some-text">
        <tooltip-tippy
          v-if="parentNode"
          arrow-direction="bottom-center"
          class="tooltip"
          :flip-boundary="parentNode"
          :id="id"
          :flip="flip"
          :offset="offset"
          :append-to="appendTo"
          :interactive="interactive"
          :interactive-border="interactiveBorder"
          trigger="click"
          hide-on-click="toggle"
          :show="show"
        >
          <template #anchor="{ attrs }">
            <dt-button
              importance="outlined"
              :kind="buttonKind"
              v-bind="attrs"
            >
              Click me to see a tooltip
            </dt-button>
          </template>
          <template #default>
            <div>
              {{ defaultSlot }}
            </div>
          </template>
        </tooltip-tippy>
      </div>
      <div class="some-text" />
    </div>
  </div>
</template>

<script>
import TooltipTippy from './tooltip-tippy-headless';
import { DtButton } from '../button';

export default {
  name: 'TooltipTippyStory',
  components: {
    TooltipTippy,
    DtButton,
  },

  data: () => ({
    parentNode: null,
  }),

  computed: {
    buttonKind () {
      return this.inverted ? 'inverted' : 'default';
    },
  },

  mounted () {
    this.parentNode = this.$refs.container;
  },
};
</script>

<style scoped lang="less">
.tooltip-holder {
  margin: 150px;
}

.container {
  position: relative;
  width: 800px;
  height: 300px;
  background-color: var(--black-025);
  padding: 10px;
  border-radius: 10px;
  overflow-y: scroll;
  overscroll-behavior: contain;
  border: 2px dashed #ff6b81;
}

.some-text {
  height: 400px;
  cursor: pointer;
  padding: 100px 10px 0;

}

.tooltip {
  margin-left: 4px;
}
</style>
