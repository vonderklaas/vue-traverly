<template>
  <div class="user-card">
    <img
      class="user-card__image"
      :src="state.user.profilePicture"
      :alt="state.user.username"
    />
    <h1>@{{ state.user.username }}</h1>
    <p>Email: {{ state.user.email }}</p>
    <p>Bio: {{ state.user.biography }}</p>
    <p>From: {{ state.user.origin }}</p>
    <div>
      <h3>Follows</h3>
      <span :key="follower" v-for="follower in state.user.follows">
        <router-link :to="{ name: 'User', params: { username: follower } }"
          >@{{ follower }}</router-link
        >
      </span>
    </div>
    <div>
      <h3>Followers</h3>
      <span :key="follower" v-for="follower in state.user.followers">
        <router-link :to="{ name: 'User', params: { username: follower } }"
          >@{{ follower }}</router-link
        >
      </span>
    </div>
    <div>
      <h3>Visited</h3>
      <span :key="country" v-for="country in state.user.countriesVisited">
        <router-link :to="{ name: 'Country', params: { name: country } }">
          {{ country }}
        </router-link>
      </span>
    </div>
    <div>
      <h3>Want to visit</h3>
      <span :key="country" v-for="country in state.user.countriesWishes">
        <router-link :to="{ name: 'Country', params: { name: country } }">
          {{ country }}
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'User',
  setup() {
    const route = useRoute();
    const state = reactive({
      user: {},
    });
    const paramsId = computed(() => route.params.id);

    onMounted(async () => {
      // Fetch one user
      const response = await fetch(
        `http://localhost:3000/users/${paramsId.value}`
      );
      const user = await response.json();
      state.user = user;
    });

    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.user-card {
  &__image {
    max-width: 200px;
  }
}
</style>
