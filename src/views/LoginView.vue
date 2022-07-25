<template>
  <h1>Login</h1>
  <form @submit.prevent="handleLoginSubmit">
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
import axios from 'axios';
import { reactive } from 'vue';

export default {
  name: 'LoginView',
  setup() {
    const router = useRouter();
    const state = reactive({
      email: '',
      password: '',
      user: {},
    });

    function handleLoginSubmit() {
      axios
        .post('http://localhost:5000/api/auth/login', {
          email: state.email,
          password: state.password,
        })
        .then((response) => {
          console.log(response.data);
          state.user = response.data;
          console.log(state.user);
        })
        .catch((error) => {
          console.log('error: ' + error);
        });

      router.push('/');
    }

    return {
      state,
      handleLoginSubmit,
    };
  },
};
</script>
