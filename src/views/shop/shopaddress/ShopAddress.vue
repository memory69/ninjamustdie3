<template>
  <div class="shop-address">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @click-item="item"
      @add="onAdd"
      @edit="onEdit"
    />
    <!-- {{add}} -->
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  name: "ShopAddress",
  data() {
    return {
      arr: [],
      newadd: {},
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "xxxx",
          tel: "13000000000",
          address: "山东省 临沂市 莒南 xxxxxxx",
          province: "山东省",
          city: "临沂市",
          county: "莒南",
          addressDetail: "xxxxxxx",
          isDefault: true,
        },
        // {
        //   id: "2",
        //   name: "xxxx",
        //   tel: "1310000000",
        //   address: "山东省 临沂市 莒南 xxxxxxx",
        // },
      ],
      disabledList: [
        {
          id: "3",
          name: "xxx",
          tel: "1320000000",
          address: "山东省 临沂市 莒南 xxxxxxx",
        },
      ],
    };
  },
  created() {
    if (this.add != "") {
      this.newadd = this.add;
      this.newadd.address =
        this.add.province +
        " " +
        this.add.city +
        " " +
        this.add.county +
        " " +
        this.add.addressDetail;
      this.arr = Object.assign({}, this.newadd);
      // this.arr.forEach((res) => {
      this.list.push(this.arr);
      //   console.log(this.arr);
      // });
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onAdd() {
      this.$store.commit("setEdit", "");
      this.$router.push("/shopadd");
    },
    onEdit(item, index) {
      //   Toast("编辑地址:" + index);
      this.$store.commit("setEdit", item);
      this.$router.push("/shopadd");
      //   console.log(item);
    },
    item(index) {
      //   console.log(index);
      this.$store.commit("setShopAddress", index);
    },
  },
  computed: {
    add() {
      return this.$store.state.addaddress;
    },
  },
};
</script>

<style scoped>
.shop-address {
  width: 100%;
  box-sizing: border-box;
}
</style>