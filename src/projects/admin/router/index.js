import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@admin/views/Main'
import ArticleCreate from '@admin/views/Article/ArticleCreate.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/',
        name: 'home',
        component: ArticleCreate,
        meta: {
          title: '创建/编辑文章'
        }
      },
      {
        path: '/articleList',
        name: 'articleList',
        component: () => import('@admin/views/Article/ArticleList.vue'),
        meta: {
          title: '文章列表'
        }
      },
      {
        path: '/articleDetail',
        name: 'articleDetail',
        component: () => import('@admin/views/Article/ArticleDetail.vue'),
        meta: {
          title: '文章详情'
        }
      },
      {
        path: '/commentManage',
        name: 'commentManage',
        component: () => import('@admin/views/CommentManage/CommentManage.vue'),
        meta: {
          title: '留言管理'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '@admin/views/Login/Login.vue'),
    meta: {
      title: '登录'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
