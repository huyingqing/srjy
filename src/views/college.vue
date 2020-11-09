<template>
  <div class="college">
    <!-- 大图 -->
    <div><img class="big-img" src="../assets/college/bg.png" alt="" /></div>
    <!-- 服务课程 -->
    <div class="course">
      <div class="course-headline-flex">
          <div><img src="../assets/college/course/ChannelName.jpg" alt=""></div>
          <div class="course-headline">服务课程</div>
      </div>
      <div class="course-choose course-item">
        <div
          class="course-item-list"
          v-for="(item, index) in course"
          :key="index"
        >
          <div><img :src="item.url" alt="" /></div>
          <div class="course-contant">
            <p>{{ item.title }}</p>
            <p>{{ item.contant }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 教学科目 -->
    <div class="course">
      <div class="course-headline-flex">
          <div><img src="../assets/college/subject/book_03_wsuq.png" alt=""></div>
          <div class="course-headline">教学科目</div>
      </div>
      <div class="course-choose course-item">
        <div
          class="course-item-list subject-list"
          v-for="(item, index) in subject"
          :key="index"
        >
          <div><img class="subject-img" :src="item.url" alt="" /></div>
          <div class="course-contant">
            <p>{{ item.title }}</p>
            <p>{{ item.contant }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 精英团队 -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      course: [
        {
          url: require("../assets/college/course/curriculum_03_62eh.png"),
          title: "精品课程",
          contant:
            "领跑信息时代，我们提供前沿、全的金融资讯。每日实时更新上万条资讯，包括财经新闻、公告、研究报告和法律法",
        },
        {
          url: require("../assets/college/course/curriculum_03_62eh.png"),
          title: "研报专栏",
          contant:
            "深度资料展示了上市公司公开披露的全部资讯。以股票深度资料为例，包括公司资料、证券资料、行情数据、财务数据、机构",
        },
        {
          url: require("../assets/college/course/curriculum_03_62eh.png"),
          title: "线下授课",
          contant:
            "回测及实盘模拟交易功能于一体，支持股票、场内基金等多品种操作；组合监控看组合净值实时波动、组合分析观纵横指标。",
        },
        {
          url: require("../assets/college/course/curriculum_03_62eh.png"),
          title: "线上教育",
          contant:
            "资讯金融终端条件选股功能针对股票、债券、基金、理财等品种，通过智能化的条件操作，实现用户对特定筛选结果的输出 ...",
        },
        {
          url: require("../assets/college/course/curriculum_03_62eh.png"),
          title: "私人订制",
          contant:
            "领跑信息时代，我们提供前沿、全的金融资讯。每日实时更新上万条资讯，包括财经新闻、公告、研究报告和法律法",
        },
      ],
      subject: [
        {
          url: require("../assets/college/subject/158883935856.jpg"),
          title: "艾略特波浪理论",
          contant:
            "领跑信息时代，我们提供前沿、全的金融资讯。每日实时更新上万条资讯，包括财经新闻、公告、研究报告和法律法",
        },
        {
          url: require("../assets/college/subject/1588839491.jpg"),
          title: "操盘术",
          contant:
            "领跑信息时代，我们提供前沿、全的金融资讯。每日实时更新上万条资讯，包括财经新闻、公告、研究报告和法律法",
        },
        {
          url: require("../assets/college/subject/158883979350.jpg"),
          title: "破解K线密码",
          contant:
            "领跑信息时代，我们提供前沿、全的金融资讯。每日实时更新上万条资讯，包括财经新闻、公告、研究报告和法律法",
        },
        {
          url: require("../assets/college/subject/158883981238.jpg"),
          title: "千炼成妖",
          contant:
            "领跑信息时代，我们提供前沿、全的金融资讯。每日实时更新上万条资讯，包括财经新闻、公告、研究报告和法律法",
        },
        {
          url: require("../assets/college/subject/1588839915.jpg"),
          title: "蜡烛图技术",
          contant:
            "领跑信息时代，我们提供前沿、全的金融资讯。每日实时更新上万条资讯，包括财经新闻、公告、研究报告和法律法",
        },
        {
          url: require("../assets/college/subject/1588840085.jpg"),
          title: "彼得林奇的成功投资",
          contant:
            "领跑信息时代，我们提供前沿、全的金融资讯。每日实时更新上万条资讯，包括财经新闻、公告、研究报告和法律法",
        }
      ],
    };
  },
};
</script>

<style scoped>
.college {
  width: 100%;
  min-width: 1200px;
  padding-top: 81px;
  background-color: #f7f7f7;
}
.big-img {
  width: 100%;
}
.course {
  width: 65%;
  margin: 20px auto;
  padding: 20px 0;
}
.course-headline-flex{
    display: flex;
    flex-wrap: nowrap;
    }
.course-headline {
  font-size: 30px;
  margin-left: 10px;
}
.course-choose {
  margin-top: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.course-item-list {
  width: 500px;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 50px;
}
.course-contant {
  padding: 20px 20px;
}
.course-contant > p:first-child {
  font-size: 20px;
  font-family: "微软雅黑";
  margin-bottom: 13px;
  font-weight: 600;
  color: #015bae;
}
.course-contant > p:nth-child(2) {
  font-size: 13px;
  color: #666;
  word-break: break-all;
  display: -webkit-box;
  overflow: hidden;
  line-height: 1.5;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.subject-img{
    width: 150px;
    height: 150px;
}
.subject-list{
    border: 1px solid #e8e8e8;
    background-color: #ffff
    ;
}
</style>