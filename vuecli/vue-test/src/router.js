import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      // beforeEnter(to,from,next){
      //    next(); 
      // }
    },
    {
      path:"/mine",
      name:"/mine",
      component: () => import("./views/Mine.vue")
    },
    {
      path:"/pack",
      name:"/pack",
      component: () => import("./views/Pack.vue"),
      alias:"/name",
      children:[
        {
          path:"/pack/pack1",
          name:"pack1",
          component:() => import("./views/Pack1.vue")
        },
        {
          path:"/pack/pack2/:name",
          name:'pack2',
          component: () => import("./views/Pack2.vue")
        }
      ]
    },
    {
      path:"/home",
      redirect:"/"
    },
    {
      path:"*",
      component: () => import("./views/Error.vue")
    }
  ]
})
