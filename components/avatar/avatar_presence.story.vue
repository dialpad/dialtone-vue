<template>
  <div>
    <div class="d-p8 d-d-flex d-ai-center">
      <dt-avatar
        color="purple-200"
        presence="active"
      >
        DP
      </dt-avatar>
    </div>

    <div class="d-p8 d-d-flex d-ai-center">
      <dt-avatar
        color="purple-200"
        presence="away"
      >
        <img
          data-qa="dt-avatar-image"
          src="./person.png"
          alt="Person Avatar"
        >
      </dt-avatar>
    </div>

    <div class="d-p8 d-d-flex d-ai-center">
      <dt-avatar
        color="purple-200"
        presence="busy"
      >
        CJ
      </dt-avatar>
    </div>

    <div class="d-p8 d-d-flex d-ai-center">
      <dt-avatar
        color="purple-200"
        presence="offline"
      >
        DS
      </dt-avatar>
    </div>
  </div>
</template>

<script>
import DtAvatar from './avatar';

export default {
  name: 'DtAvatarWithPresence',
  components: { DtAvatar },
};
</script>
