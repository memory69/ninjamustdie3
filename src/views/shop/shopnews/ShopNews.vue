<template>
  <div class="shop-news">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />

    <van-cell title="收货地址" is-link @click="address">
      <template #label>
        <p>{{shopaddress.name}}</p>
        <p>{{shopaddress.tel}}</p>
        <p>{{shopaddress.address}}</p>
      </template>
    </van-cell>
    <div class="main" style="margin-top:10px">
      <!-- 优惠券单元格 -->
      <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
      <!-- 优惠券列表 -->
      <van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>

      <!-- <van-cell title="优惠券" is-link /> -->
      <van-card num="1" :price="value" desc :title="title" :thumb="imgUrl" />
      <!-- <van-cell title="商品金额" :value="'-'+value+'.00'" value-class="color" /> -->
      <van-cell title="邮费" value="10.00" value-class="color" />
      <van-cell title="订单备注" />
    </div>
    <van-submit-bar
      :price="price"
      button-text="提交订单"
      tip="你的收货地址不支持同城送, 我们已为你推荐快递"
      tip-icon="info-o"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元",
};
// import ShopHeader from "../shopheader/ShopHeader";
export default {
  name: "ShopNews",
  data() {
    return {
      showList: false,
      dele: 0,
      value: "",
      imgUrl: "",
      title: "",
      price: 8900,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
    };
  },
  methods: {
    onSubmit() {},
    onClickLeft() {
      this.$router.go(-1);
    },
    address() {
      this.$router.push("/shopaddress");
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
      if (index == 0) {
        this.coupons.forEach((res) => {
          // console.log(res);
          this.dele = res.value;
        });
        this.shopping1.forEach((res) => {
          this.price = res.price2 + 1000 - this.dele;
          this.value = res.price1;
        });
      } else {
        this.dele = 0;
        this.shopping1.forEach((res) => {
          this.price = res.price2 + 1000 - this.dele;
          this.value = res.price1;
        });
      }

      // console.log(this.coupons.value);
      // console.log(item)
    },
    onExchange(code) {
      this.coupons.push(coupon);
      console.log("1111");
    },
  },
  created() {
    this.shopping1.forEach((res) => {
      this.price = res.price2 + 1000 - this.dele;
      this.value = res.price1;
      this.imgUrl = res.imgUrl;
      this.title = res.title;
      // console.log(res);
    });
  },
  computed: {
    shopping1() {
      return this.$store.state.currentshopping;
    },
    shopaddress() {
      return this.$store.state.shopaddress;
    },
  },
  components: {},
};
</script>

<style scoped>
.shop-news {
  width: 100%;
  box-sizing: border-box;
  background: #e8e8ed;
}
.color {
  color: red;
}
</style>