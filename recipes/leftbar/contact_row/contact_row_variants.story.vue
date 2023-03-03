<template>
  <div class="d-w464">
    <dt-stack gap="600">
      <div>
        <h3>
          With user status
        </h3>
        <dt-recipe-contact-row
          name="Jaqueline Nackos"
          :avatar-src="defaultImage"
          avatar-presence="active"
          user-status="Good Morning!"
        />
      </div>
      <div>
        <h3>
          with away presence
        </h3>
        <dt-recipe-contact-row
          name="Jaqueline Nackos"
          avatar-presence="away"
          presence-text="Away"
          user-status="Out for a bit"
          :avatar-src="defaultImage"
        />
      </div>
      <div>
        <h3>
          with busy presence
        </h3>
        <dt-recipe-contact-row
          name="Jaqueline Nackos"
          avatar-presence="busy"
          presence-text="In a meeting"
          user-status="Meetings all day"
          :avatar-src="defaultImage"
        />
      </div>
      <div>
        <h3>
          With unread count
        </h3>
        <dt-recipe-contact-row
          name="Jaqueline Nackos"
          :avatar-src="defaultImage"
          avatar-presence="active"
          unread-count="5"
          :has-unreads="true"
        />
      </div>
      <div>
        <h3>
          Selected
        </h3>
        <dt-recipe-contact-row
          name="Jaqueline Nackos"
          :avatar-src="defaultImage"
          avatar-presence="active"
          :selected="true"
        />
      </div>
      <div>
        <h3>
          With no image
        </h3>
        <dt-recipe-contact-row
          name="Jaqueline Nackos"
          avatar-presence="active"
        />
      </div>
    </dt-stack>
  </div>
</template>

<script>
import DtRecipeContactRow from './contact_row';
import { DtStack } from '@/components/stack';
const defaultImage = require('./../../../components/avatar/person.png');

export default {
  name: 'DtRecipeContactRowVariants',
  components: { DtRecipeContactRow, DtStack },
  data () {
    return {
      defaultImage,
    };
  },
};
</script>
