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
      <img src="@/assets/home_bg.png">
      <p>Get powered up anytime, anywhere</p>
      <p>Available to charger 99% of all smartphone</p>
      <div>
        <img 
          class="download-style" 
          @click="handleDownLoad('ios')" 
          src="@/assets/download_ios.png"/>
        <img 
          class="download-style" 
          @click="handleDownLoad('android')" 
          src="@/assets/download_android.png"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.download-style {
  width: 0.7rem;
  height: 0.18rem;
  margin-top: 0.04rem;
  margin-right: 0.05rem;
}
</style>