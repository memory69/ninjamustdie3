<template>
  <div class="visual-main2">
    <div class="main-title">
      <div class="title-item" v-for="(item, i) in visual2">
        <p style="font-size:13px" @click="handle(item.id)">{{ item.maintitle }}</p>
      </div>
    </div>
    <div class="main-content" v-show="show">
      <div class="content-item" v-for="(item, i) in newvisual2">
        <img :src="item.imgUrl" alt width="100%" />
        <div class="content-title">
          <p style="line-height:35px;font-weight:bold">{{ item.title }}</p>
        </div>
      </div>
    </div>
    <visual-copy v-show="!show"></visual-copy>
    <end-up></end-up>
    <end></end>
  </div>
</template>

<script>
import VisualCopy from '../visualmain/VisualCopy';
import End from '../../components/End';
import EndUp from '../../components/EndUp';
// import { request } from '../../../network/request';
export default {
  name: 'VisualMain2',
  data() {
    return {
      show: true,
      visual2: [],
      currentvisual2: [],
      othervisual2: [],
      newvisual2: [
        {
          id: 11,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200709/380737e4d2658b83ec2ba89e5ec6d4c7.jpg!w380.jpg',
          title: '夏梦·琳',
        },
        {
          id: 12,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200709/61a2754b33e8ddb826383316ee6de319.jpg!w380.jpg',
          title: '周年庆-1周年',
        },
        {
          id: 13,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200709/661431d6111f9a8236c869f699c0eb1d.jpg!w380.jpg',
          title: '夏日大冒险',
        },
        {
          id: 14,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200709/121bad171bdab5b93e284d90186cc14e.jpg!w380.jpg',
          title: '万圣节',
        },
        {
          id: 15,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200709/e72fa484af8583a1d711483ee4b5d45d.jpg!w380.jpg',
          title: '深渊',
        },
        {
          id: 16,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200709/86383e500d4a1dbfcda7a3a7055ef336.jpg!w380.jpg',
          title: '赛季',
        },
        {
          id: 17,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200709/6cd7e793f72f9517adacac23adb7459a.jpg!w380.jpg',
          title: '庆典',
        },
        {
          id: 18,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200709/ba4de80d223381cafb3d4d0e8d79f6fe.jpg!w380.jpg',
          title: '开运灵猫',
        },
        {
          id: 19,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200714/00c2144b3397987bf176ceb400df7ebb.jpg!w380.jpg',
          title: '放课小椒',
        },
        {
          id: 20,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200714/00c2144b3397987bf176ceb400df7ebb.jpg!w380.jpg',
          title: '放课小椒',
        },
        {
          id: 21,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200714/ef88271eeb1f04a5d6f40b677b558c60.jpg!w380.jpg',
          title: '霜炎之歌',
        },
        {
          id: 22,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200714/cf84adba569cb68067bee052c34dd563.jpg!w380.jpg',
          title: '春日樱花祭',
        },
        {
          id: 23,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200714/c18e02b578d25a73c84d9d18d86ee7a6.jpg!w380.jpg',
          title: '冰雪',
        },
        {
          id: 24,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200714/70b7962cab6cf4490584977f4b613c30.jpg!w380.jpg',
          title: 'Joker',
        },
        {
          id: 25,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200714/6da8731febc461ea922f9edb77bdc8c9.jpg!w380.jpg',
          title: '命运之剑',
        },
        {
          id: 26,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200714/e4d789e703df22a216a775c5d85ccb55.jpg!w380.jpg',
          title: '狼魂绝刃',
        },
        {
          id: 27,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200723/ceb42e48ef04fa4495a047e47dce1df1.jpg!w380.jpg',
          title: '樱花之舞',
        },
        {
          id: 28,
          imgUrl: 'http://www.res.ren3.pandadastudio.com/_t/upload/rzbxs/20200723/beaf0b87dc44f5d8789b4336fefe609a.jpg!w380.jpg',
          title: '碧蓝沧海',
        },
      ],
    };
  },
  created() {
    // this.$axios.get("/api/visualmain/visualmain2.json").then((res) => {
    //   this.visual2 = res.data.data;
    //   this.visual2.forEach((item) => {
    //     console.log(item);
    //   });
    // });
    // request({
    //   url:'/visualmain/visualmain2.json'
    // }).then(res => {
    //   this.visual2 = res.data.data
    //   this.visual2.forEach(item => )
    // })
  },
  methods: {
    handle(index) {
      if (index == 1) {
        this.currentvisual2 = this.visual2.filter((item) => {
          return index == item.id;
        });
        this.show = true;
      } else {
        this.othervisual2 = this.visual2.filter((item) => {
          return index == item.id;
        });
        this.show = false;
      }
      this.currentvisual2.forEach((res) => {
        this.newvisual2 = res.content;
        // console.log(this.newvisual2);
      });
      this.$store.commit('setvisual', this.othervisual2);
    },
  },
  components: {
    VisualCopy,
    EndUp,
    End,
  },
};
</script>

<style scoped>
.visual-main2 {
  width: 100%;
  box-sizing: border-box;
  /* height: 800px; */
  background: #e8ebed;
}
.main-title {
  width: 60%;
  box-sizing: border-box;
  height: 40px;
  margin: 0 auto;
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
  padding: 15px;
}
.main-content .content-item {
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
  /* height: 200px; */
  /* border: 1px solid red; */
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}
.content-title {
  width: 100%;
  height: 35px;
  position: absolute;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  background: white;
}
</style>
