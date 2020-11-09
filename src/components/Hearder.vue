<template>
  <div class="header">
    <div class="header-img">
      <img class="img" src="../assets/logo.png" alt="" />
    </div>
    <div>
      <ul class="header-ul">
        <li
          v-for="(item, index) in nav"
          :key="index"
          :class="{ active: index == current }"
          @click="go(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0, //切换标识
      nav: ["首 页", "金融学院", "产品介绍", "交易资讯", "在线留言"]
    };
  },
  methods: {
    // 导航栏切换
    go(index) {
      this.current = index; //激活样式
      if(this.current==0){
          this.$router.push({ path:'/'  })
      }
      else if(this.current==1){
          this.$router.push({ path:'/college'  })
      }
    },
  },
};
</script>

<style scoped>
.header {
    width: 100%;
  min-width: 1200px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  position: fixed;
  z-index: 1000;
  background-color: #ffffff;
  border-bottom: 1px solid #e8e8e8;
}
.img {
  width: 200px;
  padding-left: 150px;
}
.header-ul li {
  cursor: pointer;
  position: relative;
  top: 50%;
  float: left;
  list-style: none;
  margin: 0 auto;
  padding-top: 25px;
  padding-bottom: 15px;
  margin: 0 20px;
}
.active {
  /*激活样式*/
  color: #ff6537;
  border-bottom: 2px solid #ff6537;
}
</style>