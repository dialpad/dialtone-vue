<template>
  <div class="d-w464">
    <dt-stack gap="600">
      <div>
        <h3>
          With user status
        </h3>
        <dt-recipe-contact-row
          name="Jaqueline Nackos"
          avatar-src="static/media/../components/avatar/person.png"
          avatar-presence="active"
          presence-text="active"
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
          presence-text="away"
          user-status="Out for a bit"
          avatar-src="static/media/../components/avatar/person.png"
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
          avatar-src="static/media/../components/avatar/person.png"
        />
      </div>
      <div>
        <h3>
          With unread count
        </h3>
        <dt-recipe-contact-row
          name="Jaqueline Nackos"
          avatar-src="static/media/../components/avatar/person.png"
          avatar-presence="active"
          presence-text="active"
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
          avatar-src="static/media/../components/avatar/person.png"
          avatar-presence="active"
          presence-text="active"
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
          presence-text="active"
        />
      </div>
    </dt-stack>
  </div>
</template>

<script>
import DtRecipeContactRow from './contact_row';
import { DtStack } from '@/components/stack';

export default {
  name: 'DtRecipeContactRowVariants',
  components: { DtRecipeContactRow, DtStack },
};
</script>
