<template>
  <div class="d-d-flex d-fw-wrap d-w100p d-flg12 d-fl-col3">
    <!-- Top Start toast -->
    <dt-toast
      class="d-jc-center"
      :show="showTopStartToast"
      placement="top-start"
      title="Top Start Toast"
      message="Custom message"
      @close="showTopStartToast = false"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="showTopStartToast = true"
        >
          Click to open top start toast
        </dt-button>
      </template>
    </dt-toast>
    <!-- Top Center toast -->
    <dt-toast
      class="d-jc-center"
      :show="showTopCenterToast"
      placement="top-center"
      title="Top Center Toast"
      message="Custom message"
      @close="showTopCenterToast = false"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="showTopCenterToast = true"
        >
          Click to open top center toast
        </dt-button>
      </template>
    </dt-toast>
    <!-- Top End toast -->
    <dt-toast
      class="d-jc-center"
      :show="showTopEndToast"
      placement="top-end"
      title="Top End Toast"
      message="Custom message"
      @close="showTopEndToast = false"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="showTopEndToast = true"
        >
          Click to open top end toast
        </dt-button>
      </template>
    </dt-toast>
    <!-- Middle Start toast -->
    <dt-toast
      class="d-jc-center"
      :show="showMiddleStartToast"
      placement="middle-start"
      title="Middle Start Toast"
      message="Custom message"
      @close="showMiddleStartToast = false"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="showMiddleStartToast = true"
        >
          Click to open middle start toast
        </dt-button>
      </template>
    </dt-toast>
    <!-- Middle Center toast -->
    <dt-toast
      class="d-jc-center"
      :show="showMiddleCenterToast"
      placement="middle-center"
      title="Middle Center Toast"
      message="Custom message"
      @close="showMiddleCenterToast = false"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="showMiddleCenterToast = true"
        >
          Click to open middle center toast
        </dt-button>
      </template>
    </dt-toast>
    <!-- Middle End toast -->
    <dt-toast
      class="d-jc-center"
      :show="showMiddleEndToast"
      placement="middle-end"
      title="Middle End Toast"
      message="Custom message"
      @close="showMiddleEndToast = false"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="showMiddleEndToast = true"
        >
          Click to open middle end toast
        </dt-button>
      </template>
    </dt-toast>
    <!-- Bottom Start toast -->
    <dt-toast
      class="d-jc-center"
      :show="showBottomStartToast"
      placement="bottom-start"
      title="Bottom Start Toast"
      message="Custom message"
      @close="showBottomStartToast = false"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="showBottomStartToast = true"
        >
          Click to open bottom start toast
        </dt-button>
      </template>
    </dt-toast>
    <!-- Bottom Center toast -->
    <dt-toast
      class="d-jc-center"
      :show="showBottomCenterToast"
      placement="bottom-center"
      title="Bottom Center Toast"
      message="Custom message"
      @close="showBottomCenterToast = false"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="showBottomCenterToast = true"
        >
          Click to open bottom center toast
        </dt-button>
      </template>
    </dt-toast>
    <!-- Bottom End toast -->
    <dt-toast
      class="d-jc-center"
      :show="showBottomEndToast"
      placement="bottom-end"
      title="Bottom End Toast"
      message="Custom message"
      @close="showBottomEndToast = false"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="showBottomEndToast = true"
        >
          Click to open bottom end toast
        </dt-button>
      </template>
    </dt-toast>
    <!-- Error -->
    <dt-toast
      class="d-jc-center"
      placement="bottom-center"
      title="Error title (optional)"
      kind="error"
      :show="showErrorToast"
      message="Custom error message"
      @close="showErrorToast = false"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="showErrorToast = true"
        >
          Click to open Error toast
        </dt-button>
      </template>
    </dt-toast>
    <!-- Info -->
    <dt-toast
      class="d-jc-center"
      placement="bottom-center"
      title="Info title (optional)"
      kind="info"
      :show="showInfoToast"
      message="Custom info message"
      @close="showInfoToast = false"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="showInfoToast = true"
        >
          Click to open Info toast
        </dt-button>
      </template>
    </dt-toast>
    <!-- Success -->
    <dt-toast
      class="d-jc-center"
      placement="bottom-center"
      title="Success title (optional)"
      kind="success"
      :show="showSuccessToast"
      message="Custom success message"
      @close="showSuccessToast = false"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="showSuccessToast = true"
        >
          Click to open Success toast
        </dt-button>
      </template>
    </dt-toast>
    <!-- Warning -->
    <dt-toast
      class="d-jc-center"
      placement="bottom-center"
      title="Warning title (optional)"
      kind="warning"
      :show="showWarningToast"
      message="Custom warning message"
      @close="showWarningToast = false"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="showWarningToast = true"
        >
          Click to open Warning toast
        </dt-button>
      </template>
    </dt-toast>
    <!-- Important -->
    <dt-toast
      class="d-jc-center"
      placement="bottom-center"
      title="Custom title (optional)"
      :important="true"
      :show="showImportantToast"
      message="Custom important message"
      @close="showImportantToast = false"
    >
      <template #anchor="{ attrs }">
        <dt-button
          v-bind="attrs"
          @click="showImportantToast = true"
        >
          Click to open Important toast
        </dt-button>
      </template>
    </dt-toast>
  </div>
</template>

<script>
import { DtToast } from './';
import { DtButton } from '../button';

export default {
  name: 'PopoverDefaultStory',
  components: {
    DtToast,
    DtButton,
  },

  data () {
    return {
      showTopStartToast: false,
      showTopCenterToast: false,
      showTopEndToast: false,
      showMiddleStartToast: false,
      showMiddleCenterToast: false,
      showMiddleEndToast: false,
      showBottomStartToast: false,
      showBottomCenterToast: false,
      showBottomEndToast: false,
      showErrorToast: false,
      showInfoToast: false,
      showSuccessToast: false,
      showWarningToast: false,
      showImportantToast: false,
    };
  },
};
</script>
