<template>
  <div class="information-tag">
    <van-tabs v-model="active" @click="handle(active)">
      <van-tab title="最新">
        <information-main></information-main>
      </van-tab>
      <van-tab title="新闻">
        <information-main></information-main>
      </van-tab>
      <van-tab title="公告">
        <information-main></information-main>
      </van-tab>
      <van-tab title="活动">
        <information-main></information-main>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import InformationMain from "../information/InformationMain";
export default {
  name: "InformationTag",
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    handle(param) {
      this.$store.commit("setActive", param);
    },
  },
  components: {
    InformationMain,
  },
};
</script>

<style scoped></style>
