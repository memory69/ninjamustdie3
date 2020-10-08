<template>
  <div class="shop-header">
    <div class="header-top">
      <van-cell title="忍者必须死3周边店" icon="shop-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="star-o" class="star-o-icon">
            <span style="font-size:12px;margin-left:5px;">关注</span>
          </van-icon>
        </template>
      </van-cell>
      <van-icon name="diamond" class="icon" style="margin-left:15px" />
      <van-icon name="diamond" class="icon" />
      <van-icon name="diamond" class="icon" />
      <span style="font-size:10px;color:white;margin-left:5px">粉丝数6707</span>
    </div>
    <div class="header-next" v-show="!show">
      <div class="left">
        <van-search v-model="value" shape="round" background="rgba(0, 0, 0, 0)" placeholder="搜索" />
      </div>
      <div class="right">
        <van-tabs
          v-model="active"
          background="rgba(0, 0, 0, 0)"
          title-inactive-color="white"
          title-active-color="white"
          style="margin-top:8px;"
          @change="handle(active)"
        >
          <van-tab title="首页"></van-tab>
          <van-tab title="宝贝"></van-tab>
          <van-tab title="新品"></van-tab>
          <van-tab title="分类"></van-tab>
          <van-tab title="微淘"></van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="header-next1" v-show="show">
      <div class="left">
        <van-search v-model="value" shape="round" background="rgba(0, 0, 0, 0)" placeholder="搜索" />
      </div>
      <div class="right">
        <van-tabs
          v-model="active"
          background="rgba(0, 0, 0, 0)"
          title-inactive-color="white"
          title-active-color="white"
          style="margin-top:8px;"
        >
          <van-tab title="首页"></van-tab>
          <van-tab title="宝贝"></van-tab>
          <van-tab title="新品"></van-tab>
          <van-tab title="分类"></van-tab>
          <van-tab title="微淘"></van-tab>
        </van-tabs>
      </div>
    </div>
    <shop-home v-show="active == 0"></shop-home>
    <shop-baby v-show="active == 1"></shop-baby>
    <shop-baby v-show="active == 2"></shop-baby>
    <shop-other v-show="active == 3"></shop-other>
  </div>
</template>

<script>
import ShopHome from "../shophome/ShopHome";
import ShopBaby from "../shopbaby/ShopBaby";
import ShopOther from "../shopother/ShopOther";
export default {
  name: "ShopHeader",
  data() {
    return {
      show: false,
      value: "",
      active: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); //在mounted钩子中给window添加一个滚动滚动监听事件
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); //销毁
  },
  methods: {
    handleScroll() {
      //监听元素到顶部的距离  并判断滚动的距离如果大于了元素到顶部的距离时
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //   console.log(scrollTop);
      if (scrollTop > 45) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    home() {
      this.$router.push("/shop");
    },
    handle(index) {
      console.log(index);
    },
  },
  // watch: {
  //   active() {
  //     // console.log(this.active);
  //     if (this.active == 0) {
  //       this.$router.push("/shop");
  //     }
  //     if (this.active == 1) {
  //       this.$router.push("/shopbaby");
  //     }
  //     if (this.active == 2) {
  //       this.$router.push("/shopnews");
  //     }
  //     if (this.active == 3) {
  //       this.$router.push("/shopother");
  //     }
  //   },
  // },
  components: {
    ShopHome,
    ShopBaby,
    ShopOther,
  },
};
</script>

<style scoped>
.shop-header {
  width: 100%;
  box-sizing: border-box;
  background: url(../../../../src/assets/shop/shop.webp);
  background-size: 100%;
}
.header-top {
  background: rgba(0, 0, 0, 0.6);
  border: 0;
}
.star-o-icon {
  font-size: 13px;
  line-height: inherit;
  border: 1px solid white;
  color: white;
  padding: 0 10px;
  border-radius: 16px;
}
.van-cell {
  background: rgba(0, 0, 0, 0);
  color: white;
  font-weight: bolder;
  border: none;
}
.icon {
  font-size: 12px;
  color: white;
  margin-left: 3px;
}
.header-next {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.6);
  background-size: 100%;
  display: flex;
}
.header-next .left {
  width: 30%;
}
.header-next .right {
  flex: 1;
  line-height: 50px;
}
.header-next1 {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background: url(../../../../src/assets/shop/shop.webp) 0px -63px;
  background-size: 100%;
  display: flex;
}
.header-next1 .left {
  background: rgba(0, 0, 0, 0.6);
  width: 30%;
}
.header-next1 .right {
  background: rgba(0, 0, 0, 0.6);
  flex: 1;
  line-height: 50px;
}
</style>