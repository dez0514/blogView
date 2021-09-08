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
    component: () => import('../views/Archive/Archive.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About/About.vue')
  },
  // {
  //   path: '/comment',
  //   name: 'comment',
  //   component: () => import('../views/Comment/Comment.vue')
  // },
  {
    path: '/article',
    name: 'article',
    component: () => import(/* webpackChunkName: "about" */ '../views/Article/ArticleDetail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
