<template>
  <al-container>
    <al-aside>
      <navBar></navBar>
    </al-aside>
    <al-container :isVertical="true">
      <al-header>
        <top-head></top-head>
      </al-header>
      <!-- 主内容区域 -->
      <al-main style="">
          <router-view></router-view>
      </al-main>
    </al-container>
  </al-container>
</template>

<script>
  import LeftNav from './LeftNav'
  import TopHead from './Head'
  import NavBar from "./NarBar";
    export default {
        name: "Home",
        components:{
          LeftNav,
          TopHead,
            NavBar
        }
    }
</script>

<style scoped>
</style>
