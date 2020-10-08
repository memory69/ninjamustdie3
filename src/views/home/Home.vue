<template>
  <div class="home">
    <home-header></home-header>
    <img class="logo" src="../../assets/logo.jpg" alt="" />
    <van-tabs v-model="active">
      <van-tab title="最新">
        <home-swiper></home-swiper>
        <home-main></home-main>
      </van-tab>
      <van-tab title="公告">
        <home-announcement></home-announcement>
         <home-main></home-main>
      </van-tab>
      <van-tab title="活动">
        <home-active></home-active>
         <home-main></home-main>
      </van-tab>
      <van-tab title="攻略">
        <strategy-swiper></strategy-swiper>
         <home-main></home-main>
      </van-tab>
      <van-tab title="全部">
      </van-tab>
      <van-button type="primary" @click="information" style="position: absolute;top:0;right:0;background: white;border:0;color:black">全部</van-button> 
    </van-tabs>
    <div class="main">
      
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader';
import HomeSwiper from '../components/HomeSwiper'
import HomeMain from '../components/HomeMain'
import HomeAnnouncement from '../components/HomeAnnouncement'
import HomeActive from '../components/HomeActive'
import StrategySwiper from '../components/StrategySwiper'
export default {
  name: 'Home',
  data() {
    return {
      active: 0,
      
    };
  },
  methods:{
    information(){
      this.$router.push('/information')
    }
  },
  components:{
      HomeHeader,
      HomeSwiper,
      HomeMain,
      HomeAnnouncement,
      HomeActive,
      StrategySwiper
  }
  
};
</script>

<style scoped>
.home {
  margin-top: 50px;
  width: 100%;
  box-sizing: border-box;
  background: #f8f8f8;
  
  
}
.logo {
  width: 100%;
}

</style>
