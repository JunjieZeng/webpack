<template>
      <div class="container">
<!--          <div class="line"></div>-->
<!--          <div class="title">-->
<!--            奥洛组件库-->
<!--          </div>-->
        <ul class="nav right" style="margin-top: 9px;margin-right: 134px;">
          <li class="nav-item nav-algolia-search">
<!--            <el-input-->
<!--              size="small"-->
<!--              class="inline-input"-->
<!--              v-model="state1"-->
<!--              prefix-icon="el-icon-search"-->
<!--              :trigger-on-focus="false"-->
<!--              @focus="focus=true"-->
<!--              @blur="focus=false"-->
<!--              placeholder="搜索文档"-->
<!--            >-->
<!--            </el-input>-->
            <al-input placeholder="搜索文档" suffix-icon="el-icon-search"></al-input>
          </li>
<!--          <li class="nav-item personCenter">-->
<!--            <div class="email">-->
<!--              <i class="el-icon-message" style="font-size: 18px;"></i>-->
<!--            </div>-->
<!--            <div class="head-img">-->
<!--              <img src="../../static/head.png" width="28" height="28" alt="">-->
<!--            </div>-->
<!--            MyName-->
<!--          </li>-->
        </ul>
      </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
          return {
            restaurants: [],
            state1: '',
              tabs:['组件','主题']
          }
        },
    }
</script>

<style scoped lang="scss">
  .container{
      width: 100%;
      /*max-width: 1140px;*/
      position: relative;
      margin: 0 auto;
      font-size: 0;
      text-align: left;
      height: 100%;
      line-height: 52px;
      /*border-bottom: 1px solid rgba(239,241,249,1);*/
      background: #fff;
      border-bottom: 1px solid transparent;
      box-shadow:0px 3px 12px rgba(226,229,234,1);
      >*{
        display: inline-block;
        font-size: 14px;
        vertical-align: middle;
        margin-right: 20px;
      }
    }
  .left{
    height: 53px;
    width: 200px;
    background: #222;
    padding-top: 8px;
    box-sizing: border-box;
    a{
      display: block;
      line-height: 70px;
      margin-left: 20px;
      img{
        display: block;
      }
    }
  }
  .line{
    width:28px;
    height:2px;
    background:#fff;
    opacity:1;
  }
  .title{
    width:105px;
    height:28px;
    font-size:20px!important;
    font-weight:bold;
    line-height:28px;
    color:#fff;
    opacity:1;
  }
  .right{
    position: absolute;
    right: 0;
    top: 0;
    word-break: keep-all;
    white-space: nowrap;
    /*width: 600px;*/
    li{
      position: relative;
      display: inline-block;
    }
    .head-img{
      display: inline-block;
      vertical-align: middle;
      border-radius: 50%;
      overflow: hidden;
      font-size: 0;
    }
    .email{
      display: inline-block;
      vertical-align: middle;
      color: #fff;
      width: 40px;
      text-align: center;
    }
    .personCenter{
      color: #fff;
      font-size: 14px;
      vertical-align: middle;
      cursor: pointer;
    }
  }
</style>
