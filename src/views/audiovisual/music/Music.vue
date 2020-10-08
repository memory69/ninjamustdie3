<template>
  <div class="music">
    <div class="mainmusic">
      <div class="music-item" v-for="(item, i) in currentmusic" :class="{ active: i == index }" @click="handle(item.id)">
        <div class="left">
          <p style="font-size:13px">{{ item.id }}</p>
        </div>
        <div class="right">
          <p style="font-size:13px;font-weight:bold">{{ item.title }}</p>
          <p style="font-size:11px;color:#9da0a2">{{ item.author }}</p>
        </div>
      </div>
      <div class="audiomain" v-show="!show">
        <div style="display:flex; text-align: center;margin-bottom:10px">
          <img src="../../../assets/musicbackground.jpg" alt width="50px" style="margin-left:20px; border-radius: 10px;" />
          <p style="margin-top:18px;flex:1;margin-left:-20px;font-weight:bold">{{ title }}</p>
        </div>

        <audio class="myaudio" preload="auto" controls loop ref="audio">
          <source :src="audiomusic" type="audio/mpeg" />
        </audio>
      </div>
      <div class="audiomain1" v-show="show">
        <div style="display:flex; text-align: center;margin-bottom:10px">
          <img src="../../../assets/musicbackground.jpg" alt width="50px" style="margin-left:20px; border-radius: 10px;" />
          <p style="margin-top:18px;flex:1;margin-left:-20px;font-weight:bold">{{ title }}</p>
        </div>

        <audio class="myaudio" preload="auto" controls loop ref="audio">
          <source :src="audiomusic" type="audio/mpeg" />
        </audio>
      </div>
    </div>

    <end></end>
  </div>
</template>

<script>
import End from '../../components/End';
// const End = () => import('../../components/End');

export default {
  name: 'Music',
  data() {
    return {
      // dt: [],
      index: '',
      isshow: false,
      show: true,
      title: '祭奠',
      currentmusic: [],
      audiomusic: 'http://www.ures.ren3.pandadastudio.com/default/20200812/23e26711fc0e70574ce2d321b7ba7d3b.wav',
    };
  },
  created() {
    // this.$axios.get('/api/music/music.json').then((res) => {
    //   const dt = res.data.data;
    //   this.currentmusic = dt;
    // });
    this.request({
      url: '/music/music.json',
    }).then((res) => (this.currentmusic = res.data.data));
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll); //在mounted钩子中给window添加一个滚动滚动监听事件
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll); //销毁
  },
  methods: {
    handle(index) {
      var dt = this.currentmusic.filter((item) => {
        return index == item.id;
      });
      this.index = index - 1;
      dt.forEach((res) => {
        this.title = res.title;
        this.audiomusic = res.music;
      });

      this.$refs.audio.src = this.audiomusic;
      this.$refs.audio.play();
    },
    handleScroll() {
      //监听元素到顶部的距离  并判断滚动的距离如果大于了元素到顶部的距离时
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollTop);
      if (scrollTop < 100) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
  components: {
    End,
  },
};
</script>

<style scoped>
.music {
  width: 100%;
  box-sizing: border-box;
  background: #e8ebed;
  /* height: 700px; */
  /* border: 1px solid red; */
}
.mainmusic {
  width: 100%;
  box-sizing: border-box;
  height: 570px;
}
.music-item {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  display: flex;
}
.music-item .left {
  width: 50px;
  text-align: center;
  line-height: 50px;
}
.music-item .right {
  padding: 10px 5px;
  flex: 1;
  line-height: 18px;
}
.audiomain {
  width: 100%;
  box-sizing: border-box;
}
.audiomain .myaudio {
  width: 100%;
  outline: none;
}
.audiomain1 {
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  bottom: 0;
}
.audiomain1 .myaudio {
  width: 100%;
  outline: none;
}
.active {
  background: #686868;
  border-radius: 15px;
}
</style>
