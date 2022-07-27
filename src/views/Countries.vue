<template>
  <div>
    <h1>Countries</h1>
    <div>
      <p :key="index" v-for="(country, index) in state.countries">
        <router-link
          :to="{ name: 'Country', params: { name: country.name.common } }"
        >
          <span>{{ country.flag }}</span>
          <span>{{ country.name.common }}</span>
          <span>{{ country.alpha3Code }}</span>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';

export default {
  name: 'Countries',
  setup() {
    const state = reactive({
      countries: [],
    });
    onMounted(async () => {
      // Fetch all countries
      const response = await fetch(
        'https://restcountries.com/v3/all?fields=name,flag,alpha2Code'
      );
      const countries = await response.json();
      state.countries = countries;
    });

    return {
      state,
    };
  },
};
</script>
