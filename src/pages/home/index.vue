<!--
 * @Author: your name
 * @Date: 2020-09-07 14:34:51
 * @LastEditTime: 2020-09-08 07:53:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe-website/src/pages/home/index.vue
-->
<template>
  <div>
    <div class="home-top">
      <img class="bg-style" src="@/assets/home_bg.png">
      <div class="bg-content">
        <p class="title">Get powered up anytime, anywhere</p>
        <p class="sub-title">Available to charger 99% of all smartphone</p>
        <div>
          <img 
            class="download-style" 
            @click="handleDownLoad('ios')" 
            src="@/assets/download_ios3.png"/>
            <img 
            class="download-style" 
            @click="handleDownLoad('ios')" 
            src="@/assets/download_ios2.png"/>
          <img 
            class="download-style" 
            @click="handleDownLoad('android')" 
            src="@/assets/download_android3.png"/>
            <img 
            class="download-style" 
            @click="handleDownLoad('android')" 
            src="@/assets/download_android2.png"/>
        </div>
      </div>
      <div class="video-container">
        <p class="title">Electra</p>
        <p class="sub-title">Empower Your World</p>
        <video class="video-style" autoplay controls width="250">
          <source src="https://zhuanjia4v-1252768022.cossh.myqcloud.com/hualv/437D2592787911E8862FD89EF30F789D.mp4"
            type="video/webm">
        </video>
      </div>
    </div>
    <div class="home-middle1">
      <div class="middle-item">
        <img src="@/assets/home_step1.png"/>
        <p class="title">Download</p>
        <p class="sub-title">Download- Available on the App Store and the Google Play</p>
      </div>
       <div class="middle-item">
        <img src="@/assets/home_step2.png"/>
        <p class="title">Scan</p>
        <p class="sub-title">Scan-Scan the QR Code on the hub to rent a powerbank and charge on-the-go</p>
      </div>
       <div class="middle-item">
        <img src="@/assets/home_step3.png"/>
        <p class="title">Reharge</p>
        <p class="sub-title">Return-Return the powerbank to any Electra hub near you</p>
      </div>
       <div class="middle-item">
        <img src="@/assets/home_step4.png"/>
        <p class="title">Return</p>
        <p class="sub-title">To any Electra hubnear you</p>
      </div>
    </div>
    <div class="home-middle2">
      <div>

      </div>
    </div>
  </div>
</template>

<script>
import { downloadPath } from '@/utils/const.js';
export default {
  methods: {
    handleDownLoad(type) {
      window.open(downloadPath[type]);
    },
  }
}
</script>

<style>
.download-style {
  width: 1.02rem;
  height: 0.28rem;
  margin-top: 0.04rem;
  margin-right: 0.05rem;
}
.home-top {
  width: 100%;
  height: 9rem;
}
.bg-style {
  width: 100%;
}
.bg-content {
  position: absolute;
  left: 20%;
  top: 20%;
  width: 3rem;
  text-align: left;
}
.bg-content .title {
  font-size: 0.23rem;
  font-family: HiraKakuStdN-W8, HiraKakuStdN;
  font-weight: normal;
  color: #FFFFFF;
  line-height: 0.34rem;
  text-shadow: 0px 0px 0px rgba(67, 136, 101, 0.62);
}
.bg-content .sub-title { 
  font-size: 0.15rem;
  font-family: Helvetica-Light, Helvetica;
  font-weight: 300;
  color: #FFFFFF;
  line-height: 0.18rem;
}
.video-style {
  width: 5.46rem;
  height: 3.07rem;
  background: #D8D8D8;
  margin: 0 auto;
}
.video-container .title {
  font-size: 0.18rem;
  font-family: HiraKakuStdN-W8, HiraKakuStdN;
  font-weight: normal;
  color: #56565F;
  margin-top: 0.61rem;
  margin-bottom: 0;
}
.video-container .sub-title {
  font-size: 0.11rem;
  font-family: Helvetica;
  color: #56565F;
  margin-bottom: 0.33rem;
  margin-top: 0.04rem;
}
.home-middle1 {
  background: #F7F8F9;
  padding: 0 0.57rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
}
.middle-item img {
  width: 1.63rem;
  height: 1.64rem;
}
.middle-item {
  width: 1.89rem;
  margin-top: 0.8rem;
}
.middle-item .title {
  font-size: 0.16rem;
  font-family: Helvetica-Bold, Helvetica;
  font-weight: bold;
  color: #3C3C3C;
  line-height: 0.22rem;
}
.middle-item .sub-title {
  font-size: 0.11rem;
  font-family: Helvetica;
  color: #999999;
  line-height: 0.15rem;
}
.home-middle2 {
  height: 4.48rem;
  margin-bottom: 0.61rem;
}
</style>