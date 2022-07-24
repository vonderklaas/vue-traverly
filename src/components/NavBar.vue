<template>
  <nav>
    <router-link to="/">Traverly</router-link> |
    <router-link to="/users">Users</router-link> |
    <router-link to="/countries">Country Groups</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
