<template>
  <div class="join">
    <div class="top" v-show="isshow">
      <img
        src="https://public-cdn.mokahr.com/84035390-5003-4aa2-a0a3-61d272eb5da8.png?x-oss-process=image/resize,m_lfit,w_240,h_72"
        alt
        height="80%"
      />
      <van-icon name="wap-nav" @click="handle" />
    </div>
    <div style="height:50px"></div>
    <div class="top-next">
      <van-search
        v-show="show"
        v-model="value"
        style="width:100%;height:50px;"
        background="rgba(0, 0, 0, 0)"
        placeholder="请输入搜索关键词"
        input-align="center"
      />
      <van-search
        v-show="!show"
        v-model="value"
        style="position: fixed; left: 0;top: 10px;width:100%;height:50px;z-index:98"
        background="rgba(0, 0, 0, 0)"
        placeholder="请输入搜索关键词"
        input-align="center"
      />
    </div>
    <div class="main">
      <p style="font-size:16px">公司介绍</p>
      <img
        src="https://public-cdn.mokahr.com/7a1aedc4-7879-4f38-8e35-da54af0d5a69.jpg?x-oss-process=image/resize,m_lfit,h_0,w_568"
        alt
        width="100%"
        style="margin-top:20px"
      />
      <p style="font-weight:bold;font-size:14px">关于杭州炎魂网络科技有限公司</p>
      <p style>我们成立于2012年</p>
      <p>玩家们都喜欢叫我们</p>
      <p>小白工作室（英文名Pandada Studio）</p>
      <p>成立七年来，我们一直专注于精品原创手机游戏</p>
      <p>的开发</p>
      <a
        href="JavaScript:viod(0)"
        style="color:black; text-decoration: underline;font-weight:bold"
      >立志推动中国原创精品游戏的发展！</a>
      <br />
      <a
        href="JavaScript:viod(0)"
        style="color:black; text-decoration: underline; font-weight:bold"
      >将前所未有的游戏体验带给全世界玩家！</a>
      <p style="font-size:16px;margin-top:50px">核心产品</p>
      <img
        src="https://public-cdn.mokahr.com/b870610a-29cc-4f5c-9374-039de496f8d6.jpg?x-oss-process=image/resize,m_lfit,h_0,w_568"
        alt
        width="100%"
      />
      <p style="font-weight:bold;font-size:14px">《忍者必须死3》</p>
      <p style>《忍者必须死3》</p>
      <p>玩家们都喜欢叫我们</p>
      <p>将跑酷游戏与横版战斗游戏相结合</p>
      <p>在玩家中和行业内都获得了巨大影响力</p>
      <!-- <p>的开发</p> -->
      <a
        href="JavaScript:viod(0)"
        style="color:black; text-decoration: underline;font-weight:bold"
      >凭借单款游戏，多次进入ios畅销榜前5</a>
      <br />
      <a
        href="JavaScript:viod(0)"
        style="color:black; text-decoration: underline; font-weight:bold"
      >成为国内游戏行业不可忽视的新生力量</a>
      <p style="font-size:16px;margin-top:50px">介绍视频</p>
      <p>一起来看个视频认识一下~</p>
      <video
        id="myVideo"
        class="video-js vjs-big-play-centered vjs-fluid"
        controls
        preload="auto"
        width="100%"
        height="100%"
      >
        <source
          type="video/mp4"
          src="http://ugccsy.qq.com/uwMROfz2r5zCIaQXGdGnC2dfhzk_jigLCkkLvI0zErHWpl3G/k0972qn2xlg.m701.mp4?vkey=314166859234251AE4DBEA64B8E3F9A218190F9A2C2E3A81F56D3635C8259FC0FAEB3BB1456AC3887D949371A6BD8197909D1EEF604E74C8992EA856F2D41A63CE09F59473A0EB3F89BBA0CAE2BDEBC621FB87EEBF83849E98941BF13F82438D50014B24E3CDD20C85BE5D179E7986A7FD5C1261DF22FF9F182914EEE5AAB6FF&br=29&platform=2&fmt=auto&level=0&sdtfrom=v5010&guid=cd7947793f519fd92eaf9ebc23e07a3b"
        />
      </video>
      <p style="font-size:16px;margin-top:50px">招聘职位</p>
      <div class="item">
        <div class="left">
          <p>忍界精英专属通道</p>
          <p>6个职位正在招聘</p>
        </div>
        <div class="right" style="line-height: 50px;">
          <van-tag color="#e57373" size="large" style="margin-right:10px;" plain>查看</van-tag>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <p>游戏美术</p>
          <p>9个职位正在招聘</p>
        </div>
        <div class="right" style="line-height: 50px;">
          <van-tag color="#e57373" size="large" style="margin-right:10px;" plain>查看</van-tag>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <p>游戏运营</p>
          <p>6个职位正在招聘</p>
        </div>
        <div class="right" style="line-height: 50px;">
          <van-tag color="#e57373" size="large" style="margin-right:10px;" plain>查看</van-tag>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <p>游戏策划</p>
          <p>5个职位正在招聘</p>
        </div>
        <div class="right" style="line-height: 50px;">
          <van-tag color="#e57373" size="large" style="margin-right:10px;" plain>查看</van-tag>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <p>忍市场营销</p>
          <p>2个职位正在招聘</p>
        </div>
        <div class="right" style="line-height: 50px;">
          <van-tag color="#e57373" size="large" style="margin-right:10px;" plain>查看</van-tag>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <p>中台</p>
          <p>3个职位正在招聘</p>
        </div>
        <div class="right" style="line-height: 50px;">
          <van-tag color="#e57373" size="large" style="margin-right:10px;" plain>查看</van-tag>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <p>视频/动画</p>
          <p>3个职位正在招聘</p>
        </div>
        <div class="right" style="line-height: 50px;">
          <van-tag color="#e57373" size="large" style="margin-right:10px;" plain>查看</van-tag>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <p>QA&项管</p>
          <p>2个职位正在招聘</p>
        </div>
        <div class="right" style="line-height: 50px;">
          <van-tag color="#e57373" size="large" style="margin-right:10px;" plain>查看</van-tag>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <p>技术研发</p>
          <p>4个职位正在招聘</p>
        </div>
        <div class="right" style="line-height: 50px;">
          <van-tag color="#e57373" size="large" style="margin-right:10px;" plain>查看</van-tag>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <p>视频/广告创意设计</p>
          <p>6个职位正在招聘</p>
        </div>
        <div class="right" style="line-height: 50px;">
          <van-tag color="#e57373" size="large" style="margin-right:10px;" plain>查看</van-tag>
        </div>
      </div>
      <p style="font-size:16px;margin-top:50px">加入我们可以获得更多</p>
      <img
        src="https://public-cdn.mokahr.com/cd065eca-f597-4dec-8ed2-243c009936f2.png?x-oss-process=image/resize,m_lfit,h_0,w_568"
        alt
        width="100%"
      />
      <a
        href="JavaScript:viod(0)"
        style="font-size:14px;color:#800000; text-decoration: underline;font-weight:bold"
      >高速的发展平台</a>
      <br />
      <p style>《忍者必须死3》国内版本口碑和数据表现显眼</p>
      <p>海外版本有序筹备，进驻港澳台及日本市场有序</p>
      <p>推进</p>
      <p>新项目孵化中心几类在研究项目持续孵化探索</p>
      <p>动画/音乐/周边/同人等各类新文创产业稳步开展</p>
      <img
        src="https://public-cdn.mokahr.com/e35ff1fe-6f3e-4edb-a723-e600c791e82b.png?x-oss-process=image/resize,m_lfit,h_0,w_568"
        alt
        width="100%"
      />
      <a
        href="JavaScript:viod(0)"
        style="font-size:14px;color:#800000; text-decoration: underline;font-weight:bold"
      >有爱的工作氛围</a>
      <br />
      <p style>扁平的管理层级，简单的沟通环境</p>
      <p>在这里，我们会</p>
      <p>让每个人参与决策</p>
      <p>让每个人成为主导</p>
      <p>让你的Idea迸发无限想象</p>
      <img
        src="https://public-cdn.mokahr.com/0f06dda8-b31b-43d1-9939-ef32dc41c29f.png?x-oss-process=image/resize,m_lfit,h_0,w_568"
        alt
        width="100%"
      />
      <a
        href="JavaScript:viod(0)"
        style="font-size:14px;color:#800000; text-decoration: underline;font-weight:bold"
      >广阔的成长机会</a>
      <br />
      <p style>专业管理双通道的成长路线</p>
      <p>新人培训加速了解助力个人融入</p>
      <p>公司层面丰富课程面向全员分享</p>
      <p>行业各类标杆经验交流学习</p>
      <p>各类学习活动和成长机会丰富多样</p>
      <img
        src="https://public-cdn.mokahr.com/016c1b37-f257-45b5-b8a0-08da4779b9e4.png?x-oss-process=image/resize,m_lfit,h_0,w_568"
        alt
        width="100%"
      />
      <a
        href="JavaScript:viod(0)"
        style="font-size:14px;color:#800000; text-decoration: underline;font-weight:bold"
      >优厚的薪酬福利</a>
      <br />
      <p style>极具竞争力的薪资，丰厚的项目奖金</p>
      <p>免费零食饮料不限量供应</p>
      <p>五险一金，带薪年假，年假旅游</p>
      <p>多彩的公司活动，丰富的节日福利</p>
      <p>每月团建基金一起吃喝玩乐</p>
      <p style="font-size:16px;margin-top:50px">忍者必须死3官方微信</p>
      <p>了解更多忍3日常</p>
      <img
        src="https://public-cdn.mokahr.com/27fcee94-f53e-49ba-b1af-70205a22d3a4.png?x-oss-process=image/resize,m_fill,h_182,w_182"
        alt
        width="30%"
      />
    </div>
    <van-popup
      style="backgroundColor:#e8ebed"
      v-model="meunshow"
      closeable
      position="top"
      :style="{ height: '70%' }"
    >
      <a href="javascript:void(0)" @click="home">官方首页</a>
      <a href="javascript:void(0)" @click="information">资讯台</a>
      <a href="javascript:void(0)" @click="endurerecord">忍届录</a>
      <a href="javascript:void(0)" @click="strategy">攻略所</a>
      <a href="javascript:void(0)" @click="audiovisual">视听馆</a>
      <a href="javascript:void(0)" @click="fan">同人圈</a>
      <a href="javascript:void(0)" @click="shop">周边商城</a>
      <a href="javascript:void(0)" @click="join">加入我们</a>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Join",
  data() {
    return {
      meunshow: false,
      isshow: true,
      show: true,
      value: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    // this.getData();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageXOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop);
      if (scrollTop > 100) {
        this.show = false;
        this.isshow = false;
      } else {
        this.show = true;
        this.isshow = true;
      }
    },
    initVideo() {
      //此处初始化的调用，我放在了获取数据之后的方法内，而不是放在钩子函数mounted
      //页面dom元素渲染完毕，执行回调里面的方法
      this.$nextTick(() => {
        let myPlayer = this.$video(document.getElementById("myVideo"), {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true, //自动播放属性,muted:静音播放
          autoplay: false, //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto", //设置视频播放器的显示宽度（以像素为单位） // width: "800px", //设置视频播放器的显示高度（以像素为单位） // height: "400px",
          controlBar: {
            playToggle: true,
          },
        });
      });
    },
    handle() {
      this.meunshow = true;
    },
    home() {
      this.$router.push("/");
    },
    information() {
      this.$router.push("/information");
    },
    strategy() {
      this.$router.push("/strategy");
    },
    endurerecord() {
      this.$router.push("/endurerecord");
    },
    audiovisual() {
      this.$router.push("/audiovisual");
    },
    shop() {
      this.$router.push("/shop");
    },
    fan() {
      this.$router.push("/fan");
    },
    join() {
      this.$router.push("/join");
    },
  },
};
</script>

