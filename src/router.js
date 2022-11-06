import VueRouter from 'vue-router';

import HomePage from './pages/HomePage';
import ApartmentPage from './pages/ApartmentPage';
import MyOrdersPage from './pages/MyOrdersPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
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
    path: '/my-orders',
    component: MyOrdersPage,
    name: 'my-orders',
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'login-page',
  },
  {
    path: '/registration',
    component: RegistrationPage,
    name: 'registration-page',
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
