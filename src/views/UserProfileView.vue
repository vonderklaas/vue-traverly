<template>
  <div class="about">
    <h1>User</h1>
    <p>{{ fullName }}</p>
    <p>From {{ state.user.origin }}</p>
    <p>@{{ state.user.username }}</p>
    <p>Email: {{ state.user.email }}</p>
    <div>
      <h3>Follows</h3>
      <p :key="follower" v-for="follower in state.user.follows">
        <router-link
          :to="{ name: 'User Profile', params: { username: follower } }"
          >@{{ follower }}</router-link
        >
      </p>
    </div>
    <div>
      <h3>Followers</h3>
      <p :key="follower" v-for="follower in state.user.followers">
        <router-link
          :to="{ name: 'User Profile', params: { username: follower } }"
          >@{{ follower }}</router-link
        >
      </p>
    </div>

    <ul>
      <h2>Visited</h2>
      <li :key="country" v-for="country in state.user.countriesVisited">
        <router-link :to="{ name: 'Country', params: { name: country.name } }">
          {{ country.name }}
        </router-link>
      </li>
    </ul>
    <ul>
      <h2>Want to visit</h2>
      <li :key="country.abbr" v-for="country in state.user.wantToVisit">
        <router-link :to="{ name: 'Country', params: { name: country.name } }">
          {{ country.name }}
        </router-link>
      </li>
    </ul>
    <h2 class="posts">Posts</h2>
    <div class="post" :key="post.id" v-for="post in state.user.posts">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
      <p>Likes {{ post.likes }}</p>
      <button @click="likePost(post.id)">Like</button>
    </div>
  </div>
</template>

<script>
import { users } from '@/assets/users';
import { reactive, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'UserProfileView',
  setup() {
    const route = useRoute();

    const state = reactive({
      user: {},
    });
    const paramsUsername = computed(() => route.params.username);
    const fullName = computed(
      () => `${state.user.firstName} ${state.user.lastName}`
    );

    function getUser() {
      return users.filter((user) => {
        if (user.username === paramsUsername.value) {
          state.user = user;
        }
      });
    }

    function likePost(id) {
      const selectedPost = state.user.posts.filter((post) => post.id === id);
      selectedPost[0].likes++;
    }
    onMounted(() => {
      getUser();
    });

    return {
      state,
      fullName,
      likePost,
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
.posts {
  display: flex;
}
.post {
  background-color: #ddd;
}
</style>
