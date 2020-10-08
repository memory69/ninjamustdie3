<template>
  <div class="shop-other">
    <div class="main">
      <van-cell title="忍者必须死3" is-link>
        <template #label>
          <div class="list">
            <div class="item" v-for="(item, i) in other">{{ item.title }}</div>
          </div>
        </template>
      </van-cell>
      <van-cell title="老板娘限定" is-link />
      <van-cell title="公益联名周边" is-link />
      <van-cell title="忍3手办盲盒" is-link />
    </div>
  </div>
</template>

<script>
import ShopHeader from '../shopheader/ShopHeader';
export default {
  name: 'ShopOther',
  data() {
    return {
      other: [],
    };
  },
  created() {
    // this.$axios.get("/api/shop/shopother.json").then((res) => {
    //   this.other = res.data.data;
    // });
    this.request({
      url: 'shop/shopother.json',
    }).then((res) => (this.other = res.data.data));
  },
  components: {
    ShopHeader,
  },
};
</script>

<style scoped>
.shop-other {
  width: 100%;
  box-sizing: border-box;
  background: #f8f8f8;
}
.main {
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
}
.list {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: calc((100% - 10px) / 2);
  height: 20px;
  line-height: 20px;
  /* border: 1px solid red; */
  text-align: center;
  background: #f8f8f8;
  border-radius: 16px;
  margin-right: 10px;
  margin-top: 10px;
}
.item:nth-of-type(2n) {
  margin-right: 0;
}
.van-cell {
  margin-top: 10px;
  border-radius: 16px;
}
</style>
