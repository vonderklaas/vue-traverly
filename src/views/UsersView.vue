<template>
  <div class="about">
    <h1>Users</h1>
    <div :key="user.id" v-for="user in state.users">
      <router-link :to="{ name: 'User Profile', params: { id: user._id } }">{{
        user.username
      }}</router-link>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue';

export default {
  setup() {
    let state = reactive({
      users: [],
    });
    onMounted(async () => {
      const response = await fetch('http://localhost:5000/api/users');
      const users = await response.json();
      state.users = users;
    });

    return {
      state,
    };
  },
};
</script>
