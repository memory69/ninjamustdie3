<template>
  <div class="main">
    <!-- //首页忍界录 -->

    <img class="mainlogo" src="../../assets/mainlogo.png" alt width="80px" />
    <div class="main-figure">
      <div class="item" v-for="(item, i) in figure" v-model="active">
        <img :src="item.figureUrl" v-show="isshow" alt width="50px" @click="handle(i)" />
        <img :src="item.figureUrl2" v-show="!isshow" alt width="50px" />
      </div>
    </div>
    <van-swipe class="my-swipe" :show-indicators="indi" @change="onChange">
      <van-swipe-item v-for="(item, i) in figure">
        <img :src="item.titleUrl" alt width="80px" class="titleUrl" />
        <div class="audioimg">
          <img class="vidoe" :src="item.imgUrl" alt width="100px" />
          <img class="audio" @click="play" src="../../assets/audio.png" alt width="15px" />
        </div>

        <p style="width:100px;font-size:13px;line-height:30px">{{ item.introduce }}</p>
        <div class="skilogo" style="width:150px">
          <img :src="item.initiallogo" alt width="50px" />
          <img :src="item.awakelogo" alt width="50px" />
          <img :src="item.skinlogo" alt width="50px" />
        </div>
        <div class="biglogo">
          <img class="bigUrl" v-show="bigurl" :src="item.bigUrl" alt width="200px" />
          <img class="bigUrl" v-show="!bigurl" :src="item.genreUrl" alt width="200px" />
          <img class="genrelogo" @click="switchlogo" v-show="vshow" :src="item.genrelogo" alt width="50px" />
          <img class="genrelogo" @click="switchlogo2" v-show="!vshow" :src="item.genrelogo2" alt width="50px" />
        </div>
      </van-swipe-item>
    </van-swipe>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block">
          <video-player class="vjs-custom-skin" :options="playerOptions"></video-player>
          <van-icon name="cross" @click="close" style="  width: 40px;height: 40px;font-size:30px" />
        </div>
        <div class="player-container"></div>
      </div>
    </van-overlay>
    <!-- //首页攻略所 -->
    <div class="strategy">
      <img class="strategylogo" src="../../assets/strategylogo.png" alt width="80px" />
      <div class="strategy-img" v-for="(item, i) in strategy">
        <img :src="item.backgroundUrl" @click="more" alt width="100%" />
      </div>
    </div>
    <!-- //首页同人圈 -->
    <div class="fan">
      <img class="fanlogo" src="../../assets/fanlogo.png" alt width="80px" />
      <img style="margin-top:5px" src="../../assets/bigfan.jpg" alt width="90%" />
      <p style="margin-top:10px;font-size:13px;font-weight: bolder;">《忍者必须死3》二周年同人大赛</p>
      <img style="margin-top:10px;margin-bottom:8px" src="../../assets/fanicon.png" alt width="10px" />
      <div class="fan-rec">
        <fan-recommended></fan-recommended>
        <hot></hot>
      </div>
    </div>
    <!-- //首页视听馆 -->
    <div class="audio-visual">
      <img class="audiologo" src="../../assets/audiovisual/audiovisuallogo.png" lazyload="true" alt width="80px" />
      <div class="audio-content" v-for="(item, i) in audio">
        <img :src="item.imgUrl" @click="handleAudio(i)" alt width="100%" />
      </div>
    </div>
    <!-- //首页周边商城 -->
    <div class="shop">
      <img class="shoplogo" src="../../assets/shop/shoplogo.png" alt width="80px" />
      <div class="shop-content">
        <home-shop></home-shop>
      </div>
    </div>
    <!-- 首页底部 -->
    <div class="home-bottom">
      <home-bottom></home-bottom>
    </div>
    <div class="bac">
      <img src="../../assets/homebottom/home-end.png" alt width="100%" />
    </div>
    <!-- {{content}} -->
    <end></end>
  </div>
</template>

