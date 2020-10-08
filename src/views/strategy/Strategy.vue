<template>
  <div class="strategy">
    <home-header></home-header>
    <div class="strategy-top">
      <img src="../../assets/strategy.png" alt width="80%" />
    </div>
    <strategy-tag></strategy-tag>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
import StrategyTag from "../strategy/StrategyTag";
export default {
  name: "Strategy",
  components: {
    HomeHeader,
    StrategyTag,
  },
};
</script>

<style scoped>
.strategy {
  width: 100%;
  box-sizing: border-box;
}
.strategy-top {
  margin-top: 50px;
  width: 100%;
  height: 90px;
  background: url(../../../src/assets/backgroundcommme.jpg);
  text-align: center;
}
.strategy-top img {
  margin-top: 20px;
}
</style>
