import VueRouter from 'vue-router';

import HomePage from './pages/HomePage';
import ApartmentPage from './pages/ApartmentPage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import Foo from './pages/Foo';
import Bar from './pages/Bar';

const routes = [
  {
    path: '/foo',
    component: Foo,
  },
  {
    path: '/bar',
    component: Bar,
  },
  {
    path: '/',
    component: HomePage,
    name: 'home-page',
  },
  {
    path: '/apartment/:id',
    component: ApartmentPage,
    name: 'apartment',
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'login-page',
  },
  {
    path: '*',
    component: ErrorPage,
    name: 'error-page',
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
