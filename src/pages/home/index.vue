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
      
       <swiper class="swiper-container" :options="swiperOption">
        <div class="swiper-slide slide-container">
          <img src="@/assets/scenes_img1.png"/>
          <div class="padding-style">
            <p class="title">Restaurant, Cafe, Bar&Club-</p>
            <p class="sub-title">Electra hubs fit perfectly in any kind of store! Electra lets your guests 
charge their phone at any time, without any expensive investment on 
adding more electrical outlets or cables. Our units is very self-explained 
and your staff can focus on providing the best service to your customers  
            </p>
          </div>
        </div>
        <div class="swiper-slide slide-container">
          <img src="@/assets/scenes_img2.png"/>
          <div class="padding-style">
            <p class="title">Events&Exhibitions-</p>
            <p class="sub-title">Electra can help the visitors to fully enjoy the event without worrying 
about their phone battery. Event organizers will no longer need to fix 
expensive and complicated power infrastrcutres 
            </p>
          </div>
        </div>
        <div class="swiper-slide slide-container">
          <img src="@/assets/scenes_img3.png"/>
          <div class="padding-style">
            <p class="title">Airport, Train station & Metro-</p>
            <p class="sub-title">Electrical outlets and charging slots are never enough, especially after 
  long delays.  With Electra, travellers will no longer need to pack their 
  power bank, find the ligninght cable or usb cable or type-c cable, and can 
  charge their phone wherever they want when on transit  
            </p>
          </div>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

    </div>
  </div>
</template>

<script src="../package/swiper-bundle.min.js"></script>
<script>
import { downloadPath } from '@/utils/const.js';
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      name: 'swiper-example-default',
      title: 'Default',
      components: {
        Swiper,
        SwiperSlide
      },
      swiper: null,
      swiperOption: {
        slidesPerView: 1,
        // spaceBetween: 30,
        // slidesPerGroup: 4,
        //第一个轮播
        autoplay: true,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      images: [
        'scenes_img1.png',
        'scenes_img2.png',
        'scenes_img3.png'
      ]
      // swiperOption: {
      //   pagination: {
      //     el: '.swiper-pagination',
      //     clickable :true
      //   },
      //   paginationClickable :true,
      //   mousewheelControl: true,
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev'
      //   },
      //   observer:true,
      //   observeParents:true,
      //   autoplay: true,
      //   loop: true,
      //   direction: 'horizontal'
      // }
    }
  },
  mounted() {
    // this.swiper = new Swiper('.swiper-container', this.swiperOptions);
    // console.log('Current Swiper instance object', this.swiper)
    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
  methods: {
    handleDownLoad(type) {
      window.open(downloadPath[type]);
    },
  }
}
</script>

<style lang="scss" scoped>
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
  padding: 0 0.57rem 0.85rem 0.57rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.middle-item img {
  width: 1.5rem;
  height: 1.5rem;
}
.middle-item {
  width: 1.5rem;
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
  position: relative;
}
.swiper-container {
  width: 100%;
  height: 4.48rem;
  --swiper-pagination-color: #3C3C3C;
}  
.slide-container {
  display: flex;
  align-items: center;
  text-align: left;
}
.slide-container img {
  width: 50%;
}
.slide-container .title {
  font-size: 0.16rem;
  font-family: Helvetica-Bold, Helvetica;
  font-weight: bold;
  color: #3C3C3C;
  line-height: 0.22rem;
}
.slide-container .sub-title {
  font-size: 0.11rem;
  font-family: Helvetica;
  color: #575757;
  line-height: 0.15rem;
}
.padding-style {
  padding-left: 0.49rem;
  padding-right: 0.81rem;
}
.swiper-button-next {
  right: 0.81rem;
  top: 4rem;
  height: 0.2rem;
  width: 0.2rem;
  background-image: url('../../assets/slide_icon.png');
  background-size: 0.2rem;
}
.swiper-button-next:after {
  content: '';
  font-family: '';
}
.swiper-button-prev {
  left: calc(50% + 0.49rem);
  top: 4rem;
  height: 0.2rem;
  width: 0.2rem;
  border-radius: 50%;
  background: #BFBFBF;
}
.swiper-button-prev:after {
  content: '';
  font-family: '';
}
.pagi-style {
  position: absolute;
  left: calc(50% + 0.49rem);
  top: 4rem;
  width: calc(50% - 1.3rem);
  height: 1rem;
}
.swiper-pagination-bullets {
  left: 2.2rem;
  top: 3.85rem;
}
</style>