<template>
  <div class="about">
    <h1>{{ country }}</h1>
    <p>Bla bla bla</p>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'CountryGroup',

  setup() {
    const route = useRoute();

    const state = reactive({
      country: {},
    });
    const country = computed(() => route.params.name);

    console.log(country.value);

    return {
      state,
      country,
    };
  },
};
</script>
