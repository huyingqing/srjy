<template>
  <div class="totop">
    <img
      v-if="btnFlag"
      class="go-top"
      src="../assets/home/huidaodingbu.png"
      @click="backTop"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
      btnFlag:true
    };
  },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop, true) 
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },

  methods: {
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop >70) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    },
  },
};
</script>

<style scoped>
.totop {
  position: fixed;
  z-index: 1000;
  margin-left: 95%;
  background-color: #f0f0f0;
  margin-top: 500px;
   border-radius: 50%;
   background-color: rgba(0, 0, 0, .1);
}
img {
  background-color: none;
 
}
</style>