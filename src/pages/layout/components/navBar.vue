<template>
  <div :class="['nav-container', {'nav-fix': isScroll}]">
    <div class="nav-left">
      <img src="@/assets/logo1.png" />
      <!-- <img src="@/assets/logo1.png" /> -->
    
    </div>
    <div class="nav-right">
      <template v-if="normalNames.includes(currName) || !isScroll">
        <div 
          :class="['menu-item', {'choosed': currName === 'home'}]"
          @click="handleChoosePage('home')">
          Home
        </div>
        <div 
          :class="['menu-item', {'choosed': currName === 'contact'}]"
          @click="handleChoosePage('contact')">
          Contact
        </div>
        <div 
          :class="['menu-item', {'choosed': currName === 'aboutUs'}]"
          @click="handleChoosePage('aboutUs')">
          About us
        </div>
      </template>
      <template v-if="isScroll && currName === 'home'">
        <div class="download-container">
          <img 
            class="download-style" 
            @click="handleDownLoad('ios')" 
            src="@/assets/download_ios1.png"/>
          <img 
            class="download-style" 
            @click="handleDownLoad('android')" 
            src="@/assets/download_android1.png"/>
        </div>
        <div 
          class="right-item"
          @click="handleChoosePage('joinUs')">
          Join us
        </div>
      </template>
      <template v-if="isScroll && currName === 'contact'">
        <div class="input-contaner">
          <input class="footer-input" type="text" placeholder="Send us your Email"/>
          <div class="send-container">
            <img class="send-style" @click="handleSendEmail" src="@/assets/send_icon2.png"/>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { downloadPath } from '@/utils/const.js';
export default {
  data() {
    return {
      isScroll: false,
      normalNames: ['aboutUs', 'privacy', 'userAgreement']
    }
  },
  mounted() {
    this.onwatchScroll();
  },
  computed: {
    currName() {
      return this.$route.meta.name;
    },
  },
  methods: {
    onwatchScroll() {
      let that = this
      window.onscroll = function() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        that.isScroll = (scrollTop / 150) > 0.5;
   
      }
    },
    handleChoosePage(type) {
      let paths = {
        'home': '/home',
        'contact': '/contact',
        'aboutUs': '/aboutUs',
        'joinUs': '/contact'
      }
      this.$router.push(paths[type]);
    },
    handleDownLoad(type) {
      window.open(downloadPath[type]);
    },
    handleSendEmail() {
      // send email
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
  z-index: 10001;
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
.nav-fix {
  position: fixed;
  top: 0;
  left: 0;
}
</style>