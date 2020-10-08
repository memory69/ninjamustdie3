<template>
  <div class="home-bottom">
    <div class="item">
      <div class="left">
        <div class="top">
          <i class="iconfont icon-tubiaozhizuo-"></i>
          <p style="font-size:13px ;font-weight:bold">官方微博</p>
          <p style="font-size:10px;margin-bottom:5px">微博名：忍者必须死3</p>
          <img src="../../../assets/homebottom/weibo.png" alt width="40%" />
        </div>
        <div class="bot">
          <i class="iconfont icon-dianhua"></i>
          <p style="font-size:13px ;font-weight:bold">客服电话</p>
          <p style="font-size:10px;margin-bottom:5px">客服电话：15372031083</p>
          <p style="font-size:10px;margin-bottom:5px">客服QQ：800180617</p>
          <van-button
            type="danger"
            style="border-radius: 16px;padding:0 10px;height:25px;font-size:12px"
          >联系客服</van-button>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <i class="iconfont icon-weixin"></i>
          <p style="font-size:13px ;font-weight:bold">微信公众号</p>
          <p style="font-size:10px;margin-bottom:5px">微信名：rzbxs3</p>
          <img src="../../../assets/homebottom/weixin.jpg" alt width="40%" />
        </div>
        <div class="bot">
          <i class="iconfont icon-qq"></i>
          <p style="font-size:13px ;font-weight:bold">官方QQ群</p>
          <p style="font-size:10px;margin-bottom:5px">773288802（官方25群）</p>
          <p style="font-size:10px;margin-bottom:5px">829733853（官方26群）</p>
          <p style="font-size:10px;margin-bottom:5px">829701785（官方27群）</p>
          <p style="font-size:10px;margin-bottom:5px">830398826（官方28群）</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBottom",
};
</script>

<style scoped>
.home-bottom {
  width: 100%;
  height: 400px;
  box-sizing: border-box;
  background: #e8ebed;
}
.item {
  width: 100%;
  /* height: 400px; */
  box-sizing: border-box;
  display: flex;
}
.item .left {
  flex: 1;
  /* border: 1px solid red; */
  border-right: 1px solid #dddddd;
}
.top {
  margin-top: 50px;
  width: 100%;
  box-sizing: border-box;
  height: 50%;
}
.item .right {
  flex: 1;
  /* border: 1px solid red; */
}
.top P {
  padding: 5px 0;
}
.bot {
  margin-top: 20px;
}
.bot P {
  padding: 5px 0;
}
</style>