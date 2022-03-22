<!-- Use this template story to allow the user control the component's props and slots -->
<template>
  <div class="d-stack16">
    <h3>
      Call Bar Buttons
    </h3>
    <div class="d-d-flex d-flow16 d-fw-wrap">
      <dt-recipe-call-bar-button>
        <template #label>
          Button
        </template>
        <template #icon>
          <icon-recording />
        </template>
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button>
        <template #icon>
          <icon-dialpad-glyph />
        </template>
        No tooltip
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button>
        Label only
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button>
        <template #icon>
          <icon-mic-on />
        </template>
        <template #tooltip>
          Icon only
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button disabled>
        <template #label>
          Disabled
        </template>
        <template #icon>
          <icon-mic-on />
        </template>
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-call-bar-button>
    </div>

    <h3>
      Active Call Bar Buttons
    </h3>
    <div class="d-d-flex d-flow16 d-fw-wrap">
      <dt-recipe-call-bar-button active>
        <template #label>
          Button
        </template>
        <template #icon>
          <icon-recording />
        </template>
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button active>
        <template #icon>
          <icon-dialpad-glyph />
        </template>
        No tooltip
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button active>
        Label only
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button active>
        <template #icon>
          <icon-mic-on />
        </template>
        <template #tooltip>
          Icon only
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button active disabled>
        <template #label>
          Disabled
        </template>
        <template #icon>
          <icon-mic-on />
        </template>
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-call-bar-button>
    </div>

    <h3>
      Danger Call Bar Buttons
    </h3>
    <div class="d-fs12">
      Danger Call Bar Buttons look the same as regular buttons; they only differ on their active state.
    </div>
    <div class="d-d-flex d-flow16 d-fw-wrap">
      <dt-recipe-call-bar-button danger>
        <template #label>
          Button
        </template>
        <template #icon>
          <icon-recording />
        </template>
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button danger>
        <template #icon>
          <icon-dialpad-glyph />
        </template>
        No tooltip
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button danger>
        Label only
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button danger>
        <template #icon>
          <icon-mic-on />
        </template>
        <template #tooltip>
          Icon only
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button disabled danger>
        <template #label>
          Disabled
        </template>
        <template #icon>
          <icon-mic-on />
        </template>
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-call-bar-button>
    </div>

    <h3>
      Danger Active Call Bar Buttons
    </h3>
    <div class="d-d-flex d-flow16 d-fw-wrap">
      <dt-recipe-call-bar-button active danger>
        <template #label>
          Button
        </template>
        <template #icon>
          <icon-recording />
        </template>
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button active danger>
        <template #icon>
          <icon-dialpad-glyph />
        </template>
        No tooltip
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button active danger>
        Label only
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button active danger>
        <template #icon>
          <icon-mic-on />
        </template>
        <template #tooltip>
          Icon only
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button active disabled danger>
        <template #label>
          Disabled
        </template>
        <template #icon>
          <icon-mic-on />
        </template>
        <template #tooltip>
          Tooltip
        </template>
      </dt-recipe-call-bar-button>
    </div>


    <h3>
      Rounded
    </h3>
    <div class="d-d-flex d-flow16 d-fw-wrap">
      <dt-recipe-call-bar-button circle>
        <template #icon>
          <icon-recording />
        </template>
        <template #tooltip>
          Rounded button
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button circle active>
        <template #icon>
          <icon-person />
        </template>
        <template #tooltip>
          Rounded active
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button circle danger>
        <template #icon>
          <icon-play />
        </template>
        <template #tooltip>
          Rounded danger
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button circle active danger>
        <template #icon>
          <icon-star />
        </template>
        <template #tooltip>
          Rounded danger active
        </template>
      </dt-recipe-call-bar-button>

      <dt-recipe-call-bar-button circle disabled>
        <template #icon>
          <icon-dialpad-glyph />
        </template>
        <template #tooltip>
          Rounded button
        </template>
      </dt-recipe-call-bar-button>
    </div>
  </div>
</template>

<script>
import DtRecipeCallBarButton from './call_bar_button';
import IconDialpadGlyph from '@dialpad/dialtone/lib/dist/vue/icons/IconDialpadGlyph';
import IconMicOn from '@dialpad/dialtone/lib/dist/vue/icons/IconMicOn';
import IconRecording from '@dialpad/dialtone/lib/dist/vue/icons/IconRecording';
import IconPerson from '@dialpad/dialtone/lib/dist/vue/icons/IconPerson';
import IconPlay from '@dialpad/dialtone/lib/dist/vue/icons/IconPlay';
import IconStar from '@dialpad/dialtone/lib/dist/vue/icons/IconStar';

export default {
  name: 'DtRecipeCallBarButtonVariants',
  components: {
    DtRecipeCallBarButton,
    IconDialpadGlyph,
    IconMicOn,
    IconRecording,
    IconPerson,
    IconPlay,
    IconStar
  },
};
</script>
