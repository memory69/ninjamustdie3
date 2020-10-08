<template>
  <div class="RecordTag">
    <van-tabs v-model="active" line-width="50%">
      <van-tab title="人物设定">
        <ower></ower>
      </van-tab>
      <van-tab title="世界观">
        <world-view></world-view>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Ower from '../endurerecord/Ower';
import WorldView from '../endurerecord/WorldView';
export default {
  name: 'RecordTag',
  data() {
    return {
      active: 0,
    };
  },
  components: {
    Ower,
    WorldView,
  },
};
</script>

<style scoped>
.RecordTag {
  width: 100%;
  box-sizing: border-box;
}
</style>
