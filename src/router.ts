import VueRouter, { RouteConfig, Route } from 'vue-router';
import HomePage from '@/pages/home.vue';

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes,
  scrollBehavior(to: Route, from: Route, savedPosition) {
    return savedPosition ? savedPosition : { x: 0, y: 0 };
  },
});
