<template>
  <div class="ower">
    <div class="main">
      <div class="main-about">
        <div class="main-top">
          <div class="left">
            <img :src="bigpc.owner" alt width="170px" />
          </div>
          <div class="right">
            <img v-for="(item, i) in owner" :src="item.imgUrl" alt width="50px" @click="handle(item.id)" />
          </div>
        </div>
        <div class="main-title">
          <div class="title-left">
            <img :src="bigpc.name" alt width="60px" style />
          </div>
          <div class="title-right">
            <img class="play" src="../../assets/ower.png" alt width="20px" />
            <img :src="bigpc.title" alt width="150px" style="margin-left:10px;margin-top:2px" />
            <p>{{ bigpc.describe }}</p>

            <van-icon style="margin-top:5px;" class="frt" name="arrow-down" />
            <a
              href="javascript:void(0)"
              style="font-size:13px;color:black;font-weight:bold;
              margin-top:5px;
              border-bottom:1px solid black"
              @click="showPopup"
              class="frt"
              >查看更多</a
            >
          </div>
        </div>
        <van-popup v-model="vshow">
          <div class="pop">
            <p>{{ bigpc.more }}</p>
          </div>
        </van-popup>
        <div class="main-bottom">
          <div class="bottom-item">
            <p>{{ bigpc.bir }}</p>
            <p>{{ bigpc.tall }}</p>
            <p>{{ bigpc.personality }}</p>
            <p>{{ bigpc.hobby }}</p>
          </div>
        </div>
      </div>
    </div>
    <end-up></end-up>
    <end></end>
  </div>
</template>

<script>
import EndUp from '../components/EndUp';
import End from '../components/End';
export default {
  name: 'Ower',
  data() {
    return {
      vshow: false,
      owner: [],
      show: false,
      bigUrl: [],
      bigpc: {
        owner: 'https://www.res.ren3.pandadastudio.com/_nuxt/img/xh_img0.2f4cb74.png',
        title: 'https://www.res.ren3.pandadastudio.com/_nuxt/img/rj_xh_slogan.4383a23.png',
        name: 'https://www.res.ren3.pandadastudio.com/_nuxt/img/rj_xh_name.11d8276.png',
        describe:
          '小黑自小成长于忍村，立志成为一名伟大的忍者。但幼时的小黑曾因体内的巨大能量而经历了一段黑暗的时光，幸得长老的教导和隼白等伙伴的帮助才使得小黑走出阴影，成长为现在这个乐观开朗的少年。但几年后，和之国的和平被打破，隼白的改变使小黑产生信念的挣扎。而在苦无禁地的修行之中，小黑重回过去，冲破内心的桎梏，击败白小黑，成功觉醒了体内蕴藏的龙焰之力。那一刻的小黑建立了真正的忍者信念，明白了属于自己的责任和使命。',
        bir: '⽣日：12⽉5⽇（16岁，射手座）',
        tall: '身⾼：168CM',
        personality: '个性：有神秘感，乐观而平易近人。面对困难不服输，虽然执行任务时很果断，但偶尔也会因心软而犹豫不决。',
        hobby: '爱好：甩围巾、耍酷、喜欢活跃气氛',
        more:
          '小黑自小成长于忍村，立志成为一名伟大的忍者。但幼时的小黑曾因体内的巨大能量而经历了一段黑暗的时光，幸得长老的教导和隼白等伙伴的帮助才使得小黑走出阴影，成长为现在这个乐观开朗的少年。但几年后，和之国的和平被打破，隼白的改变使小黑产生信念的挣扎。而在苦无禁地的修行之中，小黑重回过去，冲破内心的桎梏，击败白小黑，成功觉醒了体内蕴藏的龙焰之力。那一刻的小黑建立了真正的忍者信念，明白了属于自己的责任和使命。',
      },
    };
  },
  created() {
    // this.$axios.get('/api/recordowner.json').then((res) => {
    //   const dt = res.data.data;
    //   this.owner = dt;
    // });
    this.request({
      url: '/recordowner.json',
    }).then((res) => (this.owner = res.data.data));
  },
  methods: {
    handle(index) {
      this.bigUrl = this.owner.filter((res) => {
        // console.log(res);
        return res.id == index;
      });
      //   console.log(this.bigUrl);
      this.bigUrl.forEach((res) => {
        // console.log(res);
        this.bigpc = res;
      });
    },
    showPopup() {
      this.vshow = true;
    },
  },
  components: {
    EndUp,
    End,
  },
};
</script>

<style scoped>
.ower {
  width: 100%;
  /* height: 300px; */
  box-sizing: border-box;
  /* height: 200px; */
  background: #e7ebee;
  border: 1px solid #eeeeee;
}
.main {
  margin: 0 auto;
  width: 100%;
  margin-top: 30px;
  box-sizing: border-box;
  /* height: 800px; */
  background: url(../../../src/assets/endurerecordbackground.png);
  background-size: 100%;
  background-repeat: no-repeat;
  /* border: 1px solid red; */
}
.main-about {
  width: 100%;
  /* height: 2000px; */
  box-sizing: border-box;
  padding: 60px 30px 0 30px;
}
.main-top {
  width: 100%;
  box-sizing: border-box;
  /* border: 1px solid red; */
  display: flex;
  /* height: 100px; */
}
.main-top .left {
  width: 250px;
  margin-left: 40px;
}
.main-top .right {
  text-align: right;
  margin-right: 20px;
  flex: 1;
}
.main-title {
  width: 100%;
  box-sizing: border-box;
  /* border: 1px solid red; */
  /* height: 200px; */
  padding-left: 10px;
  display: flex;
}

.main-title .title-right {
  flex: 1;
  margin-right: 20px;
  /* border: 1px solid red; */
  padding-left: 15px;
  position: relative;
}
.title-right .play {
  position: absolute;
  left: 15px;
  top: 3px;
}
.title-right p {
  font-size: 13px;
  line-height: 25px;
  color: #33363e;
  font-weight: bold;
}
.main-bottom {
  width: 90%;
  box-sizing: border-box;
  margin-top: 20px;
  margin-left: 20px;
  background: url(../../../src/assets/owner.png);
  background-size: 100%;
  /* height: 200px; */
}
.main-bottom .bottom-item {
  width: 100%;
  height: 249px;
  box-sizing: border-box;
  padding-top: 20px;
  padding-left: 60px;
}
.bottom-item p {
  font-size: 11px;
  font-weight: bold;
  line-height: 20px;
}
.pop p {
  padding: 20px;
  font-size: 13px;
  line-height: 15px;
}
</style>
