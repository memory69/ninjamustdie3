<template>
  <div class="fan">
    <home-header v-show="show"></home-header>
    <div class="main" v-show="active1 == 0">
      <img src="../../assets/bigfan1.jpg" alt width="100%" />
      <p style="font-weight:bold;margin:10px 0">精选作品</p>
      <div class="list">
        <div class="item" v-for="(item, i) in top" :style="{ backgroundImage: 'url(' + item.imgUrl + ')' }">
          <van-tag class="tag" type="primary">推荐</van-tag>
          <div class="title">
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
      <div class="find" style="margin-top:15px">
        <p style="font-weight:bold;margin-bottom:10px">发现作品</p>
        <van-tabs v-model="active" swipe-threshold="8" title-style="font-size:10px">
          <van-tab title="全部">
            <fan-about></fan-about>
          </van-tab>
          <van-tab title="同人汇">
            <fan-about></fan-about>
          </van-tab>
          <van-tab title="漫展">
            <fan-about></fan-about>
          </van-tab>
          <van-tab title="同人文">
            <div style="color:#999999;font-size:11px;height: 50px;">暂无更多作品</div>
          </van-tab>
          <van-tab title></van-tab>
          <van-tab title></van-tab>

          <div class="hot">
            <van-cell-group>
              <van-switch-cell size="15px" style="font-size:10px;font-weight:bold" title="最热" v-model="checked" />
            </van-cell-group>
          </div>
        </van-tabs>
      </div>
    </div>
    <div class="bottom">
      <van-tabbar v-model="active1" @change="handle(active1)">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="gift-o">活动</van-tabbar-item>
        <van-tabbar-item icon="user-o">个人中心</van-tabbar-item>
        <van-tabbar-item icon="records" style="background:#d44e4d;color:#ffffff">投稿</van-tabbar-item>
      </van-tabbar>
    </div>
    <fan-active v-show="active1 == 1"></fan-active>
    <fan-personal v-show="active1 == 2"></fan-personal>
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader';
import FanAbout from './fanmain/FanAbout';
// import FanEnd from "./fanend/FanEnd";
import FanActive from './fanmain/FanActive';
import FanPersonal from './fanmain/FanPersonal';
export default {
  name: 'Fan',
  data() {
    return {
      active: 0,
      show: true,
      active1: 0,
      top: [],
      checked: true,
    };
  },
  created() {
    // this.$axios.get("/api/fan/fantop.json").then((res) => {
    //   this.top = res.data.data;
    // });
    this.request({
      url: '/fan/fantop.json',
    }).then((res) => (this.top = res.data.data));
  },
  methods: {
    handle(index) {},
  },
  components: {
    HomeHeader,
    FanAbout,
    FanActive,
    FanPersonal,
  },
};
</script>

<style scoped>
.fan {
  width: 100%;
  /* height; */
  box-sizing: border-box;
  background: #e8e8ed;
  text-align: center;
}
.main {
  width: 100%;
  box-sizing: border-box;
  margin-top: 50px;
  /* height: 1000px; */
}

.list {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
}
.item {
  width: calc((100% - 15px) / 2);
  margin-top: 10px;
  margin-right: 10px;
  /* border: 1px solid red; */
  height: 95px;
  position: relative;
  background-size: 100%;
  background-repeat: no-repeat;
}
.item:nth-of-type(2n) {
  margin-right: 0;
}
.item .title {
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 10px;
  line-height: 20px;
  padding-left: 5px;
  background: #fad975;
}
.item .tag {
  position: absolute;
  left: 0;
  top: 0;
  background: #d44e4d;
}
.find .hot {
  width: 100px;
  height: 50px;
  /* background: red; */
  position: absolute;
  right: 0;
  top: 0;
}
.bottom {
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  bottom: 0;
}
.bottom .van-tabbar-item {
  font-size: 10px;
}
</style>
