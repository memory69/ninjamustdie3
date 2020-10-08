<template>
  <div class="visual-tag">
    <van-tabs v-model="active" line-width="33%">
      <van-tab title="视频中心">
        <visual-main></visual-main>
      </van-tab>
      <van-tab title="原画壁纸">
        <visual-main2></visual-main2>
      </van-tab>
      <van-tab title="游戏原声">
        <music></music>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import VisualMain from "../audiovisual/visualmain/VisualMain";
import VisualMain2 from "../audiovisual/visualmain/VisualMain2";
import Music from "../audiovisual/music/Music";
export default {
  name: "VisualTag",
  data() {
    return {
      active: 0,
    };
  },
  components: {
    VisualMain,
    VisualMain2,
    Music,
  },
};
</script>

<style scoped>
</style>