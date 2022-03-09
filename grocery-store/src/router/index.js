import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Browse from '../views/Browse.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [

{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/browse',
    name: 'browse',
    component: Browse
},
{
    path: '/Cart',
    name: 'Cart',
    component: Cart
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
