<template>
  <div class="user">
    <img
      class="user__image"
      :src="state.profile.profilePicture"
      :alt="state.profile.username"
    />
    <h1 class="user__username">@{{ state.profile.username }}</h1>
    <div class="user__bio">
      <p>Email: {{ state.profile.email }}</p>
      <p>Bio: {{ state.profile.biography }}</p>
      <p>From: {{ state.profile.origin }}</p>
    </div>
    <div class="user__following">
      <h4>Following</h4>
      <router-link
        v-for="user in state.profile.following"
        :key="user.id"
        :to="{ name: 'User', params: { id: user.id } }"
      >
        @{{ user.username }}
      </router-link>
    </div>
    <div class="user__followers">
      <h4>Followers</h4>
      <router-link
        v-for="user in state.profile.followers"
        :key="user.id"
        :to="{ name: 'User', params: { id: user.id } }"
      >
        @{{ user.username }}
      </router-link>
    </div>
    <div class="user__visited">
      <h4>Visited</h4>
      <router-link
        v-for="country in state.profile.visited"
        :key="country.abbr"
        :to="{ name: 'Country', params: { name: country.name } }"
      >
        {{ country.name }}
      </router-link>
    </div>
    <div class="user__wishes">
      <h4>Wishes</h4>
      <router-link
        v-for="country in state.profile.wishes"
        :key="country.abbr"
        :to="{ name: 'Country', params: { name: country.name } }"
      >
        {{ country.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue';

export default {
  name: 'Profile',
  setup() {
    const state = reactive({
      profile: {},
    });

    onMounted(async () => {
      const response = await fetch(`http://localhost:3000/profile`);
      const profileUser = await response.json();
      state.profile = profileUser;
    });

    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.user {
  &__image {
    // border: 1px solid black;
  }
  &__username {
    color: #42b983;
    // border: 1px solid black;
  }
  &__bio {
    color: #2c3e50;
    // border: 1px solid black;
  }
  &__following {
    // border: 1px solid black;
  }
  &__followers {
    // border: 1px solid black;
  }
  &__visited {
    // border: 1px solid black;
  }
  &__wishes {
    // border: 1px solid black;
  }
}
</style>
