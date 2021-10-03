import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: Home
  },
  {
    path: '/archive',
    name: 'archive',
    meta: {
      title: '博客归档'
    },
    component: () => import('../views/Archive/Archive.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于我'
    },
    component: () => import('../views/About/About.vue')
  },
  {
    path: '/search',
    name: 'search',
    meta: {
      title: '搜索'
    },
    component: () => import('../views/Search/Search.vue')
  },
  // {
  //   path: '/comment',
  //   name: 'comment',
  //   component: () => import('../views/Comment/Comment.vue')
  // },
  {
    path: '/article',
    name: 'article',
    meta: {
      title: '文章详情'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Article/ArticleDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
