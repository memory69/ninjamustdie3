import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '../src/css/common.css';
import './assets/icon/iconfont/iconfont.css';

import { request } from './network/request';
Vue.prototype.request = request;

//areaList引入
import { Popup } from 'vant';
// Vue.use(Area);
Vue.use(Popup);

import VideoPlayer from 'vue-video-player';
Vue.use(VideoPlayer);

import '../node_modules/swiper/swiper-bundle.min.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

import Vant from 'vant';
import '../node_modules/vant/lib/index.css';
Vue.use(Vant);

import axios from 'axios';
Vue.prototype.$axios = axios;

import { Area } from 'vant';
Vue.use(Area);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
