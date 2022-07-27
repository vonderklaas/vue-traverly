<template>
  <div class="about">
    <h1>Users</h1>
    <div :key="user.id" v-for="user in state.users">
      <router-link :to="{ name: 'User', params: { id: user.id } }">{{
        user.username
      }}</router-link>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue';

export default {
  name: 'Users',
  setup() {
    let state = reactive({
      users: [],
    });
    onMounted(async () => {
      // Fetch all users
      const response = await fetch('http://localhost:3000/users');
      const users = await response.json();
      state.users = users;
    });

    return {
      state,
    };
  },
};
</script>
