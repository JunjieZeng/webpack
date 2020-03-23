<template>
  <div class="side-nav" style="opacity: 1;">
    <div class="logo-box">
      <a href="https://www.qiyifox.com">
        <img width="125" src="../../static/logo.svg" alt="">
      </a>
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#1f1f1f"
      text-color="#6E727B"
    >
      <el-submenu index="1">
        <template slot="title">
          <span>基础组件</span>
        </template>
        <el-menu-item index="1-1" class="link" :class="{'active':$route.path.indexOf('/container')!=-1}"
                      @click="$router.push('/container')">布局容器
        </el-menu-item>
        <el-menu-item index="1-2" class="link" :class="{'active':$route.path.indexOf('/grid')!=-1}"
                      @click="$router.push('/grid')">栅格
        </el-menu-item>
        <el-menu-item index="1-3" class="link" :class="{'active':$route.path.indexOf('/font')!=-1}"
                      @click="$router.push('/font')">字体
        </el-menu-item>
        <el-menu-item index="1-4" class="link" :class="{'active':$route.path.indexOf('/icon')!=-1}"
                      @click="$router.push('/icon')">图标
        </el-menu-item>
        <el-menu-item index="1-5" class="link" :class="{'active':$route.path.indexOf('/button')!=-1}"
                      @click="$router.push('/button')">按钮
        </el-menu-item>
        <el-menu-item index="1-6" class="link" :class="{'active':$route.path.indexOf('/tabs')!=-1}"
                      @click="$router.push('/tabs')">tabs切换
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>组合组件</span>
        </template>
        <el-menu-item index="2-1" class="link"
                      :class="{'is-active':$route.path.indexOf('/input')!=-1&&$route.path.indexOf('/inputNum')==-1}"
                      @click="$router.push('/input')">文本输入框
        </el-menu-item>
        <el-menu-item index="2-2" class="link" :class="{'active':$route.path.indexOf('/switch')!=-1}"
                      @click="$router.push('/switch')">开关
        </el-menu-item>
        <el-menu-item index="2-3" class="link" :class="{'active':$route.path.indexOf('/inputNum')!=-1}"
                      @click="$router.push('/inputNum')">计数器
        </el-menu-item>
        <el-menu-item index="2-4" class="link" :class="{'active':$route.path.indexOf('/cascader')!=-1}"
                      @click="$router.push('/cascader')">级联选择器
        </el-menu-item>
        <el-menu-item index="2-5" class="link" :class="{'active':$route.path.indexOf('/select')!=-1}"
                      @click="$router.push('/select')">选择器
        </el-menu-item>
        <el-menu-item index="2-6" class="link" :class="{'active':$route.path.indexOf('/radio')!=-1}"
                      @click="$router.push('/radio')">单选框
        </el-menu-item>
        <el-menu-item index="2-7" class="link" :class="{'active':$route.path.indexOf('/checkbox')!=-1}"
                      @click="$router.push('/checkbox')">多选框
        </el-menu-item>
        <el-menu-item index="2-8" class="link" :class="{'active':$route.path.indexOf('/table')!=-1}"
                      @click="$router.push('/table')">表格
        </el-menu-item>
        <el-menu-item index="2-9" class="link" :class="{'active':$route.path.indexOf('/datetime')!=-1}"
                      @click="$router.push('/datetime')">时间日期选择器
        </el-menu-item>
        <el-menu-item index="2-10" class="link" :class="{'active':$route.path.indexOf('/card')!=-1}"
                      @click="$router.push('/card')">卡片
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span>模版组件</span>
        </template>
        <el-menu-item index="3-1" class="link" :class="{'active':$route.path.indexOf('/form')!=-1}"
                      @click="$router.push('/form')">表单
        </el-menu-item>
        <el-menu-item index="3-2" class="link" :class="{'active':$route.path.indexOf('/quickForm')!=-1}"
                      @click="$router.push('/quickForm')">便捷表单单列
        </el-menu-item>
        <el-menu-item index="3-3" class="link" :class="{'active':$route.path.indexOf('/quickFormtow')!=-1}"
                      @click="$router.push('/quickFormtow')">便捷表单双列
        </el-menu-item>
        <el-menu-item index="3-4" class="link" :class="{'active':$route.path.indexOf('/quickFormthree')!=-1}"
                      @click="$router.push('/quickFormthree')">便捷表单三列
        </el-menu-item>
        <el-menu-item index="3-5" class="link" :class="{'active':$route.path.indexOf('/showmore')!=-1}"
                      @click="$router.push('/showmore')">高级搜索
        </el-menu-item>
        <el-menu-item index="2-11" class="link" :class="{'active':$route.path.indexOf('/tabs')!=-1}"
                      @click="$router.push('/navMenu')">导航菜单
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <span>demo</span>
        </template>
        <el-menu-item index="4-1" class="link" :class="{'active':$route.path.indexOf('/uploadjson')!=-1}"
                      @click="$router.push('/uploadjson')">上传表单配置
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                restaurants: [],
                state1: '',
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll() {
                return [
                    {"value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号"},
                    {"value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号"},
                ]
            },
            handleSelect(item) {
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    }
</script>

<style scoped lang="scss">
  .logo-box {
    height: 52px;
    width: 200px;
    padding-top: 10px;
    box-sizing: border-box;
    padding-left: 20px;

    a {
      display: block;
      line-height: 70px;

      img {
        display: block;
      }
    }
  }

  .el-submenu .el-menu-item {
    height: 44px;
    line-height: 44px;
  }

  .side-nav {
    width: 100%;
    box-sizing: border-box;
    transition: opacity .3s;
    text-align: left;
    height: 100%;
    background: #192122;

    /deep/ {
      .el-submenu__title {
        font-size: 14px;
        color: #C8CBD1 !important;

        span {
          font-size: 14px;
        }
      }

      .el-menu {
        border-right: 0px solid transparent;
      }

      .el-menu-item {
        background: #192122;

        &:hover {
          background: transparent !important;
        }

        &.is-active {
          background: transparent !important;
          font-weight: bold;
          position: relative;
          /*&:before{*/
          /*  content: '';*/
          /*  display: block;*/
          /*  position: absolute;*/
          /*  top: 0;*/
          /*  left: 0;*/
          /*  width: 2px;*/
          /*  height: 100%;*/
          /*  background: #209bfa;*/
          /*}*/
        }
      }
    }
  }

  .nav-group {
    margin-top: 20px;

    &:first-child {
      margin-top: 0;
    }
  }

  .side-nav .nav-group__title {
    font-size: 12px;
    color: #999;
    line-height: 26px;
    margin-top: 15px;
  }

  .side-nav ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

</style>

