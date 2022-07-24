<template>
  <div class="about">
    <h1>Users</h1>
    <div :key="user.id" v-for="user in users">
      <router-link :to="{ name: 'User Profile', params: { id: user.id } }">{{
        user.username
      }}</router-link>
    </div>
  </div>
</template>

<script>
import { users } from '@/assets/users';

export default {
  name: 'UsersView',
  setup() {
    return {
      users,
    };
  },
};
</script>
