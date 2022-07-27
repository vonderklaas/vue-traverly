<template>
  <div class="user">
    <img
      class="user__image"
      :src="state.user.profilePicture"
      :alt="state.user.username"
    />
    <h1 class="user__username">@{{ state.user.username }}</h1>
    <div class="user__bio">
      <p>Email: {{ state.user.email }}</p>
      <p>Bio: {{ state.user.biography }}</p>
      <p>From: {{ state.user.origin }}</p>
    </div>
    <div class="user__following">
      <h3>Following</h3>
      <router-link
        v-for="user in state.user.following"
        :key="user.id"
        :to="{ name: 'User', params: { id: user.id } }"
      >
        @{{ user.username }}
      </router-link>
    </div>
    <div class="user__followers">
      <h3>Followers</h3>
      <router-link
        v-for="user in state.user.followers"
        :key="user.id"
        :to="{ name: 'User', params: { id: user.id } }"
      >
        @{{ user.username }}
      </router-link>
    </div>
    <div class="user__visited">
      <h3>Visited</h3>
      <router-link
        v-for="country in state.user.visited"
        :key="country.abbr"
        :to="{ name: 'Country', params: { name: country.name } }"
      >
        {{ country.name }}
      </router-link>
    </div>
    <div class="user__wishes">
      <h3>Wishes</h3>
      <router-link
        v-for="country in state.user.wishes"
        :key="country.abbr"
        :to="{ name: 'Country', params: { name: country.name } }"
      >
        {{ country.name }}
      </router-link>
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
.user {
  &__image {
    border: 1px solid black;
  }
  &__username {
    color: #42b983;
    border: 1px solid black;
  }
  &__bio {
    color: #2c3e50;
    border: 1px solid black;
  }
  &__following {
    border: 1px solid black;
  }
  &__followers {
    border: 1px solid black;
  }
  &__visited {
    border: 1px solid black;
  }
  &__wishes {
    border: 1px solid black;
  }
}
</style>
