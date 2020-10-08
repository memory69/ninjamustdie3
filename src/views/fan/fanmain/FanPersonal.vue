<template>
  <div class="fan-personal">
    <div class="main">
      <div class="peo"></div>
      <span style="font-size:13px;font-weight:bold">请先登录</span>
      <van-button type="danger" class="frt">登录</van-button>
      <van-divider />
      <div style="display:flex;text-align:center;line-height:20px">
        <div style="flex:1">
          <p style="font-weight:bold">0</p>
          <p style="font-size:12px;color:#999999">作品</p>
        </div>
        <div style="flex:1">
          <p style="font-weight:bold">0</p>
          <p style="font-size:12px;color:#999999">获赞数</p>
        </div>
      </div>
      <van-divider />
    </div>
  </div>
</template>

<script>
export default {
  name: "FanPersonal",
};
</script>

<style scoped>
.fan-personal {
  margin-top: 50px;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
}
.main {
  width: 100%;
  box-sizing: border-box;
  height: 200px;
  background: white;
  padding: 15px;
}
.peo {
  width: 50px;
  height: 50px;
  border: 2px solid #e8e8ed;
  border-radius: 50px;
  display: inline-block;
}
</style>