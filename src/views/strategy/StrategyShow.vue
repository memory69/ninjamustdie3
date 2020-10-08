<template>
  <div class="strategy-show">
    <home-header></home-header>
    <div class="top">
      <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
      <!-- {{aduio}} -->
    </div>
    <div class="main">
      <p style="font-size:20px;font-weight:bold; line-height: 25px;">{{content.title}}</p>
      <p style="font-size:10px;color:#999999">{{content.time}}</p>
      <van-divider :style="{borderColor: '#999999'}" />
      <div class="main-next">{{content.title}}</div>
      <div style="margin-bottom:20px">
        <video
          id="myVideo"
          class="video-js vjs-big-play-centered vjs-fluid"
          controls
          preload="auto"
          width="100%"
          height="100%"
        >
          <source type="video/mp4" :src="currentvido" />
        </video>
      </div>
    </div>
    <!-- {{aduio}} -->
    <end></end>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
import End from "../components/End";
export default {
  name: "StrategyShow",
  data() {
    return {
      content: [],
      currentvido:
        "http://www.res.ren3.pandadastudio.com/upload/default/20200722/12ee33462ddf33205b78a8f5d8a06c9e.mp4",
    };
  },
  created() {
    this.aduio.forEach((res) => {
      this.currentvido = res.vido;
      this.content = res;
    });
  },

  //   mounted() {
  //     this.getData();

  //     //console.log(this) //vue的原型链上有$video方法
  //     //console.log(this.$video)
  //   },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    initVideo() {
      //此处初始化的调用，我放在了获取数据之后的方法内，而不是放在钩子函数mounted
      //页面dom元素渲染完毕，执行回调里面的方法
      this.$nextTick(() => {
        let myPlayer = this.$video(document.getElementById("myVideo"), {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          autoplay: false,
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          //设置视频播放器的显示宽度（以像素为单位）
          // width: "800px",
          //设置视频播放器的显示高度（以像素为单位）
          // height: "400px",
          controlBar: {
            playToggle: true,
          },
        });
      });
    },
  },
  computed: {
    aduio() {
      return this.$store.state.vido;
    },
  },

  components: {
    HomeHeader,
    End,
  },
};
</script>

<style scoped>
.strategy-show {
  margin-top: 50px;
  width: 100%;
  background: #e8e8ed;
  box-sizing: border-box;
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
.main-next {
  text-align: center;
}
.video-js {
  width: 120% !important;
  height: 100% !important;
}
.video-js .vjs-big-play-button {
  font-size: 3em;
  line-height: 42px !important;
  height: 50px !important;
  width: 50px !important;
  display: block;
  position: absolute !important;
  left: 50% !important;
  top: 50% !important;
  margin-top: -25px !important;
  margin-left: -25px !important;
  padding: 0;
  cursor: pointer;
  opacity: 1;
  border: 0.06666em solid #fff;
  background-color: #2b333f;
  background-color: rgba(43, 51, 63, 0.7);
  border-radius: 50% !important;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}
.vjs-paused .vjs-big-play-button,
.vjs-paused.vjs-has-started .vjs-big-play-button {
  display: block !important;
}
.myVideo-dimensions {
  width: 100% !important;
  height: 100% !important;
  display: block !important;
}
.vjs-poster {
  background-size: 100% 100% !important;
}
</style>