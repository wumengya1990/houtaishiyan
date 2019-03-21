import Vue from 'vue'
import Router from 'vue-router'

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
          redirect: '/documentMain/inbox',
          component:resolve => require(['@/components/documentNR/documentMain'],resolve),
          children:[
            {
              path:'outbox',
              name: 'outbox',
              component:resolve => require(['@/components/documentNR/outbox'],resolve),
              meta:{
                name:'发件箱'
              }
            },
            {
              path:'inbox',
              name: 'inbox',
              component:resolve => require(['@/components/documentNR/inbox'],resolve),
              meta:{
                name:'收件箱'
              }
            },
            {
              path:'drafts',
              name: 'drafts',
              component:resolve => require(['@/components/documentNR/drafts'],resolve)
            }
          ]
        },
        {
          path: '/emailMain',
          name: 'emailMain',
          redirect: '/emailMain/inboxe',
          component:resolve => require(['@/components/emailNR/emailMain'],resolve),
          children:[
            {
              path:'outboxe',
              name: 'outboxe',
              component:resolve => require(['@/components/emailNR/outbox'],resolve),
              meta:{
                name:'发件箱'
              }
            },
            {
              path:'inboxe',
              name: 'inboxe',
              component:resolve => require(['@/components/emailNR/inbox'],resolve),
              meta:{
                name:'收件箱'
              }
            },
            {
              path:'draftse',
              name: 'draftse',
              component:resolve => require(['@/components/emailNR/drafts'],resolve)
            }
          ]
        }
      ]
    }
    
    
  ]
})
