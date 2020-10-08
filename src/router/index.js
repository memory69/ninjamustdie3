import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/home/Home.vue';
const Home = () => import('../views/home/Home.vue');
// import Strategy from '../views/strategy/Strategy.vue';
const Strategy = () => import('../views/strategy/Strategy.vue');
// import Information from '../views/information/Information.vue';
const Information = () => import('../views/information/Information.vue');
// import EndureRecord from '../views/endurerecord/EndureRecord.vue';
const EndureRecord = () => import('../views/endurerecord/EndureRecord.vue');
// import AudioVisual from '../views/audiovisual/AudioVisual.vue';
const AudioVisual = () => import('../views/audiovisual/AudioVisual.vue');
// import Test from '../views/test.vue';
const Test = () => import('../views/test.vue');
// import Shop from '../views/shop/Shop.vue';
const Shop = () => import('../views/shop/Shop.vue');
// import Shopping from '../views/shop/shopbaby/Shopping.vue';
const Shopping = () => import('../views/shop/shopbaby/Shopping.vue');
// import InformationShow from '../views/information/IformationShow.vue';
const InformationShow = () => import('../views/information/IformationShow.vue');
// import ShopNews from '../views/shop/shopnews/ShopNews.vue';
const ShopNews = () => import('../views/shop/shopnews/ShopNews.vue');
// import Fan from '../views/fan/Fan.vue';
const Fan = () => import('../views/fan/Fan.vue');
// import StrategyShow from '../views/strategy/StrategyShow.vue';
const StrategyShow = () => import('../views/strategy/StrategyShow.vue');
// import ShopAddress from '../views/shop/shopaddress/ShopAddress.vue';
const ShopAddress = () => import('../views/shop/shopaddress/ShopAddress.vue');
// import ShopAdd from '../views/shop/shopaddress/ShopAdd.vue';
const ShopAdd = () => import('../views/shop/shopaddress/ShopAdd.vue');
// import { join } from 'core-js/fn/array';
// import Join from '../views/join/Join.vue';
const Join = () => import('../views/join/Join.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
  {
    path: '/strategy',
    name: 'Strategy',
    component: Strategy,
  },
  {
    path: '/strategyshow/:id',
    name: 'StrategyShow',
    component: StrategyShow,
  },
  {
    path: '/information',
    name: 'Information',
    component: Information,
  },
  {
    path: '/informationshow/:id',
    name: 'InformationShow',
    component: InformationShow,
  },
  {
    path: '/endurerecord',
    name: 'EndureRecord',
    component: EndureRecord,
  },
  {
    path: '/audiovisual',
    name: 'AudioVisual',
    component: AudioVisual,
  },
  {
    path: '/fan',
    name: 'Fan',
    component: Fan,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/shopadd',
    name: 'ShopAdd',
    component: ShopAdd,
  },
  {
    path: '/shopaddress',
    name: 'ShopAddress',
    component: ShopAddress,
  },
  {
    path: '/shopnews',
    name: 'ShopNews',
    component: ShopNews,
  },
  {
    path: '/shopping/:id',
    name: 'Shopping',
    component: Shopping,
  },
  {
    path: '/join',
    name: 'Join',
    component: Join,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
