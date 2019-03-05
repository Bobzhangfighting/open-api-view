
import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import main from '../components/main'
import application from '../components/application'
import createapplication from '../components/createApplication'
import userInfo from '../components/userInfo'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/application',
      name: 'application',
      component: application
    },
    {
      path: '/createapplication',
      name: 'createapplication',
      component: createapplication,
      children:[{
        path: 'stepOne',
        component:() => import('../components/createApplicationOneComponent.vue')
      },
      {
        path: 'stepTwo',
        component:() => import('../components/createApplicationTwoComponent.vue')
      },
      {
        path: 'stepThree',
        component:() => import('../components/createApplicationThreeComponent.vue')
      },
      {
        path: 'appDetail',
        component:() => import('../components/applicationDetailComponent.vue')
      },{
        path:'appType',
        component:() =>import('../components/appiSorweb.vue')
      }
    ]
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: userInfo
    }
  ]
})
