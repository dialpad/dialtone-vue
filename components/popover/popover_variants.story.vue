<template>
  <div class="d-d-flex d-w100p">
    <dt-popover
      :open="openAlignmentRight"
      :show-close-button="false"
      fixed-alignment="right"
      width-content="anchor"
      class="d-mr12"
      @update:open="openAlignmentRight = $event"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="openAlignmentRight = !openAlignmentRight"
        >
          Fixed alignment right
        </dt-button>
      </template>
      <template #content>
        <div class="d-fs14 d-m0">
          <p
            v-if="content"
            v-html="content"
          />
          <div v-else>
            <dt-button
              @click="openAlignmentRight = !openAlignmentRight"
            >
              Click to close
            </dt-button>
          </div>
        </div>
      </template>
    </dt-popover>
    <dt-popover
      :open="openPopoverWithNoPadding"
      :show-close-button="false"
      padding="none"
      fixed-alignment="right"
      width-content="anchor"
      class="d-mr12"
      @update:open="openPopoverWithNoPadding = $event"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="openPopoverWithNoPadding = !openPopoverWithNoPadding"
        >
          No padding
        </dt-button>
      </template>
      <template #content>
        <div class="d-fs14 d-m0">
          <p
            v-if="content"
            v-html="content"
          />
          <div v-else>
            <dt-button
              @click="openPopoverWithNoPadding = !openPopoverWithNoPadding"
            >
              Click to close
            </dt-button>
          </div>
        </div>
      </template>
    </dt-popover>
    <dt-popover
      :open="openWithOverlay"
      :modal="true"
      fixed-alignment="right"
      width-content="anchor"
      class="d-mr12"
      @update:open="openWithOverlay = $event"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="openWithOverlay = !openWithOverlay"
        >
          With overlay (popover modal)
        </dt-button>
      </template>
      <template #content>
        <div class="d-fs14 d-m0">
          <p
            v-if="content"
            v-html="content"
          />
          <div v-else>
            <dt-button
              @click="openWithOverlay = !openWithOverlay"
            >
              Click to close
            </dt-button>
          </div>
        </div>
      </template>
    </dt-popover>
    <dt-popover
      :open="openPopoverWithHeader"
      max-height="20rem"
      :fixed-header="true"
      :show-close-button="true"
      content-class="d-pl12 d-pr16"
      width-content="anchor"
      class="d-mr12"
      @update:open="openPopoverWithHeader = $event"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="openPopoverWithHeader = !openPopoverWithHeader"
        >
          With header
        </dt-button>
      </template>
      <template #content>
        <div class="d-fs14 d-m0">
          <div>
            <dt-button
              @click="openPopoverWithHeader = !openPopoverWithHeader"
            >
              Click to close
            </dt-button>
          </div>
        </div>
      </template>
      <template #header-actions>
        <dt-button
          circle
          class="d-p6 d-bc-transparent"
          importance="outlined"
        >
          <template #icon>
            <icon-launch
              class="d-svg--size20"
            />
          </template>
        </dt-button>

        <dt-button
          circle
          class="d-p6 d-bc-transparent"
          importance="outlined"
        >
          <template #icon>
            <icon-menu-vertical
              class="d-svg--size20"
            />
          </template>
        </dt-button>
      </template>
      <template #title>
        <p>
          Potential Title
        </p>
      </template>
    </dt-popover>
  </div>
</template>

<script>
import { DtPopover } from './';
import { DtButton } from '../button';
import IconMenuVertical from '@dialpad/dialtone/lib/dist/vue/icons/IconMenuVertical';
import IconLaunch from '@dialpad/dialtone/lib/dist/vue/icons/IconLaunch';

export default {
  name: 'PopoverDefaultStory',
  components: {
    DtPopover,
    DtButton,
    IconMenuVertical,
    IconLaunch,
  },

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      openAlignmentRight: false,
      openWithOverlay: false,
      openPopoverWithHeader: false,
      openPopoverWithNoPadding: false,
      isOpen: this.open || false,
    };
  },

  watch: {
    open (isOpen) {
      this.isOpen = isOpen;
    },
  },
};
</script>
