import Vue from 'vue'
import Router from 'vue-router'
import documentMain from '@/components/documentMain'
import outbox from '@/components/outbox'
import inbox from '@/components/inbox'
import drafts from '@/components/drafts'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:resolve => require(['@/components/HelloWorld'],resolve)
    },
    {
      path: '/top',
      name: 'top',
      component:resolve => require(['@/components/top'],resolve)
    },
    {
      path: '/login',
      name: 'login',
      component:resolve => require(['@/components/login'],resolve)
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component:resolve => require(['@/components/mainPage'],resolve),
      children:[
        {
          path: '/documentMain',
          name: 'documentMain',
          component: documentMain,
          children:[
            {
              path:'outbox',
              name: 'outbox',
              component: outbox,
              meta:{
                name:'发件箱',
                auth:false
              }
            },
            {
              path:'inbox',
              name: 'inbox',
              component: inbox,
              meta:{
                name:'收件箱'
              }
            },
            {
              path:'drafts',
              name: 'drafts',
              component: drafts
            }
          ]
        }
      ]
    }
    
    
  ]
})
