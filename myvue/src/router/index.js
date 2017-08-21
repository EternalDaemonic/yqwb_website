import Vue from 'vue'
import Router from 'vue-router'
import Design from '@/components/Design'
import Album from '@/components/Album'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/dist',
      name: 'Design',
      component: Design
    },
    {
      path: '/album',
      name: 'Album',
      component: Album
    },
    {
    	path:"*",
    	redirect:"/design"
    }
  ]
})
