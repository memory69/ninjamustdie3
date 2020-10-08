<template>
  <div class="shopping">
    <div class="icon">
      <van-icon name="arrow-left" @click="back" />
      <van-icon class="frt" name="cart-o" />
    </div>
    <van-swipe @change="onChange">
      <van-swipe-item v-for="(item,i) in shopping1">
        <img :src="item.imgUrl" alt width="100%" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/1</div>
      </template>
    </van-swipe>
    <div class="main">
      <p style="color:#ff5000;font-size:20px;font-weight:bold">{{newshopping.price}}</p>
      <p style="font-size:14px;font-weight:bold">{{newshopping.title}}</p>
      <p style="font-size:11px;color:#999999">
        <span>快递：快递包邮</span>
        <span style="margin:0 20%">月销：10</span>
        <span>浙江嘉兴</span>
      </p>
    </div>
    <div class="main-next">
      <van-cell is-link>
        <template #title>
          <span style="font-size:12px;color:#999999">服务</span>
          <span
            style="margin-left:15px;font-size:11px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis"
          >付款后5天内发货·订单保险·7天无理由退换</span>
        </template>
      </van-cell>
      <van-cell is-link style="margin-top:10px">
        <template #title>
          <span style="font-size:12px;color:#999999">规格</span>
          <span
            style="margin-left:15px;font-size:11px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis"
          >请选择 大小 颜色分类</span>
        </template>
      </van-cell>
      <van-cell is-link style="margin-top:-1px">
        <template #title>
          <span style="font-size:12px;color:#999999">参数</span>
          <span
            style="margin-left:15px;font-size:11px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis"
          >适用人群分类....</span>
        </template>
      </van-cell>
      <van-cell
        style="margin-top:10px"
        title="宝贝评价（0）"
        title-style="font-size:12px"
        value="查看全部"
        value-class="change"
        is-link
      />
      <div class="more1">
        <p>暂无评价</p>
      </div>
      <div class="shop">
        <div class="shop3">
          <img src="../../../assets/shop/shopcar.webp" alt width="70px" />
          <div class="middle">
            <p style="font-size:12px;margin-top:25px">忍者必须死3周边店</p>
            <p style="font-size:12px;color:#0066ff">
              <van-icon name="diamond" />
              <van-icon name="diamond" />
              <van-icon name="diamond" />
            </p>
          </div>
          <div class="right">
            <input type="button" value="全部宝贝" />
            <input type="button" value="进店逛逛" />
          </div>
        </div>
        <div style="font-size:10px;">
          <div style="display:inline-block">
            宝贝描述：
            <span style="color:#ff5000">4.9 高</span>
          </div>
          <div style="display:inline-block;margin:0 9%">
            卖家服务：
            <span style="color:#ff5000">4.9 高</span>
          </div>
          <div style="display:inline-block">
            物流服务：
            <span style="color:#ff5000">4.8 高</span>
          </div>
        </div>
      </div>
      <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px', }">
        <van-icon name="photo-o" />详情
      </van-divider>
      <div class="img-detail">
        <img v-for="(item,i) in newshopping.detial" :src="item.imgUrl" alt width="100%" />
      </div>
    </div>
    <div class="main-bottom">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
        <van-goods-action-icon icon="cart-o" :badge="count" text="购物车" />
        <van-goods-action-icon
          icon="star"
          @click="collent"
          :class="{'active':isshow}"
          text="已收藏"
          color="#ff5000"
        />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" @click="shopping" text="立即购买" />
      </van-goods-action>
    </div>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goods.goodsId"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
export default {
  name: "Shopping",
  data() {
    return {
      isshow: false,
      count: "",
      show: false,
      newshopping: [],
      current: 0,
      goods: {
        picture: "",
        goodsId: "",
      },
      sku: {
        tree: [],

        list: [],
        price: "", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
      },
    };
  },
  created() {
    this.shopping1.forEach((res) => {
      // console.log(res);
      this.newshopping = res;
      this.sku.price = res.price1;
      this.goods.picture = res.imgUrl;
    });
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    back() {
      this.$router.go(-1);
    },
    shopping() {
      this.show = true;
    },
    onBuyClicked() {
      this.$router.push("/shopnews");
    },
    onAddCartClicked() {
      this.count++;
    },
    collent() {
      this.isshow = true;
    },
  },
  computed: {
    shopping1() {
      return this.$store.state.currentshopping;
    },
  },
};
</script>

<style scoped>
.shopping {
  width: 100%;
  box-sizing: border-box;
  background: #e8e8ed;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 18px;
}
.icon {
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  left: 0;
  top: 0;
  z-index: 99;
  padding: 15px 10px 0 10px;
}
.icon .van-icon:first-of-type {
  font-size: 20px;
  padding: 5px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
}
.icon .van-icon:last-of-type {
  background: rgba(0, 0, 0, 0.5);
  font-size: 20px;
  padding: 5px;
  border-radius: 16px;
  color: white;
}
.main {
  width: 100%;
  box-sizing: border-box;
  margin-top: -3px;
  background: white;
  padding: 10px;
}
.main p {
  line-height: 20px;
}
.main-next {
  width: 100%;
  box-sizing: border-box;
  height: 1000px;
  margin-top: 10px;
  /* border: 1px solid red; */
  /* background: white; */
  margin-bottom: 50px;
}
.main-bottom {
  width: 100%;
  box-sizing: border-box;
  position: fixed;
}
.change {
  color: #ff5000;
  font-size: 11px;
}
.more1 {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  background: white;
  text-align: center;
  line-height: 60px;
  font-weight: bold;
  font-size: 13px;
  /* border: 1px solid red; */
}
.shop {
  margin-top: 10px;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  background: white;
  padding: 5px 10px;
}
.shop3 {
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  display: flex;
}
.shop3 .middle {
  flex: 1;
}

.right input {
  width: 50px;
  font-size: 10px;
  margin-right: 5px;
  padding: 5px;
  border-radius: 18px;
  margin-top: 25px;
  outline: none;
  /* border: 0; */
}
.right input:first-of-type {
  background: white;
  color: #ff5000;
  border: 1px solid #ff5000;
}
.right input:last-of-type {
  background: #ff5000;
  color: white;
  border: 1px solid #ff5000;
}
.img-detail {
  width: 100%;
  box-sizing: border-box;
}
.ati {
  background: white;
}
</style>