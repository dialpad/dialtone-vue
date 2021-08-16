<template>
  <div class="d-m64">
    <div
      ref="container"
      class="container"
    >
      <div class="some-text"/>
      <div class="some-text">
        <dt-tooltip
          v-if="parentNode"
          arrow-direction="bottom-center"
          class="tooltip"
          :flip-boundary="parentNode"
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
          <template #default>
            <div>
              {{ defaultSlot }}
            </div>
          </template>
        </dt-tooltip>
      </div>
      <div class="some-text" />
    </div>
  </div>
</template>

<script>
import DtTooltip from './tooltip';
import { DtButton } from '../button';

export default {
  name: 'TooltipOverflow',
  components: {
    DtTooltip,
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
  padding: 100px 10px 0;

}

.tooltip {
  margin-left: 4px;
}
</style>
