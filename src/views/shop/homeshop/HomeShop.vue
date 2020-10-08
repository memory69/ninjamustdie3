<template>
  <div class="home-shop">
    <div class="shop">
      <!-- <p style="font-weight:bold">官方推荐</p> -->
      <van-swipe class="my-swipe" indicator-color="black">
        <van-swipe-item v-for="(item, i) in homeshop">
          <div v-for="(content, index) in item" class="shop-item">
            <img :src="content.imgUrl" alt width="100%" />
            <div>
              <p style="font-size:12px;line-height:18px">{{ content.title }}</p>
            </div>

            <!-- {{content.imgUrl}} -->
            <!-- <div class="shop-bottom">
              <p>{{content.title}}</p>
            </div>-->
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeShop',
  data() {
    return {
      homeshop: [],
    };
  },
  created() {
    // this.$axios.get('/api/shop/shop.json').then((res) => {
    //   const dt = res.data.data;
    //   // console.log(dt);
    //   this.homeshop = dt;
    // });
    this.request({
      url: '/shop/shop.json',
    }).then((res) => (this.homeshop = res.data.data));
  },
};
</script>

<style scoped>
.home-shop {
  width: 100%;
  /* height: 500px; */
  box-sizing: border-box;
  padding: 20px 10px 0 10px;
  /* text-align: left; */
}
.van-swipe .van-swipe-item {
  display: flex;
  flex-wrap: wrap;
}
/* .van-swipe {
  /* height: 00px; */
.shop-item {
  width: calc((100% - 14px) / 2);
  height: 100px;
  margin-right: 10px;
  margin-top: 60px;
}
.shop-item:nth-of-type(2n) {
  margin-right: 0;
}
</style>
