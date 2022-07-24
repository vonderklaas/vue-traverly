<template>
  <div class="about">
    <h1>User</h1>
    <p>{{ fullName }}</p>
    <p>From {{ state.user.origin }}</p>
    <p>@{{ state.user.username }}</p>
    <p>Email: {{ state.user.email }}</p>
    <ul>
      <h2>Visited</h2>
      <li :key="country" v-for="country in state.user.countriesVisited">
        {{ country.name }}
      </li>
    </ul>
    <ul>
      <h2>Want to visit</h2>
      <li :key="country.abbr" v-for="country in state.user.wantToVisit">
        {{ country.name }}
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
    const userId = computed(() => route.params.id);
    const fullName = computed(
      () => `${state.user.firstName} ${state.user.lastName}`
    );

    function getUser() {
      return users.filter((user) => {
        if (user.id === parseInt(userId.value)) {
          state.user = user;
        }
      });
    }

    function likePost(id) {
      console.log('Post id', id);
      const selectedPost = state.user.posts.filter((post) => post.id === id);
      selectedPost[0].likes++;
    }

    onMounted(() => {
      getUser();
    });

    return {
      state,
      fullName,
      userId,
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
