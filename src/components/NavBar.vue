<template>
  <nav>
    <router-link to="/">Traverly</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/countries">Country Groups</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  a {
    color: #2c3e50;
    text-decoration: none;
    margin: 0 15px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
