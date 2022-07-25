import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UsersView from '../views/UsersView.vue';
import UserProfileView from '../views/UserProfileView.vue';
import AboutView from '../views/AboutView.vue';
import CountriesView from '../views/CountriesView.vue';
import CountryView from '../views/CountryView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/users',
    name: 'All Users',
    component: UsersView,
  },
  {
    path: '/users/:username',
    name: 'User Profile',
    component: UserProfileView,
  },
  {
    path: '/countries',
    name: 'Countries',
    component: CountriesView,
  },
  {
    path: '/countries/:name',
    name: 'Country',
    component: CountryView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
