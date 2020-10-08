<template>
  <div class="information-main">
    <div class="item" v-for="(item, i) in news" @click="handle(item.id)">
      <div class="left">
        <img :src="item.newUrl" alt width="110px" />
      </div>
      <div class="right">
        <van-tag plain type="primary" v-show="show">{{ item.tag }}</van-tag>
        <span>{{ item.time }}</span>
        <p style="font-size:13px">{{ item.title }}</p>
        <!-- <p>{{active}}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { request } from '../../network/request';
export default {
  name: 'InformationMain',
  data() {
    return {
      content: [],
      news: [],
      show: true,
    };
  },
  created() {
    switch (this.active) {
      case 0:
        // this.$axios.get("/api/new.json").then((res) => {
        //   const dt = res.data.data;
        //   this.news = dt;
        // });
        this.request({
          url: '/new.json',
        }).then(
          (res) =>
            // console.log(res.data);
            (this.news = res.data.data)
        );
        break;
      case 1:
        // this.$axios.get('/api/news.json').then((res) => {
        //   const dt = res.data.data;
        //   this.news = dt;
        // });
        this.request({
          url: '/news.json',
        }).then((res) => (this.news = res.data.data));
        break;
      case 2:
        // this.$axios.get('/api/aboutannouncement.json').then((res) => {
        //   const dt = res.data.data;
        //   this.news = dt;
        // });
        this.request({ url: '/aboutannouncement.json' }).then((res) => (this.news = res.data.data));
        // this.show = false;
        break;
      case 3:
        // this.$axios.get('/api/activity.json').then((res) => {
        //   const dt = res.data.data;
        //   this.news = dt;
        // });
        this.request({
          url: '/activity.json',
        }).then((res) => (this.news = res.data.data));
        break;
    }
  },
  methods: {
    handle(index) {
      this.content = this.news.filter((item) => {
        return index == item.id;
      });
      this.$router.push('/informationshow/' + index);
      // console.log(this.content);
      this.$store.commit('setContent', this.content);
    },
  },
  computed: {
    active() {
      return this.$store.state.active1;
    },
  },
};
</script>

<style scoped>
.information-main {
  width: 100%;
  /* height: 200px; */
  box-sizing: border-box;
  background: url(../../../src/assets/backgroundcommme.jpg);
}
.item {
  width: 100%;
  height: 100px;
  padding: 15px;
  display: flex;
  box-sizing: border-box;
  border-bottom: 1px solid #d1d4d7;
}
.left img {
  height: 60px;
}
.item .right {
  margin-left: 20px;
  flex: 1;
}
.right span:last-of-type {
  margin-left: 5px;
  color: #a3a5a7;
  font-size: 12px;
}
.right p {
  margin-top: 10px;
  line-height: 25px;
  color: #333333;
}
</style>
