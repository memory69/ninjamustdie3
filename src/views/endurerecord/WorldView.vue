<template>
  <div class="world-view">
    <van-swipe class="my-swipe" :show-indicators="show">
      <van-swipe-item>
        <div class="already">
          <p style="font-weight:bold;">{{ already.alreadytime }}</p>
          <p style="font-size:11px">{{ already.alreadytitle }}</p>
          <p style="font-size:11px">{{ already.alreadytitle2 }}</p>
          <p style="font-size:11px">{{ already.alreadytitle3 }}</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="now">
          <p style="font-weight:bold">{{ now.nowtime }}</p>
          <p style="font-size:11px">{{ now.nowtitle }}</p>
          <p style="font-size:11px">{{ now.nowtitle2 }}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
    <end></end>
  </div>
</template>

<script>
import End from '../components/End';
export default {
  name: 'WorldView',
  data() {
    return {
      show: false,
      already: {
        alreadytime: '300年前',
        alreadytitle:
          '300年前，来自鬼域的鬼族打开罗生之门，入侵这块土地。为首的鬼王率领鬼群不断肆虐，大地崩裂，多数生灵或成黑石，或化为鬼族，一时间苍生涂炭。',
        alreadytitle2:
          '鬼族的入侵，打破了这片大陆的祥和。各族间虽不断抵抗，但由于鬼族的力量过于强大，无数族群被其毁灭，鬼族势力也愈发壮大，整个西北大陆已然成为黑暗之地。人们意识到这毁灭性的威胁，自发组成抵抗鬼族联盟，各族间强力协助和持续抵抗，最终由忍神和武士大名利用上古宝物，将鬼王封印在忍神山，随着鬼王被封印，鬼族余孽似乎也消失殆尽。',
        alreadytitle3:
          '世间恢复和平，忍神和武士便在此建立和之国，以和平之意，坚守封印，守护大陆太平。而各族群间经历此大战后，也开始有意识的强大自我，逐渐成长起来。',
      },
      now: {
        nowtime: '现今',
        nowtitle:
          '鬼族大战之后，忍族与武士族共同建立了新的国度——和之国，并交由武士统治，忍者则选择退隐，于暗中辅佐武士，以坚守鬼王封印及守卫和之国，共同维护大陆和平。',
        nowtitle2:
          '300年间，和之国经历了17位统治者，国家与族群间的关系也在悄然之中发生了变化。由于武士对国家的统治逐渐腐朽堕落，实力也越来越弱，和之国第17位统治者——年轻的大名开始忌惮忍者的强大力量会威胁到自己的统治地位，为了树立威望，便在阴阳师的挑唆下，罔顾300年前忍者与武士达成的维护和平共生契约，授意了对忍者的镇压和绞杀行动。同时，武士城实际武力的最高统治者大将军也在不断壮大边疆军队，谋划武士暗部行动，似乎酝酿着更大的秘密。此间，由于忍者族群和武士冲突不断，另一股强大的势力——反武士忍者组织也应运而生，一场为取回忍者大义的战争一触即发。就在此时，鬼王余孽卷土重来的谣言四起，忍界内忧外患，这片大陆的和平岌岌可危，一场席卷和之国的暴风雨即将到来。',
      },
    };
  },
  components: {
    End,
  },
};
</script>

<style scoped>
.world-view {
  width: 100%;
  box-sizing: border-box;
}
.my-swipe .van-swipe-item {
  height: 610px;
  /* border: 1px solid red; */
}
.my-swipe .van-swipe-item:first-of-type {
  background: url(../../../src/assets/worldview.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
}
.already {
  width: 70%;
  margin: 40px auto;
}
.already p {
  margin-top: 10px;
  line-height: 18px;
}
.my-swipe .van-swipe-item:last-of-type {
  background: url(../../../src/assets/Worldnow.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
}
.now {
  width: 70%;
  margin: 40px auto;
}
.now p {
  margin-top: 10px;
  line-height: 18px;
}
</style>
