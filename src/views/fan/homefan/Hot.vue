<template>
  <div class="hot">
    <div class="rec">
      <p style="font-weight:bold">热门作品</p>
      <van-swipe class="my-swipe" :show-indicators="show">
        <van-swipe-item v-for="(item, i) in recommend">
          <div v-for="(content, index) in item" class="fan-item" :style="{ backgroundImage: 'url(' + content.imgUrl + ')' }">
            <!-- {{content.imgUrl}} -->
            <div class="fan-bottom">
              <p>{{ content.title }}</p>
              <p style="font-size:8px;color:#666666">
                {{ content.autor }}
                <span class="frt" style="margin:0 8px 0 3px;">{{ content.like }}</span>
                <van-icon class="frt" style="margin-top:2px" name="like" />
              </p>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hot',
  data() {
    return {
      show: false,
      recommend: [],
    };
  },
  created() {
    // this.$axios.get("/api/hot.json").then((res) => {
    //   const dt = res.data.data;
    //   // console.log(dt);
    //   this.recommend = dt;
    // });
    this.request({
      url: '/hot.json',
    }).then((res) => (this.recommend = res.data.data));
  },
};
</script>

<style scoped>
.hot {
  width: 100%;
  /* height: 200px; */
  box-sizing: border-box;
  padding: 20px 10px 0 10px;
  text-align: left;
}
.van-swipe .van-swipe-item {
  display: flex;
  flex-wrap: wrap;
}
.fan-item {
  width: calc((100% - 14px) / 2);
  height: 100px;
  margin-right: 10px;
  margin-top: 10px;
  /* background: red; */
  /* border: 1px solid red; */
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
}
.fan-item:nth-of-type(2n) {
  margin-right: 0;
}
.fan-bottom {
  width: 100%;
  height: 30px;
  position: absolute;
  background: white;
  left: 0;
  bottom: 0;
  /* padding-top: 5px; */
  padding-left: 5px;
  font-size: 10px;
  font-weight: bold;
  box-sizing: border-box;
}
.fan-bottom p {
  line-height: 15px;
}
</style>
