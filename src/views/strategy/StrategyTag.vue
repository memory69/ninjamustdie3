<template>
  <div class="strategy-tag">
    <van-tabs v-model="active" swipe-threshold="4" line-width="50px" @click="handle(active)">
      <van-tab title-style=" width: 100px;font-size:16px;border-right:1px solid #8c8c8c">
        <template #title>
          <van-icon name="point-gift" />福利营
        </template>
        <welfare></welfare>
      </van-tab>

      <van-tab title="最新攻略">
        <strategy-main></strategy-main>
        <end-up></end-up>
        <end></end>
      </van-tab>
      <van-tab title="新手入门">
        <strategy-main></strategy-main>
        <end-up></end-up>
        <end></end>
      </van-tab>
      <van-tab title="进阶之路">
        <strategy-main></strategy-main>
        <end-up></end-up>
        <end></end>
      </van-tab>
      <van-tab title="王者之巅">
        <strategy-main></strategy-main>
        <end-up></end-up>
        <end></end>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Welfare from "../welfare/Welfare";
import StrategyMain from "../strategy/StrategyMain";
import EndUp from "../components/EndUp";
import End from "../components/End";
export default {
  name: "StrategyTag",
  data() {
    return {
      active: 1,
      //   isshow: true,
    };
  },
  methods: {
    handle(param) {
      this.$store.commit("setActive2", param);
    },
  },
  components: {
    Welfare,
    StrategyMain,
    EndUp,
    End,
  },
};
</script>

<style scoped>
.strategy-tag {
  width: 100%;
  box-sizing: border-box;
  position: relative;
}
</style>