import Vue from 'vue';
import VueRouter from 'vue-router';

import Menu from '../components/Menu';
import TestLayout from '../components/TestLayout';

Vue.use(VueRouter);

const Router = new VueRouter({
  routes: [
    {
      name: 'Menu',
      path: '/',
      component: Menu
    },
    {
      name: 'Tests',
      path: '/test/:test',
      component: TestLayout,
      props: true
    }
  ]
});

export default Router;
