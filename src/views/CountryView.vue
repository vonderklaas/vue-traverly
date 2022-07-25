<template>
  <div class="about">
    <h1>{{ state.country.name }}</h1>
    <p>Bla bla bla</p>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'CountryView',

  setup() {
    const route = useRoute();
    const state = reactive({
      country: {},
    });
    const countryUrl = computed(() => route.params.name);

    onMounted(async () => {
      const response = await fetch(
        `https://restcountries.com/v3/name/${countryUrl.value.toLowerCase()}`
      );
      const country = await response.json();
      state.country = country[0];
    });

    return {
      state,
    };
  },
};
</script>
