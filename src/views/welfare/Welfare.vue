<template>
  <div class="welfare">
    <div
      style=" width: 100%;
  box-sizing: border-box;
  padding: 10px 10px;
    text-align: center;"
    >
      <p class="change">兑换码通道</p>
      <van-cell-group>
        <van-field v-model="value1" left-icon="user-circle-o" placeholder="请输入角色UID" />
        <van-field v-model="value2" clearable left-icon="records" placeholder="请输入兑换码" />
      </van-cell-group>
      <van-button type="default">兑换</van-button>
      <img src="../../assets/welfare.jpg" alt width="100%" style="margin-top:20px" />
      <p style="font-size:13px;color:#666666;padding:15px 0;">角色ID为游戏主界面左上角“个人信息”界面中9位数字</p>
    </div>

    <div class="week">
      <p style="padding-top:20px;padding-left:40px" class="change">
        <van-icon name="gift" style="margin-right:10px" />每周礼包
      </p>
      <div class="download">
        <img src="../../assets/welfaredownload.jpg" alt width="130px" />
        <p>关注微信公众号参加相关有奖活动</p>
      </div>
    </div>
    <div class="bott"></div>
    <end></end>
  </div>
</template>

<script>
import End from "../components/End";
export default {
  name: "Welfare",
  data() {
    return {
      value1: "",
      value2: "",
    };
  },
  components: {
    End,
  },
};
</script>

<style scoped>
.welfare {
  width: 100%;
  box-sizing: border-box;
  /* padding: 10px 10px; */
}
.welfare .change {
  font-weight: bold;
  padding: 10px 0;
}
.welfare .van-field {
  margin-top: 10px;
  background: #f3f5f7;
  /* border: 1px solid #f3f5f7; */
}
.van-button {
  margin-top: 15px;
  background: #d44e4d;
  color: white;
  width: 100%;
}
.week {
  width: 100%;
  box-sizing: border-box;
  /* height: 300px; */
  background: url(../../../src/assets/welfarebackground.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
}
.download {
  /* margin-top: 10px; */
  margin-left: 20px;
  width: 130px;
  /* height: 100px; */
  background: white;
  text-align: center;
}
.download p {
  /* margin-top: -10px; */
  /* padding-bottom: -10px; */
  font-size: 14px;
  line-height: 18px;
}
.bott {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  background: #e7ebee;
}
</style>