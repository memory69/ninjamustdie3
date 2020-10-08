<template>
  <div class="information-show">
    <home-header></home-header>
    <div class="top">
      <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="main">
      <p style="font-size:20px;font-weight:bold; line-height: 25px;">{{content.title}}</p>
      <p style="font-size:10px;color:#999999">{{content.time}}</p>
      <van-divider :style="{borderColor: '#999999'}" />
      <p>{{content.main1}}</p>
      <p>{{content.main2}}</p>
      <p style="font-size:14px;font-weight:bold;margin-top:20px">{{content.smalltitle}}</p>
      <p>{{content.main3}}</p>
      <p style="font-size:14px;font-weight:bold;margin-top:20px">{{content.smalltitle2}}</p>
      <p style="font-size:20px;font-weight:bold; line-height: 25px;">{{content.title2}}</p>
      <p>{{content.main4}}</p>
      <p>{{content.main5}}</p>
      <p>{{content.main6}}</p>
      <p>{{content.main7}}</p>
      <p style="font-size:20px;font-weight:bold; line-height: 25px;">{{content.title3}}</p>
      <p>{{content.main8}}</p>
      <p>{{content.main9}}</p>
      <p style="font-size:20px;font-weight:bold; line-height: 25px;">{{content.title4}}</p>
      <p>{{content.main10}}</p>
      <p>{{content.main11}}</p>
      <p>{{content.main12}}</p>
      <p>{{content.main13}}</p>
      <p>{{content.main14}}</p>
      <p>{{content.main15}}</p>
      <p>{{content.main16}}</p>
      <p>{{content.main17}}</p>
      <p>{{content.main18}}</p>
      <p style="font-size:14px;font-weight:bold;margin-top:20px">{{content.smalltitle3}}</p>
      <p>{{content.main19}}</p>
      <p>{{content.main20}}</p>
      <p>{{content.main21}}</p>
    </div>
    <end></end>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
import End from "../components/End";
export default {
  name: "InformationShow",
  data() {
    return {
      content: [],
    };
  },
  created() {
    if (this.information != null) {
      this.information.forEach((res) => {
        var dt = res.detail;
        dt.forEach((item) => {
          this.content = item;
        });
      });
    }

    // console.log(this.content);
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  computed: {
    information() {
      return this.$store.state.informationcontent;
    },
  },
  components: {
    HomeHeader,
    End,
  },
};
</script>

<style scoped>
.information-show {
  width: 100%;
  box-sizing: border-box;
  background: #e8e8ed;
}
.top {
  margin-top: 50px;
  /* height: 50px; */
  width: 100%;
  box-sizing: border-box;
}
.main {
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 0 10px;
  line-height: 25px;
}
.main p {
  font-size: 12px;
}
</style>