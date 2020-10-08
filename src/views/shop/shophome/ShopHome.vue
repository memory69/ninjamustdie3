<template>
  <div class="shop-home">
    <img v-for="(item, i) in imgUrl" :src="item.imgUrl" alt width="100%" />
  </div>
</template>

<script>
export default {
  name: 'ShopHome',
  data() {
    return {
      imgUrl: [],
    };
  },
  created() {
    // this.$axios.get("/api/shop/shophome.json").then((res) => {
    //   this.imgUrl = res.data.data;
    // });
    this.request({
      url: '/shop/shophome.json',
    }).then((res) => (this.imgUrl = res.data.data));
  },
};
</script>

<style scoped>
.shop-home {
  width: 100%;
  /* height: 1000px; */
  box-sizing: border-box;
  /* border: 1px solid red; */
  line-height: 0;
  /* overflow: auto; */
}
</style>
