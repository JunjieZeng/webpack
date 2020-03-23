<template>
  <div class="nav-bar">
    <al-menu :menu-list="menuList" @selectMenu="selectMenu"></al-menu>
  </div>
</template>

<script>
    export default {
        name: "navBar",
        data() {
            return{
                menuList: [{
                                path: '/navMenu',
                                title: '问题日志',
                                icon: '',
                            },{
                                path: '/addFormPage',
                                title: '新增问题',
                                icon: '',
                            }]
                }
        },
        methods:{
            selectMenu(item) {
                console.info(item)
                const arr = item.item.split(',')
                if (arr[0] !== 'undefined') {
                    this.$router.push(arr[0])
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .nav-bar{
      width: 210px;
      height: 100%;
      background-color: #192122;
    }

</style>
