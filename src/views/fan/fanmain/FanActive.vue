<template>
  <div class="fan-active">
    <van-tabs v-model="active">
      <van-tab title="全部">
        <div class="main">
          <img src="../../../assets/bigfan1.jpg" alt width="100%" />
          <div style="background:white;text-align:left;padding:10px 10px;line-height:20px">
            <p style="font-weight:bold">《忍者必须死3》二周年同人大赛</p>
            <p style="font-size:12px;color:#999999">2020-08-03 至 2020-08-30</p>
            <van-divider />
            <div style="display:flex">
              <div style="color:#999999;flex:1">
                <van-icon name="clock-o" style="vertical-align: middle;font-size:13px" />
                <span style="font-size:12px;margin-left:5px">28天</span>
              </div>
              <div style="text-align:right;flex:1;color:#999999;">
                <van-icon name="browsing-history-o" style="vertical-align: middle;font-size:13px" />
                <span style="font-size:12px;margin-left:5px">835</span>
              </div>
            </div>
          </div>
          <van-tag type="primary">已结束</van-tag>
        </div>
      </van-tab>
      <van-tab title="投稿期">
        <span style="line-height:50px;font-size:11px">暂无该阶段活动</span>
      </van-tab>
      <van-tab title="颁奖期">
        <span style="line-height:50px;font-size:11px">暂无该阶段活动</span>
      </van-tab>
      <van-tab title="已结束">
        <div class="main">
          <img src="../../../assets/bigfan1.jpg" alt width="100%" />
          <div style="background:white;text-align:left;padding:10px 10px;line-height:20px">
            <p style="font-weight:bold">《忍者必须死3》二周年同人大赛</p>
            <p style="font-size:12px;color:#999999">2020-08-03 至 2020-08-30</p>
            <van-divider />
            <div style="display:flex">
              <div style="color:#999999;flex:1">
                <van-icon name="clock-o" style="vertical-align: middle;font-size:13px" />
                <span style="font-size:12px;margin-left:5px">28天</span>
              </div>
              <div style="text-align:right;flex:1;color:#999999;">
                <van-icon name="browsing-history-o" style="vertical-align: middle;font-size:13px" />
                <span style="font-size:12px;margin-left:5px">835</span>
              </div>
            </div>
          </div>
          <van-tag type="primary">已结束</van-tag>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "FanActive",
  data() {
    return {
      active: 0,
    };
  },
  comments: {},
};
</script>

<style scoped>
.fan-active {
  margin-top: 50px;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
}
.main {
  margin-top: 15px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}
.van-tag {
  position: absolute;
  left: 0;
  top: 0;
  background: #bbbbbb;
}
</style>