import Vue from 'vue'
import VueRouter from 'vue-router';

import Full1 from './components/Full1';
import Full2 from './components/Full2';
const routes = [
  { name: "full1", path: '/full1', component: Full1 },
  { name: "full2", path: '/full2', component: Full2 },
  { path: '*', redirect: { name: 'full1' } },
];
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

// import VueFullpageScroll from '@yosichikaw/vue-fullpage-scroll';
// Vue.use(VueFullpageScroll);
// for develop
import VueFullpageScroll from '../../src/vue-fullpage-scroll.vue';
Vue.component('VueFullpageScroll', VueFullpageScroll)

import Vue2TouchEvents from 'vue2-touch-events';
Vue.use(Vue2TouchEvents);

import App from './App.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
