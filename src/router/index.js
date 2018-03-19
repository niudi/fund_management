import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import userContent from '@/components/userContent'
import userInvest from '@/components/userInvest'
import userRedeem from '@/components/userRedeem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/userContent',
      name: 'userContent',
      component: userContent
    },
    {
      path: '/userInvest',
      name: 'userInvest',
      component: userInvest
    },
    {
      path: '/userRedeem',
      name: 'userRedeem',
      component: userRedeem
    }
  ]
})
