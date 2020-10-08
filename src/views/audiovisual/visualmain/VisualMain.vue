<template>
  <div class="visual-main">
    <div class="main-title">
      <div class="title-item" v-for="(item, i) in visual">
        <p style="font-size:13px" @click="handle(item.id)">{{ item.maintitle }}</p>
      </div>
    </div>
    <div class="main-content">
      <div class="content-item" v-for="(item, i) in newvisual">
        <img :src="item.imgUrl" alt width="100%" />
        <div class="content-title">
          <p style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size:13px">{{ item.title }}</p>
          <p style="font-size:10px;color:#a7b3c5;margin-top:3px">{{ item.time }}</p>
        </div>
      </div>
    </div>
    <end-up></end-up>
    <end></end>
  </div>
</template>

<script>
import EndUp from '../../components/EndUp';
import End from '../../components/End';
// import { request } from '../../../network/request';
export default {
  name: 'VisualMain',
  data() {
    return {
      visual: [],
      currentvisual: [],
      newvisual: [
        {
          id: 11,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200812/455dfa21ddf7e9da930dbdd9e8d8cbf1.jpg!w240.jpg',
          title: '忍3官方超燃CG—月湖之战！',
          time: '2020-08-11 15:07:16',
        },
        {
          id: 12,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200812/4823a3174164f033b8ee11cfbdd7b60e.jpg!w240.jpg',
          title: '火龙炎弹————小黑出场动画',
          time: '2020-08-12 11:57:09',
        },
        {
          id: 13,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200812/66fd555ab84e707b0dda1af3916b36c6.png!w240.jpg',
          title: '第九章新剧情pv',
          time: '2020-08-11 21:02:58',
        },
        {
          id: 14,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200811/dd02cd7405213058376ec40a10b0bb8b.jpg!w240.jpg',
          title: '月湖之战始末',
          time: '2020-08-11 21:09:30',
        },
        {
          id: 15,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200811/49c049429ae78300b244c47667913893.jpg!w240.jpg',
          title: '《忍者必须死3》第八章·剧情pv',
          time: '2020-08-11 21:10:36',
        },
        {
          id: 16,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200811/16015ca7e899f29f6783d51b0eabfd45.jpg!w240.jpg',
          title: '《忍者必须死3》开场CG',
          time: '2020-08-11 21:11:19',
        },
      ],
    };
  },
  created() {
    // this.$axios.get('/api/visualmain/visualmain.json').then((res) => {
    //   // console.log(res);
    //   const dt = res.data.data;
    //   this.visual = dt;
    // });
    this.request({
      url: '/visualmain/visualmain.json',
    }).then((res) => (this.visual = res.data.data));
  },
  methods: {
    handle(index) {
      this.currentvisual = this.visual.filter((item) => {
        return index == item.id;
      });
      this.currentvisual.forEach((res) => {
        this.newvisual = res.content;
      });
    },
  },
  components: {
    EndUp,
    End,
  },
};
</script>

<style scoped>
.visual-main {
  width: 100%;
  box-sizing: border-box;
  /* height: 800px; */
  background: #e8ebed;
}
.main-title {
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  text-align: center;
  display: flex;
}
.title-item {
  flex: 1;
  /* border: 1px solid red; */
  /* border-right: 1px solid black; */
}
.title-item p {
  line-height: 40px;
}
.main-content {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.content-item {
  width: calc((100% - 15px) / 2);
  margin-top: 15px;
  margin-right: 10px;
  /* border: 1px solid red; */
  height: 105px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}
.content-title {
  width: 100%;
  box-sizing: border-box;
  height: 30px;
  background: white;
  padding-left: 6px;
  position: absolute;
  left: 0;
  bottom: 0;
}
.content-title p {
  line-height: 15px;
}
.content-item:nth-of-type(2n) {
  margin-right: 0;
}
</style>
