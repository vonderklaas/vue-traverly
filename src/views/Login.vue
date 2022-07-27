<template>
  <h1>Login</h1>
  <form @submit.prevent="handleLogin">
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
    <input type="submit" value="Login" />
  </form>
</template>

<script>
import { useRouter } from 'vue-router';
import { reactive } from 'vue';

export default {
  name: 'Login',
  setup() {
    const router = useRouter();
    const state = reactive({
      email: '',
      password: '',
      user: {},
    });

    function handleLogin() {
      console.log(`Username: ${state.username}`);
      console.log(`Email: ${state.email}`);
      console.log(`Password: ${state.password}`);
      setTimeout(() => {
        router.push('/login');
      }, 1000);
    }

    return {
      state,
      handleLogin,
    };
  },
};
</script>
