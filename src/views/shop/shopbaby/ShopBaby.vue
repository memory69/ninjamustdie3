<template>
  <div class="shop-baby">
    <van-icon class="frt" name="apps-o" style="margin:10px" v-show="show" @click="list" />
    <van-icon class="frt" name="qr" style="margin:10px" v-show="!show" @click="list1" />
    <div class="list" v-show="show">
      <div class="item" v-for="(item, i) in newshop" @click="shopping(item.id)">
        <img :src="item.imgUrl" alt width="100%" />
        <div class="title">
          <p style="font-size:13px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis">{{ item.title }}</p>
          <p>
            <span style="font-size:14px;color: rgb(255, 80, 0);font-weight:bold">{{ item.price }}</span>
            <span style="font-size:10px;margin-left:15px;color: rgb(153, 153, 153);">{{ item.paypeope }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="list1" v-show="!show">
      <div class="item1" v-for="(index, i) in newshop" @click="shopping(index.id)">
        <img :src="index.imgUrl" alt width="40%" />
        <div class="right">
          <p style>{{ index.title }}</p>
          <p style="margin-top:10px;font-size:10px;color:#999999">运费：10元</p>
          <p style="margin-top:18px">
            <span style="color:#ff5000;font-size:16px">{{ index.price }}</span>
            <span style="margin-left:10px;font-size:10px;color:#999999">{{ index.paypeope }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopHeader from '../shopheader/ShopHeader';
export default {
  name: 'ShopBaby',
  data() {
    return {
      show: true,
      newshop: [],
      currentshopping: [],
    };
  },
  created() {
    // this.$axios("/api/shop/shopbaby.json").then((res) => {
    //   this.newshop = res.data.data;
    // });
    this.request({
      url: '/shop/shopbaby.json',
    }).then((res) => (this.newshop = res.data.data));
  },
  methods: {
    shopping(index) {
      this.$router.push('/shopping/' + index);
      this.currentshopping = this.newshop.filter((item) => {
        return item.id == index;
      });

      this.$store.commit('setShopping', this.currentshopping);
    },
    list() {
      this.show = false;
    },
    list1() {
      this.show = true;
    },
  },
  components: {
    ShopHeader,
  },
};
</script>

<style scoped>
.shop-baby {
  width: 100%;
  box-sizing: border-box;
  background: rgb(244, 244, 244);
}
.list {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px 15px 15px;
}
.list .item {
  width: calc((100% - 15px) / 2);
  height: 195px;
  /* border: 1px solid red; */
  margin-right: 10px;
  margin-top: 10px;
  position: relative;
  border-radius: 18px;
  overflow: hidden;
}
.item .title {
  width: 100%;
  height: 60px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: white;
}
.list .item:nth-of-type(2n) {
  margin-right: 0;
}
.item .title p {
  line-height: 30px;
}
.list1 {
  width: 100%;
  padding: 0 15px 15px 15px;
  box-sizing: border-box;
}
.item1 {
  margin-top: 10px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  background: white;
  height: 120px;
  border-radius: 16px;
  overflow: hidden;
}
.item1 .right {
  flex: 1;
  padding: 10px 10px;
  font-size: 12px;
  line-height: 15px;
}
</style>
