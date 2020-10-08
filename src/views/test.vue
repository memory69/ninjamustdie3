<template>
  <div class="test">
    <!-- {{arl}} -->
    <van-area title="标题" :area-list="areaList" />
    <div></div>
  </div>
</template>

<script>
import areaList from '../../public/api/area/area';
export default {
  name: 'test',
  // props: ["areaList1"],
  data() {
    return {
      arl: [],
      areaList,
    };
  },

  // created() {
  //   // console.log(this.$api);
  //   // this.$api.post()
  //   // export default {};
  //   this.$axios.get("/api/area/area.js").then((res) => {
  //     let arr = JSON.stringify(res.data);
  //     var obj = JSON.parse(arr);
  //     console.log(obj.province_list);
  //     // this.arl = arr;
  //     // this.areaList = arr;
  //     // let ary = location.province_list;
  //     // console.log(typeof this.arl);

  //     // let ary = this.arl.split(",");
  //     // console.log(ary);
  //     // ary.forEach((item) => {
  //     //   console.log(item);
  //     // });
  //     // // for (var i in this.arl) {
  //     //   // console.log(this.arl[1]);
  //     // }
  //     // // this.arl.findIndex((item) => {
  //     //   console.log(item);
  //     // });
  //     // // this.areaList = arr;
  //     // console.log(this.arl);
  //     // var dt = res.data;
  //     // this.areaList1 = dt;
  //   });
  // },

  methods: {},
};
</script>

<style scoped>
.test01 {
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  border: 1px solid red;
}
</style>
