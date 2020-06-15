import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Page from '../views/Page.vue'
import ProductPage from '../views/ProductPage.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/marineproducts',
    name: 'Marine Products',
    component: ProductPage
  },
  {
    path: '/productCategory',
    name: 'product Category',
    component: ProductPage
  },
  {
    path: '/industrialproducts',
    name: 'Industrial Products',
    component: ProductPage
  },
  {
    path: '/contactus',
    name: 'Contact Us',
    component: Page
  },
  {
    path: '/aboutus',
    name: 'About Us',
    component: Page
  },
  {
    path: '/downloads',
    name: 'Downloads',
    component: Page
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = 'Jowa USA | ' + to.name;
  next();
});

export default router
