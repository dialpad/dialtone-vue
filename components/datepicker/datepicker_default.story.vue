<template>
  <div>
    <dt-datepicker
      :selected-date="date"
      @selected-date="date = $event"
    />
  </div>
</template>

<script>
import DtDatepicker from './datepicker.vue';

export default {
  name: 'DtDatepickerDefault',
  components: { DtDatepicker },

  data () {
    return {
      date: new Date(),
    };
  },
};
</script>
