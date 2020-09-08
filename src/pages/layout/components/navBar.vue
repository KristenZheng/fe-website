<!--
 * @Author: your name
 * @Date: 2020-09-07 15:01:50
 * @LastEditTime: 2020-09-08 07:45:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe-website/src/pages/layout/components/navBar.vue
-->
<template>
  <div class="nav-container">
    <template v-if="!isScroll">
      <div class="nav-left">
        <img src="@/assets/logo1.png"/>
      </div>
      <div class="nav-right">
        <div 
          :class="['menu-item', {'choosed': currPage === 'home'}]"
          @click="handleChoosePage('home')">
          Home
        </div>
        <div 
          :class="['menu-item', {'choosed': currPage === 'contract'}]"
          @click="handleChoosePage('contract')">
          Contact
        </div>
        <div 
          :class="['menu-item', {'choosed': currPage === 'aboutUs'}]"
          @click="handleChoosePage('aboutUs')">
          About us
        </div>
      </div>
    </template>
    <template v-else class="scroll-container">
    <!-- <template> -->
      <div class="nav-left">
        <img src="@/assets/logo1.png"/>
      </div>
      <div class="nav-right">
        <div v-if="currName === 'home'">
          <div class="download-container">
            <img class="download-style" src="@/assets/download_ios.png"/>
            <img class="download-style" src="@/assets/download_android.png"/>
          </div>
          <div 
            class="right-item"
            @click="handleChoosePage('joinUs')">
            Join us
          </div>
        </div>
        <div class="input-contaner" v-if="currName === 'contract'">
          <input class="footer-input" type="text" placeholder="Send us your Email"/>
          <div class="send-container">
            <img class="send-style" src="@/assets/send_icon2.png"/>
          </div>
        </div>
        
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currPage: 'home',
      scrollTop: 0
    }
  },
  mounted() {
    this.onwatchScroll();
  },
  computed: {
    isScroll() {
      return (this.scrollTop / 150) > 0.5;
    },
    currName() {
      return this.$route.meta.name;
    }
  },
  methods: {
    onwatchScroll() {
      window.onscroll = function() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log('scrollTop', (this.scrollTop / 150) > 0.5);
        this.scrollTop = scrollTop;
      }
    },
    handleChoosePage(type) {
      this.currPage = type;
    }
  }
}
</script>

<style scoped>
.nav-container {
  background: #FDFDFD;
  width: calc(100% - 0.24rem);
  height: 0.26rem;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 0.12rem;
  align-items: center;
}
.nav-left img{
  width: 1rem;
  height: 0.2rem;
}
.nav-right {
  display: flex;
  align-items: center;
}
.menu-item {
  width: 0.85rem;
  font-size: 0.12rem;
  font-family: Helvetica;
  color: #999999;
}
.choosed {
  width: 0.85rem;
  height: 0.26rem;
  line-height: 0.26rem;
  background: #8FC31F;
  border-radius: 0.13rem;
  font-size: 0.12rem;
  font-family: Helvetica;
  color: #FFFFFF;
}
.download-style {
  width: 0.7rem;
  height: 0.18rem;
  margin-top: 0.04rem;
  margin-right: 0.05rem;
}
.download-container {
  margin-right: 0.23rem;
}
.right-item {
  color: #76A412;
  font-size: 0.12rem;
  font-family: Helvetica;
}
.input-contaner {
  display: flex;
  align-items: center;
  height: 0.25rem;
}
.footer-input {
  width: 1.5rem;
  height: 100%;
  border-top-left-radius: 0.02rem;
  border-bottom-left-radius: 0.02rem;
  border: 0.01rem solid #979797;
  background: #FDFDFD;
  padding: 0 0 0 0.1rem;
  font-size: 0.12rem;
  font-family: Helvetica;
  color: #F6F6F6; 
}
.footer-input::placeholder {
  font-size: 0.12rem;
  font-family: Helvetica;
  color: #999999;
}
.send-container {
  width: 0.35rem;
  height: 100%;
  border-top-right-radius: 0.02rem;
  border-bottom-right-radius: 0.02rem;
  border: 0.01rem solid #979797;
  border-left: none;
  background: #FDFDFD;
}
.send-style {
  width: 0.19rem;
  height: 0.16rem;
  margin-top: 0.03rem;
}
.scroll-container {
  position: fixed;
  top: 0;
  left: 0;
}
</style>