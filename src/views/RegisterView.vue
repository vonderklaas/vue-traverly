<template>
  <h1>Register</h1>
  <form @submit.prevent="handleRegister">
    <div>
      <label>
        Username
        <input v-model="state.username" type="text" required />
      </label>
    </div>
    <div>
      <label>
        Email
        <input v-model="state.email" type="email" required />
      </label>
    </div>
    <div>
      <label>
        Password
        <input v-model="state.password" type="password" required />
      </label>
    </div>
    <input type="submit" value="Register" />
  </form>
</template>

<script>
import { useRouter } from 'vue-router';
import { reactive } from 'vue';

export default {
  name: 'RegisterView',
  setup() {
    const router = useRouter();
    const state = reactive({
      username: '',
      email: '',
      password: '',
    });

    function handleRegister() {
      console.log(`Username: ${state.username}`);
      console.log(`Email: ${state.email}`);
      console.log(`Password: ${state.password}`);
      setTimeout(() => {
        router.push('/login');
      }, 1000);
    }

    return {
      state,
      handleRegister,
    };
  },
};
</script>
