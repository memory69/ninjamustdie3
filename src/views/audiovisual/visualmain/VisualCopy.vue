<template>
  <div class="visual-copy">
    <div class="visual-item" v-for="(item,i) in newvisual">
      <img :src="item.imgUrl" alt width="100%" />
      <div class="item-title">
        <p style="line-height:30px;font-weight:bold;font-size:14px">{{item.title}}</p>
      </div>
    </div>
  </div>
  <!-- <p></p> -->
</template>

<script>
export default {
  name: "VisualCopy",
  data() {
    return {
      newvisual: [],
    };
  },
  created() {
    this.newvisual2.forEach((res) => {
      const dt = res.content;
      this.newvisual = dt;
      // console.log(this.newvisual);
    });
  },
  computed: {
    newvisual2() {
      return this.$store.state.visualmain2;
    },
  },
};
</script>

<style scoped>
.visual-copy {
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.visual-item {
  width: calc((100% - 25px) / 2);
  /* height: 100px; */
  position: relative;
  margin-top: 20px;
  /* border: 1px solid red; */
  margin-right: 10px;
  border-radius: 16px;
  overflow: hidden;
}
.item-title {
  width: 100%;
  position: absolute;

  left: 0;
  bottom: 0;
  height: 30px;
  background: white;
}
.item-title:nth-of-type(2n) {
  margin-right: 0;
}
</style>