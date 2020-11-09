<template>
  <div class="home">
    <!-- banner -->
    <div class="banner">
      <el-carousel
        :interval="3000"
        :autoplay="true"
        arrow="always"
        :height="banH + 'px'"
        indicator-position="inside"
      >
        <el-carousel-item v-for="(item, index) in banner" :key="index">
          <img :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--选择我们 -->
    <div class="whychoose">
      <div class="whychoose-one">
        <p>为什么选择我们？</p>
        <p>我们更懂金融交易</p>
      </div>
      <div class="whychoose-two">
        <div
          v-for="(item, index) in choose"
          :key="index"
          class="whychoose-two-flex"
        >
          <div>
            <img :src="item.url" alt="" />
          </div>
          <div>
            <p class="whychoose-two-p1">{{ item.title }}</p>
          </div>
          <div>
            <p class="whychoose-two-p2">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 看盘选股 -->
    <div class="decision">
      <div class="decision-p">
        <p>看盘、选股、决策，多重需求一屏满足</p>
        <p>……</p>
        <p><span>我要咨询</span></p>
      </div>
    </div>
    <!-- 专业教学 -->
    <div class="teach">
      <div class="teach-p">
        <p>为什么选择我们？</p>
        <p>我们教学服务更专业</p>
      </div>
      <!-- 教学 -->
      <div class="teach-lie">
        <!-- 教学轮播 -->
        <div class="teach-lie-lunbo">
          <el-carousel
            indicator-position="none"
            class="teach-lie-lunbo-el-carousel"
            style="width: 500px; height: 500px"
          >
            <el-carousel-item
              style="width: 500px; height: 500px"
              v-for="(item, index) in teachlunbo"
              :key="index"
            >
              <img style="width: 100%" :src="item.url" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <!--服务列表 -->
        <div class="service">
          <div class="service-list" v-for="(item, index) in teach" :key="index">
            <div>
              <img class="service-list-img" :src="item.url" alt="" />
            </div>
            <div class="service-list-tc">
              <p class="service-list-title">{{ item.title }}</p>
              <p class="service-list-contant">{{ item.contant }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 高楼背景 -->
    <div class="block">
      <div class="block-p">
        <p>贴心服务与全新体验</p>
        <p>选择我们让学习更简单</p>
      </div>
      <div class="block-list">
        <div
          class="block-list-kecheng"
          v-for="(item, index) in block"
          :key="index"
        >
          <div><img :src="item.url" alt="" /></div>
          <div class="block-list-kecheng-title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import "swiper/swiper-bundle.min.css"; // 组件引入
// import { swiper, swiperSlide } from "vue-awesome-swiper"; // 组件样式
export default {
  data() {
    return {
      banH: 300,
      banner: [
        { url: require("../assets/home/beijing/beijing1.png") },
        { url: require("../assets/home/beijing/beijing2.png") },
      ],
      choose: [
        {
          url: require("../assets/home/choose/choose1.png"),
          title: "权威数据",
          subtitle: "数百亿条数据 / 覆盖金融市场",
        },
        {
          url: require("../assets/home/choose/choose2.png"),
          title: "一手资讯",
          subtitle: "海量资讯来源 / 情报快人一步",
        },
        {
          url: require("../assets/home/choose/choose3.png"),
          title: "专业辅导",
          subtitle: "强大分析技巧 / 解决金融问题",
        },
        {
          url: require("../assets/home/choose/choose4.png"),
          title: "贴心服务",
          subtitle: "贴心管家服务 / 专业人工解答",
        },
      ],
      teach: [
        {
          url: require("../assets/home/kind/youhtu1.png"),
          title: "课程服务",
          contant:
            "股市买卖与操作技巧 Smart智富赢家之战胜股市必修四堂课视频教学 股海过客的分析.",
        },
        {
          url: require("../assets/home/kind/youhtu2.png"),
          title: "教学服务",
          contant:
            "炒股基础知识视频教程,官方正版指南针炒股软件,新手炒股软件,盘中买卖点提示,股民免费!A股上市公司,股票代码300803,经授权经营证券期货业务许可机构 ,Level2数据服务商.",
        },
        {
          url: require("../assets/home/kind/youhtu4.png"),
          title: "精英团队",
          contant:
            "洽谈重要的合作项目和涉外经营项目。如合资经营企业、合作经营贸易、承包国际工程等方面",
        },
      ],
      teachlunbo: [
        { url: require("../assets/home/kind/teamwork.jpg") },
        { url: require("../assets/home/kind/timg2.jpg") },
        { url: require("../assets/home/kind/timg3.jpg") },
      ],
      block: [
        {
          url: require("../assets/home/decision/ba.png"),
          title: "精品课程",
          contant: "24小时滚动新闻",
        },
        {
          url: require("../assets/home/decision/bb.png"),
          title: "研报专栏",
          contant: "前沿部委政策资讯",
        },
        {
          url: require("../assets/home/decision/bc.png"),
          title: "线下授课",
          contant: "24小时滚动新闻",
        },
        {
          url: require("../assets/home/decision/bd.png"),
          title: "线上教育",
          contant: "24小时滚动新闻",
        },
      ],
    };
  },
  methods: {
    setbanH() {
      this.banH = 500;
    },
  },
  mounted() {
    this.setbanH();

    window.addEventListener(
      "resize",
      () => {
        this.setbanH();
      },
      false
    );
  },
};
</script>

<style scoped>
.home {
  display: block;
  width: 100%;
  min-width: 1300px;
  height: 100%;
  /* background-color: #d0e8e8; */
 padding-top: 81px;
}
.banner {
  width: 100%;
  /* height: 600px; */
   /* margin-top: 100px; */
}
.banner img {
  width: 100%;
}
.whychoose {
  width: 60%;
  margin: 40px auto;
  text-align: center;
  padding: 10px 0;
}
.whychoose-one > p {
  padding: 10px 0;
}
.whychoose-one > p:first-child {
  font-size: 30px;
  color: #666666;
}
.whychoose-one > p:nth-child(2) {
  font-size: 40px;
  color: #000;
  text-align: center;
}
.whychoose-two {
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 60px;
}

.whychoose-two img {
  width: 100px;
  height: 100px;
  text-align: center;
}
.whychoose-two-flex {
  margin: 0 auto;
  overflow: hidden;
}
.whychoose-two-p1 {
  font-size: 28px;
  color: rgb(255, 101, 55);
  font-family: "微软雅黑";
  /* font-weight: 600; */
  padding-top: 26px;
}
.whychoose-two-p2 {
  font-size: 15px;
  color: #666666;
  padding-top: 20px;
}
.decision {
  width: 100%;
  float: left;
  margin: 65px auto;
  position: relative;
}
.decision img {
  width: 100%;
  height: 100%;
  display: block;
}
.decision-p {
  background-image: url("../assets/home/decision/timg.png");
  /* background-image: url("../assets/home/decision/timg2.jpg");  */
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  min-width: 1500px;
  padding: 100px 0;
  text-align: center;
  margin: 0 auto;
  color: #ffffff;
}
.decision-p > p:first-child,
.decision-p > p:nth-child(2) {
  font-size: 24px;
  padding: 10px 0;
}
.decision-p > p:last-child {
  margin-top: 30px;
  font-size: 20px;
}
.decision-p > p:last-child > span {
  background-color: rgb(255, 101, 55);
  padding: 10px 30px;
  border-radius: 10px;
}
.teach {
  width: 65%;
  /* text-align: center; */
  margin: 0 auto;
}
.teach-p p {
  padding: 10px 0;
}
.teach-p > p:first-child {
  font-size: 30px;
  color: #666666;
  text-align: center;
}
.teach-p > p:nth-child(2) {
  font-size: 40px;
  color: #000;
  text-align: center;
}
.teach-lie {
  margin-top: 50px;
  display: flex;
  flex-wrap: nowrap;
}
.teach-lie-lunbo {
  padding-top: 15px;
  height: 300px;
  flex: 6;
  margin: 0 auto;
}
.service {
  flex: 6;
}
.service-list {
  width: 85%;
  display: flex;
  flex-wrap: nowrap;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  background-color: #e8e8e8;
  padding: 10px;
  margin-bottom: 10px;
  /* margin-left: 10px; */
}
.service-list-img {
  width: 80px;
  height: 80px;
}
.service-list-tc {
  padding-left: 30px;
  margin-bottom: 10px;
}
.service-list-title {
  font-size: 20px;
  font-family: "微软雅黑";
  font-weight: 600;
  margin-bottom: 10px;
}
.service-list-contant {
  font-size: 15px;
  word-break: break-all;
  display: -webkit-box;
  overflow: hidden;
  line-height: 1.5;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.block {
  background-image: url("../assets/home/decision/block.png");
  text-align: center;
  margin-top: 70px;
}
.block-p {
  padding: 70px 0;
}
.block-p > p:first-child {
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 20px;
}
.block-p > p:nth-child(2) {
  font-size: 36px;
  color: #ffffff;
}
.block-list {
  position: relative;
  width: 60%;
  margin: 0px auto;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding-bottom: 40px;
}
.block-list-kecheng {
  flex: 6;
  margin: 34px 0px;
  padding: 0 20px;
}
.block-list-kecheng img {
  width: 100px;
  height: 100px;
}
.block-list-kecheng-title {
  color: #ffffff;
  position: absolute;
  /* margin: 0 auto; */
  margin-top: -40px;
  margin-left: 7%;
}
</style>