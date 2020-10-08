<template>
  <div class="shop-add">
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :address-info="addressinfo"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
    <!-- {{edit}} -->
    <!-- <van-area title="标题" :area-list="areaList" /> -->
  </div>
</template>

<script>
import areaList from "../../../../public/api/area/area";
import { Toast } from "vant";
export default {
  name: "ShopAdd",

  data() {
    return {
      id: 1,
      addressinfo: {},
      areaList,
      searchResult: [],
    };
  },
  methods: {
    onSave(val) {
      //   Toast("save");
      //   console.log(val);
      val.id++;
      val.id = 1;
      this.$store.commit("setAddress", val);
      this.$router.go(-1);
    },
    onDelete() {
      //   Toast("delete");
      this.addressinfo = {};
      this.$store.commit("setAddress", this.addressinfo);
      this.$router.go(-1);
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "xxx",
            address: "xxx",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  created() {
    if (this.edit != "") {
      //   console.log(this.edit);
      this.addressinfo = this.edit;
      //   var leng = this.edit.address.lastIndexOf(" ");
      //   var leng1 = this.edit.address.indexOf(" ");
      //   var province = this.edit.address.substring(0, leng1);
      //   var city = this.edit.address.substring(7, leng1);
      //   var county = this.edit.address.substring(8, leng);
      //   var addressDetail = this.edit.address.substring(100, leng);
      //   console.log(addressDetail);
      //   this.addressinfo.province = province;
      //   this.addressinfo.city = city;
      //   this.addressinfo.county = county;
      //   this.addressinfo.addressDetail = addressDetail;
      //   console.log(this.addressinfo.city);
    }
  },
  computed: {
    edit() {
      return this.$store.state.editaddress;
    },
  },
};
</script>

<style scoped>
</style>