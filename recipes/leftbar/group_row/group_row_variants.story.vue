<template>
  <div class="d-stack16 d-w464">
    <div>
      <p class="d-fw-bold">
        Default behavior
      </p>
      <dt-recipe-group-row
        class="d-pt8"
        avatar-initials="JN"
        :group-count="2"
        names="Jaqueline Nackos, Lori Smith"
        :avatar-src="avatarSrc"
      />
    </div>

    <div>
      <p class="d-fw-bold">
        Ellipsed names
      </p>
      <dt-recipe-group-row
        class="d-pt8"
        avatar-initials="JN"
        :group-count="4"
        names="Jaqueline Nackos, Lori Smith, Jaqueline Nackos, Lori Smith"
        :avatar-src="avatarSrc"
      />
    </div>

    <div>
      <p class="d-fw-bold">
        With unread count
      </p>
      <dt-recipe-group-row
        class="d-pt8"
        avatar-initials="JN"
        :group-count="2"
        names="Jaqueline Nackos, Lori Smith"
        :avatar-src="avatarSrc"
        unread-count="1"
      />
    </div>

    <div>
      <p class="d-fw-bold">
        Selected
      </p>
      <dt-recipe-group-row
        class="d-pt8"
        avatar-initials="JN"
        :group-count="2"
        names="Jaqueline Nackos, Lori Smith"
        :avatar-src="avatarSrc"
        selected
      />
    </div>

    <div>
      <p class="d-fw-bold">
        With Initial as fallback when avatar image src cannot be found.
      </p>
      <dt-recipe-group-row
        class="d-pt8"
        avatar-initials="JN"
        :group-count="2"
        names="Jaqueline Nackos, Lori Smith"
        avatar-src="/static/media/../components/avatar/404"
      />
    </div>
  </div>
</template>

<script>
import DtRecipeGroupRow from './group_row';

export default {
  name: 'DtRecipeGroupRowVariants',
  components: { DtRecipeGroupRow },
};
</script>
