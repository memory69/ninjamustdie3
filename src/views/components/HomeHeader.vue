<template>
  <div class="home-header">
    <img class="logo" src="../../assets/top.png" alt width="40px" height="40px" />
    <div class="title">
      <p>忍者必须死3</p>
      <p style="font-size:10px">风靡全球的水墨战斗跑酷</p>
    </div>
    <a href="https://resource.ninjamustdie3.pandadastudio.com/NinjaMustDie3_Official.apk">
      <img class="download" src="../../assets/btn-download.png" alt width="100px" height="30px"
    /></a>

    <van-icon name="wap-nav" @click="handle" />
    <van-popup style="backgroundColor:#e8ebed" v-model="show" closeable position="top" :style="{ height: '70%' }">
      <a href="javascript:void(0)" @click="home">官方首页</a>
      <a href="javascript:void(0)" @click="information">资讯台</a>
      <a href="javascript:void(0)" @click="endurerecord">忍届录</a>
      <a href="javascript:void(0)" @click="strategy">攻略所</a>
      <a href="javascript:void(0)" @click="audiovisual">视听馆</a>
      <a href="javascript:void(0)" @click="fan">同人圈</a>
      <a href="javascript:void(0)" @click="shop">周边商城</a>
      <a href="javascript:void(0)" @click="join">加入我们</a>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handle() {
      this.show = true;
    },
    home() {
      this.$router.push('/');
    },
    information() {
      this.$router.push('/information');
    },
    strategy() {
      this.$router.push('/strategy');
    },
    endurerecord() {
      this.$router.push('/endurerecord');
    },
    audiovisual() {
      this.$router.push('/audiovisual');
    },
    shop() {
      this.$router.push('/shop');
    },
    fan() {
      this.$router.push('/fan');
    },
    join() {
      this.$router.push('/join');
    },
  },
};
</script>

<style scoped>
.home-header {
  width: 100%;
  height: 50px;
  /* border: 1px solid red; */
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  background: black;
  /* text-align: center; */
  display: flex;
}
.home-header .logo {
  margin-top: 3px;
  margin-left: 10px;
}
.title {
  flex: 1;
  padding: 0 5px;
  color: white;
}
.title p:first-of-type {
  margin-top: 3px;
  font-weight: bold;
  padding-bottom: 5px;
}
.title p:last-of-type {
  font-size: 13px;
}
.van-icon {
  color: white;
  font-size: 30px;
  margin: 10px;
}
.home-header .download {
  margin-top: 10px;
}
.van-popup {
  /* padding-left: 80px; */
  text-align: center;
}
.van-popup a {
  color: black;
  font-size: 20px;
  display: block;
  line-height: 50px;
  font-weight: bold;
  text-decoration: underline red;
  /* border-bottom: 1px solid red; */
}
</style>
