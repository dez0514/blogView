import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/archive',
    name: 'archive',
    component: () => import(/* webpackChunkName: "about" */ '../views/Archive/Archive.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue')
  },
  {
    path: '/comment',
    name: 'comment',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Comment/Comment.vue')
  },
  {
    path: '/article',
    name: 'article',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Article/ArticleDetail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
