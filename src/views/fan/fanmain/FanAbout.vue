<template>
  <div class="fan-about">
    <div class="list" v-for="(item, i) in about">
      <div class="item" v-for="(content, i) in item">
        <img :src="content.imgUrl" alt width="100%" />
        <div class="title">
          <div class="left">
            <p style="font-size:10px">{{ content.title }}</p>
            <p style="color:#999999">
              <van-icon name="friends" style=" vertical-align: middle;" />
              <span style="font-size:10px;">{{ content.peo }}</span>
            </p>
          </div>
          <div class="right">
            <van-icon name="like-o" />
            <p style="font-size:13px;">{{ content.like }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FanAbout',
  data() {
    return {
      about: [],
    };
  },
  created() {
    // this.$axios.get("/api/fan/fanmain.json").then((res) => {
    //   this.about = res.data.data;
    // });
    this.request({
      url: '/fan/fanmain.json',
    }).then((res) => (this.about = res.data.data));
  },
};
</script>

<style scoped>
.fan-about {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  margin-bottom: 50px;
  /* background: ; */
}
.list {
  flex: 1;
  margin-right: 10px;
}
.list:nth-of-type(2n) {
  margin-right: 0;
}
.item {
  width: 100%;
  margin-top: 10px;
  /* height: 100px; */
  box-sizing: border-box;
  /* border: 1px solid red; */
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}
.item .title {
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  background: white;
  text-align: left;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  line-height: 15px;
  display: flex;
}
.item .left {
  flex: 1;
}
.item .right {
  width: 20%;
  text-align: right;
  padding-right: 10px;
}
</style>