<script>
import '../../../node_modules/video.js/dist/video-js.css';
import '../../../node_modules/vue-video-player/src/custom-theme.css';
// import '../../../node_modules/videojs-contrib-hls/src/videojs.hlsjs';
import FanRecommended from '../fan/homefan/FanrRecommended';
import Hot from '../fan/homefan/Hot';
import HomeShop from '../shop/homeshop/HomeShop';
import End from '../components/End';
import HomeBottom from '../home/homebottom/HomeBottom';
// import { request } from '../../network/request';
export default {
  name: 'HomeMain',
  data() {
    return {
      active: 0,
      content: [],
      vido: [],
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        controls: true, //控制条
        preload: 'auto', //视频预加载
        muted: false, //默认情况下将会消除任何音频。
        loop: false, //导致视频一结束就重新开始。
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'video/mp4',
            src: 'http://www.res.ren3.pandadastudio.com/upload/default/20200804/b12939a99607de83ace7fef5a30d4ee8.mp4', //你所放置的视频的地址，最好是放在服务器上
          },
        ],
        poster: '../../assets/top.png', //你的封面地址（覆盖在视频上面的图片）
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      },
      bigurl: true,
      vshow: true,
      isshow: true,
      indi: false,
      figure: [],
      show: false,
      isActive: true,
      strategy: [],
      audio: [],
    };
  },
  methods: {
    onChange(index) {
      // console.log(index);
      // this.$axios.get('/api/vido.json').then((res) => {
      //   const dt = res.data.data;
      //   // console.log(dt);
      //   this.content = dt.filter((item) => {
      //     return index + 1 == item.id;
      //   });
      this.request({
        url: '/vido.json',
      }).then((res) => {
        const dt = res.data.data;
        this.content = dt.filter((item) => index + 1 == item.id);
        this.playerOptions.sources.forEach((m) => {
          this.content.forEach((i) => {
            m.src = i.vido;
          });
        });
      });
    },
    handle(index) {
      this.figure.forEach((item) => {
        console.log(item.id);
      });
    },
    handleAudio(index) {
      switch (index) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          break;
      }
    },
    play() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    switchlogo() {
      this.bigurl = false;
      this.vshow = false;
    },
    switchlogo2() {
      this.bigurl = true;
      this.vshow = true;
    },
    more() {
      this.$router.push('/strategy');
    },
  },
  created() {
    // this.$axios.get('/api/mainfigure.json').then((res) => {
    //   const dt = res.data.data;
    //   this.figure = dt;
    //   // console.log(dt);
    // });
    this.request({
      url: '/mainfigure.json',
    }).then((res) => (this.figure = res.data.data));
    // this.$axios.get('/api/strategy.json').then((res) => {
    //   // console.log(res);
    //   const dt = res.data.data;
    //   this.strategy = dt;
    // });
    this.request({
      url: '/strategy.json',
    }).then((res) => (this.strategy = res.data.data));
    // this.$axios.get('/api/aduiovisual/aduiovisual.json').then((res) => {
    //   // console.log(res);
    //   const dt = res.data.data;
    //   this.audio = dt;
    // });
    this.request({
      url: '/aduiovisual/aduiovisual.json',
    }).then((res) => (this.audio = res.data.data));
    // this.$axios.get('/api/vido.json').then((res) => {
    //   this.vido = res.data.data;
    // });
    this.request({
      url: '/vido.json',
    }).then((res) => (this.vido = res.data.data));
  },
  components: {
    FanRecommended,
    Hot,
    HomeShop,
    End,
    HomeBottom,
  },
};
</script>

<style scoped>
.main {
  box-sizing: border-box;
  margin-top: 10px;
  width: 100%;
  /* height: 500px; */
  background-image: url(../../../src/assets/backgroundhome.png);
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: center;
}
.main .mainlogo {
  margin-top: 10px;
}
.main-figure {
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  /* border: 1px solid red; */
  display: flex;
}
.main-figure .item {
  height: 100%;
  flex: 1;
}
.active {
  background: rgba(255, 255, 255, 0.4);
  /* background: blue; */
  /* width: 100px; */
}
.van-swipe {
  padding: 20px;
  text-align: left;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 100%;
  height: 200px;
  /* border: 1px solid red; */
  /* background-color: #fff; */
}
.wrapper {
  width: 100%;
  box-sizing: border-box;
}
.van-swipe-item img {
  display: block;
  position: relative;
}
.van-swipe-item .vidoe {
  margin-top: 15px;
}
.audioimg {
  position: relative;
}
.van-swipe-item .audio {
  position: absolute;
  left: 45px;
  top: 15px;
}
.skilogo img {
  display: inline-block;
}
.biglogo .bigUrl {
  position: absolute;
  right: 20px;
  top: 20px;
}
.biglogo .genrelogo {
  position: absolute;
  right: 30px;
  bottom: 0;
}
.strategy {
  width: 100%;
  /* height: 200px; */
  box-sizing: border-box;
  background: url(../../../src/assets/backgroundstrategy.png);
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: center;
}
.strategy .strategylogo {
  margin-top: 20px;
}
.strategy-img {
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
}
.fan {
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
  /* height: 300px; */
  background: url(../../../src/assets/fan.png);
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: center;
}
.fan .fanlogo {
  margin-top: 20px;
}
.fan .fan-rec {
  width: 100%;
  box-sizing: border-box;
  /* height: 200px; */
  background: #e7ebee;
}
.audio-visual {
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
  /* height: 300px; */
  background: url(../../../src/assets/audiovisual/audiovisualbackground.png);
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: center;
}
.audio-visual .audiologo {
  margin-top: 20px;
}
.audio-visual .audio-content {
  width: 100%;
  box-sizing: border-box;
  /* height: 200px; */
  background: #e7ebee;
  margin-top: 20px;
}
.shop {
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
  /* height: 300px; */
  background: url(../../../src/assets/shop/shopbackground.png);
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: center;
}
.shop .shoplogo {
  margin-top: 20px;
}
.shop .shop-content {
  width: 100%;
  box-sizing: border-box;
  height: 850px;
  /* background: #e7ebee; */
  margin-top: 20px;
}
.bac {
  width: 100%;
  box-sizing: border-box;
  height: 288px;
}
</style>
