/* eslint-disable vue/no-use-v-if-with-v-for */
<template>
  <div id="app">
    <div class="test">
      <dt-button
        style="z-index: 99999;"
        @click="start"
      >
        Start
      </dt-button>
      <dt-button
        style="z-index: 99999;"
        @click="end"
      >
        End
      </dt-button>
      <dt-button
        style="z-index: 99999;"
        @click="destroy"
      >
        Destroy
      </dt-button>
      <dt-button
        style="z-index: 99999;"
        @click="mount"
      >
        Mount
      </dt-button>
    </div>

    <dt-popover
      v-for="(popover, index) in popovers"
      :open="popover.open"
      :hide-on-click="false"
      modal
      :key="index"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="popover.open = !popover.open"
        >
          Click to open
        </dt-button>
      </template>
      <template #content>
        <p>I will be displayed in the popover!</p>
      </template>
    </dt-popover>
  </div>
</template>

<script>
import { DtPopover, DtButton } from '@dialpad/dialtone-vue'

export default {
  name: 'App',
  components: {
    DtPopover,
    DtButton,
  },
  data() {
    return {
      popovers: [],
      uniq: [],
      interval: 0
    }
  },

  methods: {
    start() {
      this.interval = setInterval(() => {
        this.popovers.push(...this.uniq.slice(0, 10))
      }, 1000)
    },

    end() {
      clearInterval(this.interval)
    },

    destroy() {
      this.popovers = []
    },

    mount() {
      this.uniq = Array.from({ length: 200 }, () => ({
       open: true
      }))
    }
  }
}
</script>

<style>
@import "~@dialpad/dialtone/lib/dist/css/dialtone.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.test {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999999;
  background: red;
}


</style>
