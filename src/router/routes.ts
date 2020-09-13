import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      icon: 'home'
    }
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import(/* webpackChunkName: "about" */ '../views/Resources.vue'),
    meta: {
      icon: 'resources'
    }
  }
];
