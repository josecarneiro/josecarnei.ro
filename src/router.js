import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import HomeView from '@/views/home';
const ErrorView = () =>
  import(/* webpackChunkName: "error" */ '@/views/error.vue');

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/error/:status', name: 'error', props: true, component: ErrorView },
  { path: '*', redirect: { name: 'error', params: { status: 404 } } }
];

export default new Router({
  mode: 'history',
  routes
});
