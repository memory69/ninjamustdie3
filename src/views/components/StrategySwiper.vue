<template>
  <div class="home-swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="black">
      <van-swipe-item v-for="(item, i) in dt">
        <img :src="item.imgUrl" alt width="85%" />
        <p>{{ item.title }}</p>
        <p>{{ item.describe }}</p>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'StrategySwiper',
  data() {
    return {
      dt: [],
    };
  },
  created() {
    // this.$axios.get('/api/strategyswiper.json').then((res) => {
    //   //   console.log(res)
    //   const dt = res.data.data;
    //   this.dt = dt;
    //   // console.log(dt);
    // });
    this.request({
      url: '/strategyswiper.json',
    }).then((res) => (this.dt = res.data.data));
  },
};
</script>

<style scoped>
.home-swiper {
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}
.van-swipe-item p {
  /* height: 20px; */
  line-height: 25px;
}
.van-swipe-item p:first-of-type {
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
}
.van-swipe-item p:last-of-type {
  font-size: 13px;
  color: #808080;
}
.van-swipe {
  padding-top: 10px;
  /* background: red; */
  background-image: url(../../../src/assets/backgroundcommme.jpg);
  background-size: 100% 150px;
  background-repeat: no-repeat;
  height: 260px;

  /* background-size: 50px 50px; */
}
/* .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  } */
</style>