<style scoped>
.join {
  width: 100%;
  box-sizing: border-box;
  /* background: #e8e8ed; */
  height: 4500px;
}
.top {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  text-align: center;
  background: white;
  position: fixed;
  z-index: 99;
  /* vertical-align: middle; */
}
.top img {
  margin-top: 5px;
  /* background: ; */
}
.top .van-icon {
  font-size: 25px;
  position: absolute;
  right: 10px;
  top: 10px;
}
.top-next {
  padding-top: 55px;
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  background: url(https://public-cdn.mokahr.com/7f10faa3-c4e2-4595-a7b9-678dae9e8c17.jpg?x-oss-process=image/resize,m_fill,h_306,w_640);
  background-size: 100%;
  background-repeat: no-repeat;
  /* position: relative; */
}
.main {
  padding-top: 50px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  line-height: 30px;
  font-size: 13px;
}
.video-js {
  width: 120% !important;
  height: 100% !important;
}
.video-js .vjs-big-play-button {
  font-size: 3em;
  line-height: 42px !important;
  height: 50px !important;
  width: 50px !important;
  display: block;
  position: absolute !important;
  left: 50% !important;
  top: 50% !important;
  margin-top: -25px !important;
  margin-left: -25px !important;
  padding: 0;
  cursor: pointer;
  opacity: 1;
  border: 0.06666em solid #fff;
  background-color: #2b333f;
  background-color: rgba(43, 51, 63, 0.7);
  border-radius: 50% !important;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}
.vjs-paused .vjs-big-play-button,
.vjs-paused.vjs-has-started .vjs-big-play-button {
  display: block !important;
}
.myVideo-dimensions {
  width: 100% !important;
  height: 100% !important;
  display: block !important;
}
.vjs-poster {
  background-size: 100% 100% !important;
}
.main .item {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  display: flex;
  /* border: 1px solid red; */

  border-radius: 10px;
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.3);
}
.item .left {
  padding-top: 5px;
  /* text-align: left; */
  margin-left: 10px;
  flex: 1;
  line-height: 20px;
}
.van-popup {
  /* padding-left: 80px; */
  text-align: center;
}
.van-popup a {
  color: black;
  font-size: 20px;
  display: block;
  line-height: 50px;
  font-weight: bold;
  text-decoration: underline red;
  /* border-bottom: 1px solid red; */
}
</style>