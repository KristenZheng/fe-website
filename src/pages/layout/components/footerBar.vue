
<template>
  <div class="footer-container">
    <div class="footer-left">
      <div class="left-item" @click="handleChoosePage('joinUs')">Join us</div>
      <div class="left-item" @click="handleChoosePage('aboutUs')">About us</div>
      <div class="left-item" @click="handleChoosePage('userAgreement')">User Agreement</div>
      <div class="left-item" @click="handleChoosePage('privacy')">Privacy</div>
    </div>
    <div class="footer-center">
      <img class="logo-style" src="@/assets/logo2.png"/>
      <p class="center-text">Email: support@electracharger.com</p>
      <div class="input-contaner">
        <input class="footer-input" type="text" placeholder="Send us your Email"/>
        <div class="send-container">
          <img class="send-style" src="@/assets/send_icon1.png"/>
        </div>
      </div>
    </div>
    <div class="footer-right">
      <p class="right-text">Download the APP</p>
      <img @click="handleDownLoad('ios')" src="@/assets/download_ios.png"/>
      <img @click="handleDownLoad('android')" src="@/assets/download_android.png"/>
    </div>
  </div>
</template>

<script>
import { downloadPath } from '@/utils/const.js';
export default {
  methods: {
    handleChoosePage(type) {
      let paths = {
        'aboutUs': '/aboutUs',
        'joinUs': '/contract',
        'userAgreement': '/userAgreement',
        'privacy': '/privacy'
      }
      this.$router.push(paths[type]);
    },
    handleDownLoad(type) {
      window.open(downloadPath[type]);
    },
  }
}
</script>

<style scoped>
.footer-container {
  background: #202122;
  height: 1.6rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.12rem;
  font-family: Helvetica;
  color: #F6F6F6;
  padding: 0.72rem 0.49rem 0.34rem 0.42rem;
}
.footer-center {
  margin-top: 0.15rem;
}
.logo-style {
  width: 1.51rem;
  height: 0.31rem;
}
.send-style {
  width: 0.19rem;
  height: 0.16rem;
  margin-top: 0.03rem;
}
.footer-right {
  text-align: center;
}
.footer-right img {
  width: 0.96rem;
  height: 0.26rem;
  display: block;
  margin-bottom: 0.05rem;
}
.left-item {
  margin-bottom: 0.18rem;
  text-align: left;
}
.center-text {
  margin-top: 0.47rem;
  margin-bottom: 0.13rem;
}
.right-text {
  margin-bottom: 0.42rem;
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
  border: 0.01rem solid #FFFFFF;
  background: #202122;
  padding: 0 0 0 0.1rem;
  font-size: 0.12rem;
  font-family: Helvetica;
  color: #F6F6F6; 
}
.footer-input::placeholder {
  font-size: 0.12rem;
  font-family: Helvetica;
  color: #C1C1C1;
}
.send-container {
  width: 0.35rem;
  height: 100%;
  border-top-right-radius: 0.02rem;
  border-bottom-right-radius: 0.02rem;
  border: 0.01rem solid #FFFFFF;
  border-left: none;
  background: #202122;
}
</style>