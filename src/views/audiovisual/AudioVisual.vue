<template>
  <div class="audio-visual">
    <home-header></home-header>
    <div class="visual-top">
      <img src="../../assets/audiovisual/audioview.png" alt width="60%" />
    </div>
    <visual-tag></visual-tag>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
import VisualTag from "../audiovisual/VisualTag";
export default {
  name: "AudioVisual",
  components: {
    HomeHeader,
    VisualTag,
  },
};
</script>

<style scoped>
.audio-visual {
  width: 100%;
  box-sizing: border-box;
}
.visual-top {
  margin-top: 50px;
  width: 100%;
  height: 90px;
  background: url(../../../src/assets/backgroundcommme.jpg);
  text-align: center;
}
.visual-top img {
  margin-top: 20px;
}
</style>