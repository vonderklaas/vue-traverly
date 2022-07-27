<template>
  <div class="navbar">
    <div class="navbar__logo">
      <router-link to="/"><span>traverly</span></router-link>
    </div>
    <div class="navbar__search">
      <input type="text" placeholder="Looking for a friend?" />
    </div>
    <div class="navbar__links">
      <nav class="navbar__links-nav">
        <router-link to="/">Timeline</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/countries">Countries</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/login">Login</router-link>
      </nav>
      <div class="navbar__links-profile">
        <img
          src="https://randomuser.me/api/portraits/men/20.jpg"
          alt="Avatar"
        />
        <span>Galileo Galilei</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px 30px;

  &__logo {
    a {
      color: #42b983;
      text-decoration: none;
      cursor: pointer;
    }
  }

  &__search {
    input {
      border: 1px solid #ddd;
      width: 300px;
      border-radius: 5px;
      padding: 7.5px 10px;
    }
  }

  &__links {
    display: flex;
    align-items: center;
    justify-content: center;

    &-nav {
      a {
        color: #2c3e50;
        text-decoration: none;
        margin: 0 15px;
        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }

    &-profile {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 100px;

      img {
        width: 35px;
        height: 35px;
        border-radius: 50px;
        margin-right: 10px;
      }
    }
  }
}
</style>
