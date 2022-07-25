<template>
  <div class="about">
    <h1>User</h1>
    <p>@{{ state.user.username }}</p>
    <p>Email: {{ state.user.email }}</p>
    <p>Bio: {{ state.user.biography }}</p>
    <p>From: {{ state.user.origin }}</p>
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
      <h3>Visited</h3>
      <li :key="country" v-for="country in state.user.countriesVisited">
        <router-link :to="{ name: 'Country', params: { name: country } }">
          {{ country }}
        </router-link>
      </li>
    </ul>
    <ul>
      <h3>Want to visit</h3>
      <li :key="country" v-for="country in state.user.countriesWishes">
        <router-link :to="{ name: 'Country', params: { name: country } }">
          {{ country }}
        </router-link>
      </li>
    </ul>
    <h3 class="posts">Posts</h3>
    <div class="post" :key="post.id" v-for="post in state.user.posts">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
      <p>Likes {{ post.likes }}</p>
      <button @click="likePost(post.id)">Like</button>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'UserProfileView',
  setup() {
    const route = useRoute();
    const state = reactive({
      user: {},
    });
    const paramsId = computed(() => route.params.id);

    onMounted(async () => {
      const response = await fetch(
        `http://localhost:5000/api/users/${paramsId.value}`
      );
      const user = await response.json();
      console.log(user);
      state.user = user;
    });

    function likePost(id) {
      const selectedPost = state.user.posts.filter((post) => post.id === id);
      selectedPost[0].likes++;
    }

    return {
      state,
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
