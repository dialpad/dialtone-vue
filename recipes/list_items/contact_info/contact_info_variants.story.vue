<!-- Use this template story to allow the user control the component's props and slots -->
<template>
  <div class="d-divide-y d-divide-purple-400">
    <div class="d-m32">
      <p class="d-my16 d-ml48 d-fs14 d-fw-bold">
        Unknown contact (phone number only) with attestation
      </p>
      <dt-recipe-contact-info
        :phone-number="phoneNumber"
        show-attestation
        @click="onClick"
      >
        <template #subtitle>
          San Francisco, California
        </template>
      </dt-recipe-contact-info>
    </div>
    <div class="d-m32">
      <p class="d-my16 d-ml48 d-fs14 d-fw-bold">
        Unknown contact with "marked as spam" button
      </p>
      <dt-recipe-contact-info
        :phone-number="phoneNumber"
        @click="onClick"
      >
        <template #subtitle>
          <div
            class="d-fc-red-500"
            @click.stop="onMarkAsSpam"
          >
            Mark as spam
          </div>
        </template>
      </dt-recipe-contact-info>
    </div>
    <div class="d-m32">
      <p class="d-my16 d-ml48 d-fs14 d-fw-bold">
        Group contact
      </p>
      <dt-recipe-contact-info
        :display-name="displayName"
        :phone-number="phoneNumber"
        :group-name="groupName"
        :group-color-class="groupColorClass"
        show-attestation
        @click="onClick"
      />
    </div>
    <div class="d-m32">
      <p class="d-my16 d-ml48 d-fs14 d-fw-bold">
        Group contact with transfer info
      </p>
      <dt-recipe-contact-info
        :display-name="displayName"
        :phone-number="phoneNumber"
        :group-name="groupName"
        :group-color-class="groupColorClass"
        show-attestation
        @click="onClick"
      >
        <template #bottom>
          <div class="d-fw-bold d-fs11">
            • Transfer from Billing Support
          </div>
        </template>
      </dt-recipe-contact-info>
    </div>
    <div class="d-m32">
      <p class="d-my16 d-ml48 d-fs14 d-fw-bold">
        Admin view / listening in
      </p>
      <dt-recipe-contact-info
        :display-name="displayName"
        :phone-number="phoneNumber"
        :group-name="groupName"
        :group-color-class="groupColorClass"
        show-attestation
        @click="onClick"
      >
        <template #header>
          <div class="d-fw-bold d-fs16">
            & Justin H.
          </div>
          <div class="d-fs16">
            (Agent)
          </div>
        </template>
      </dt-recipe-contact-info>
    </div>
    <div class="d-m32">
      <p class="d-my16 d-ml48 d-fs14 d-fw-bold">
        Contact with items in right slot
      </p>
      <dt-recipe-contact-info
        :display-name="displayName"
        :phone-number="phoneNumber"
        :avatar-initials="avatarInitials"
        :avatar-color="avatarColor"
        @click="onClick"
      >
        <template #right>
          <div class="d-d-flex d-ai-center d-m16">
            <icon-chat class="d-m4" />
            <icon-menu-horizontal class="d-m4" />
            <div class="d-m4">
              0:32
            </div>
          </div>
        </template>
        <template #bottom>
          2 matches found.
          <dt-button
            link
            @click.stop="onConnectToARecord"
          >
            Connect to a record
          </dt-button>
        </template>
      </dt-recipe-contact-info>
    </div>
  </div>
</template>

<script>
import DtRecipeContactInfo from './contact_info';
import DtButton from '@/components/button/button';
import IconChat from '@dialpad/dialtone/lib/dist/vue/icons/IconChat.vue';
import IconMenuHorizontal from '@dialpad/dialtone/lib/dist/vue/icons/IconMenuHorizontal.vue';

export default {
  name: 'DtRecipeContactInfoVariants',
  components: { IconChat, IconMenuHorizontal, DtButton, DtRecipeContactInfo },
};
</script>
