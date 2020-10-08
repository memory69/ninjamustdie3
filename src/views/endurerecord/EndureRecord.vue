<template>
  <div class="endure-record">
    <home-header></home-header>
    <div class="record-top">
      <img src="../../assets/endurerecord.png" alt width="50%" />
    </div>
    <record-tag></record-tag>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
import RecordTag from "../endurerecord/RecordTag";
export default {
  name: "EndureRecord",
  components: {
    HomeHeader,
    RecordTag,
  },
};
</script>

<style scoped>
.endure-record {
  width: 100%;
  box-sizing: border-box;
}
.record-top {
  margin-top: 50px;
  width: 100%;
  height: 90px;
  background: url(../../../src/assets/backgroundcommme.jpg);
  text-align: center;
}
.record-top img {
  margin-top: 20px;
}
</style>