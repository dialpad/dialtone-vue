<template>
  <dt-stack
    :dir="dir"
    :as="as"
    :gap="gap"
  >
    <dt-card
      class="d-w264"
    >
      <template #content>
        <div>
          <p class="d-fs-200 d-fw-bold d-fc-black-800">
            1 = Lorem
          </p>
          <p class="d-fs-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </template>
    </dt-card>
    <dt-card
      class="d-w264"
    >
      <template #content>
        <div>
          <p class="d-fs-200 d-fw-bold d-fc-black-800">
            2 = Lorem ipsum
          </p>
          <p class="d-fs-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec fermentum molestie semper.
          </p>
        </div>
      </template>
    </dt-card>
    <dt-card
      class="d-w264"
    >
      <template #content>
        <div>
          <p class="d-fs-200 d-fw-bold d-fc-black-800">
            3 = Lorem ipsum dolor
          </p>
          <p class="d-fs-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum.
          </p>
        </div>
      </template>
    </dt-card>
  </dt-stack>
</template>

<script>
import DtStack from './stack';
import DtCard from '../card/card.vue';

export default {
  name: 'StackDefault',
  components: { DtStack, DtCard },
};
</script>
