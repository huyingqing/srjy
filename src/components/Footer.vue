<template>
  <div class="footer">
      <div class="footer-div">
        <ul>
          <li class="footer-li" v-for="(item, index) in nav" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="information">
        <p>电话：+86-028-85243153</p>
        <p>传真：+86-028-85243153</p>
        <p>邮件：soaredu@nzjy7777.com</p>
      </div>
      <div class="address">
        <p>网址：www.nzjy7777.com</p>
        <p>
          地址：中国（四川）自由贸易试验区成都高新区天府大道北段28号1栋2单元15层06号
        </p>
      </div>
      <div class="company">
        <p>
          成都硕尔教育咨询有限责任公司 版权所有 2017-2022 蜀ICP备20011957号-1
        </p>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      nav: ["首 页", "金融学院", "产品介绍", "交易资讯", "在线留言"],
    };
  },
};
</script>

<style scoped>
.footer{
    width: 100%;
    min-width: 1200px;
    background-color: #000;
    padding:50px 0;
    color: #ffffff;
    font-size: 11px;
    text-align: center;
}
.footer-div ul{
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    list-style: none;
}
.footer-div ul li{
    margin:0 5px;
    border-right: 2px solid #ffffff;
    padding-right: 10px;
    margin-bottom: 15px;
}
.information,.address{
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin-bottom: 15px;
}
</style>
