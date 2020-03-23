import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import MenuPage from "../views/showPage/MenuPage"
import addFormPage from "../views/showPage/addFormPage"
import Intro from "../views/Intro"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'/',
          name:'标签页',
          component: Intro
        },
        {
          path:'/navMenu',
          name:'标签页',
          component: MenuPage
        },
        {
          path:'/addFormPage',
          name:'标签页',
          component: addFormPage
        },
      ]
    }
  ]
})
