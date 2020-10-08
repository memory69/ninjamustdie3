<template>
  <div class="information">
    <home-header></home-header>
    <div class="information-top">
      <img src="../../assets/information.png" alt width="50%" />
    </div>
    <information-tag></information-tag>
    <div class="end1">
      <p>到底了</p>
    </div>
    <end></end>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
import InformationTag from "../information/InformationTag";
import End from "../components/End";
export default {
  name: "Information",
  components: {
    HomeHeader,
    InformationTag,
    End,
  },
};
</script>

<style scoped>
.information {
  width: 100%;
  box-sizing: border-box;
}
.information-top {
  margin-top: 50px;
  width: 100%;
  height: 90px;
  background: url(../../../src/assets/backgroundcommme.jpg);
  text-align: center;
}
.information img {
  margin-top: 20px;
}
.end1 {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  background: url(../../../src/assets/backgroundcommme.jpg);
  text-align: center;
}
.end1 p {
  font-size: 13px;
  line-height: 50px;
}
</style>
