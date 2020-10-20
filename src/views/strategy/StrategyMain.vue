<template>
  <div class="strategy-main">
    <div class="item" v-for="(item, i) in news" @click="handle(item.id)">
      <div class="left">
        <img :src="item.newUrl" alt width="125px" />
      </div>
      <div class="right">
        <span style="font-size:10px">{{ item.time }}</span>
        <p style="font-size:13px">{{ item.title }}</p>
        <!-- <p>{{active}}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StrategyMain',
  data() {
    return {
      news: [],
      show: true,
    };
  },
  created() {
    switch (this.active) {
      case 1:
        // this.$axios.get("/api/strategynews.json").then((res) => {
        //   const dt = res.data.data;
        //   this.news = dt;
        // });
        this.request({
          url: '/strategynews.json',
        }).then((res) => (this.news = res.data.data));
        break;

      case 2:
        // this.$axios.get("/api/strategynovice.json").then((res) => {
        //   const dt = res.data.data;
        //   this.news = dt;
        // });
        this.request({
          url: '/strategynovice.json',
        }).then((res) => (this.news = res.data.data));
        break;
      case 3:
        // this.$axios.get('/api/strategyadvanced.json').then((res) => {
        //   const dt = res.data.data;
        //   this.news = dt;
        // });
        this.request({
          url: '/strategyadvanced.json',
        }).then((res) => (this.news = res.data.data));
        // this.show = false;
        break;
      case 4:
        // this.$axios.get('/api/strategypeak.json').then((res) => {
        //   const dt = res.data.data;
        //   this.news = dt;
        // });
        this.request({
          url: '/strategypeak.json',
        }).then((res) => (this.news = res.data.data));
        break;
    }
  },
  methods: {
    handle(index) {
      var audio = this.news.filter((item) => {
        return index == item.id;
      });
      this.$store.commit('setVido', audio);
      this.$router.push('/strategyshow/' + index);
    },
  },
  computed: {
    active() {
      return this.$store.state.active2;
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
  height: 110px;
  padding: 15px;
  display: flex;
  box-sizing: border-box;
  border-bottom: 1px solid #d1d4d7;
}
.left img {
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
}
.item .right {
  margin-left: 15px;
  flex: 1;
}
.right span:last-of-type {
  margin-left: 5px;
  color: #a3a5a7;
  font-size: 12px;
}
.right p {
  margin-top: 10px;
  line-height: 20px;
  color: #333333;
}
</style>
