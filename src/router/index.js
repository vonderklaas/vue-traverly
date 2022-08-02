import { createRouter, createWebHistory } from 'vue-router';

import About from '../views/About.vue';
import Countries from '../views/Countries.vue';
import Country from '../views/Country.vue';
import Home from '../views/Home.vue';
import User from '../views/User.vue';
import Users from '../views/Users.vue';
import Profile from '../views/Profile.vue';

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
    path: '/profile',
    name: 'Profile',
    component: Profile,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
