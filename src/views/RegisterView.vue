<template>
  <h1>Register</h1>
  <form @submit.prevent="handleRegisterSubmit">
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
import axios from 'axios';
import { reactive } from 'vue';

export default {
  name: 'RegisterView',
  setup() {
    const router = useRouter();
    const state = reactive({
      username: '',
      email: '',
      password: '',
      user: {},
    });

    function handleRegisterSubmit() {
      axios
        .post('http://localhost:5000/api/auth/register', {
          username: state.username,
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

      router.push('/login');
    }

    return {
      state,
      handleRegisterSubmit,
    };
  },
};
</script>
