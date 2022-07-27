<template>
  <UserCard :state="state" />
</template>

<script>
import UserCard from '@/components/UserCard.vue';
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
        `http://localhost:3000/users/${paramsId.value}`
      );
      const user = await response.json();
      console.log(user);
      state.user = user;
    });

    return {
      state,
    };
  },
  components: {
    UserCard,
  },
};
</script>
