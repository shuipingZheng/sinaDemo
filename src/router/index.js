import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import message from '@/components/message'
import discovery from '@/components/discovery'
import mine from '@/components/mine'
import attention from '@/components/home/attention.vue'
import popular from '@/components/home/popular.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    	//首页第一个
    	path: '/',
        redirect: '/home/attention'
    },{
        path:'/home/attention',
        component: attention
    },{
        path:'/home/popular',
        component: popular
    },{
    	path: '/message',
        component: message
    },{
    	
    	path: '/discovery',
        component: discovery
    },{
    	
    	path: '/mine',
        component: mine
    }

  ]
})
