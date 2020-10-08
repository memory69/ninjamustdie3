<template>
  <div class="shop">
    <shop-header></shop-header>
  </div>
</template>

<script>
import ShopHeader from "./shopheader/ShopHeader";
// import ShopHome from "./shophome/ShopHome";
export default {
  name: "Shop",
  components: {
    ShopHeader,
  },
};
</script>

<style scoped>
.shop {
  width: 100%;
  box-sizing: border-box;
  background: #e8e8ed;
}
</style>