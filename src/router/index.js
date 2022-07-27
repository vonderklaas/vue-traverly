import { createRouter, createWebHistory } from 'vue-router';

// Views
import About from '../views/About.vue';
import Countries from '../views/Countries.vue';
import Country from '../views/Country.vue';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import User from '../views/User.vue';
import Users from '../views/Users.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/users/:id',
    name: 'User',
    component: User,
  },
  {
    path: '/countries',
    name: 'Countries',
    component: Countries,
  },
  {
    path: '/countries/:name',
    name: 'Country',
    component: Country,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
