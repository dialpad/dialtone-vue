<!-- eslint-disable vue/no-unregistered-components -->
<template>
  <div class="d-stack16">
    <h3>Normal</h3>
    <div class="d-d-flex d-flow16 d-fw-wrap d-stack16">
      <dt-recipe-call-bar-button class="d-mt16">
        Screenshare
        <template #icon>
          <icon-screenshare-off />
        </template>
        <template #tooltip>
          Share screen
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button>
        Record
        <template #icon>
          <icon-recording />
        </template>
        <template #tooltip>
          Record
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button>
        Mute
        <template #icon>
          <icon-mic-on />
        </template>
        <template #tooltip>
          Mute mic
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button>
        Hold
        <template #icon>
          <icon-pause />
        </template>
        <template #tooltip>
          Place on hold
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button>
        Assist
        <template #icon>
          <icon-vi-off />
        </template>
        <template #tooltip>
          Enable Assistant
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button>
        Transcript
        <template #icon>
          <icon-transcript />
        </template>
        <template #tooltip>
          View transcript
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button>
        Transfer
        <template #icon>
          <icon-phone-transfer />
        </template>
        <template #tooltip>
          Transfer call
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button>
        Park
        <template #icon>
          <icon-park />
        </template>
        <template #tooltip>
          Park call to mainline
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button>
        More
        <template #icon>
          <icon-menu-horizontal />
        </template>
        <template #tooltip>
          More options
        </template>
      </dt-recipe-call-bar-button>
    </div>

    <h3>Active</h3>
    <div class="d-d-flex d-flow16 d-fw-wrap d-stack16">
      <dt-recipe-call-bar-button
        active
        danger
        class="d-mt16"
      >
        Stop
        <template #icon>
          <icon-screenshare />
        </template>
        <template #tooltip>
          Stop sharing
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button
        active
        danger
      >
        Stop Rec
        <template #icon>
          <icon-recording-off />
        </template>
        <template #tooltip>
          Stop recording
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button
        active
        danger
      >
        Unmute
        <template #icon>
          <icon-mic-off />
        </template>
        <template #tooltip>
          Unmute mic
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button
        active
        danger
      >
        Unhold
        <template #icon>
          <icon-pause />
        </template>
        <template #tooltip>
          Resume call
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button
        active
        danger
      >
        Assist Off
        <template #icon>
          <icon-vi-glyph />
        </template>
        <template #tooltip>
          Disable Assistant
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button active>
        Transcript
        <template #icon>
          <icon-transcript />
        </template>
        <template #tooltip>
          View transcript
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button active>
        Transfer
        <template #icon>
          <icon-phone-transfer />
        </template>
        <template #tooltip>
          Transfer call
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button active>
        Park
        <template #icon>
          <icon-park />
        </template>
        <template #tooltip>
          Park call to mainline
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button active>
        More
        <template #icon>
          <icon-menu-horizontal />
        </template>
        <template #tooltip>
          More options
        </template>
      </dt-recipe-call-bar-button>
    </div>
  </div>
</template>

<script>
import DtRecipeCallBarButton from './call_bar_button';
import icon from '@/common/mixins/icon';

export default {
  name: 'DtRecipeCallBarButtonCallBar',
  components: { DtRecipeCallBarButton },
  mixins: [icon],
};
</script>
