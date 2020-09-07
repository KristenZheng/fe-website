<!--
 * @Author: your name
 * @Date: 2020-09-07 14:34:07
 * @LastEditTime: 2020-09-08 07:46:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fe-website/src/pages/layout/index.vue
-->
<template>
  <div class="app-container">
    <navBar></navBar>
    <appMain></appMain>
    <footerBar></footerBar>
  </div>
</template>

<script>
export default {
  components: {
    navBar: () => import('./components/navBar.vue'),
    appMain: () => import('./components/appMain.vue'),
    footerBar: () => import('./components/footerBar.vue'),
  }
}
</script>

<style scoped>
.app-container {
  width: 100%;
  height: 100%;
}
</style>
