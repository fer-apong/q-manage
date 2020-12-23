// import RouteView from 'layouts/RouteView'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('pages/Index.vue'),
    meta: {
      title: '首页',
      icon: 'mdi-home',
      breadcrumbs: [],
      role: [],
    }
  },
  {
    path: '/Articles',
    name: '文章管理',
    component: () => import('layouts/RouteView.vue'),
    meta: {
      title: '文章管理',
      icon: 'mdi-newspaper',
      breadcrumbs: [],
      role: [],
    },
    children: [
      {
        path: '/Articles/Category',
        name: '文章分类管理',
        component: () => import('pages/Articles/Category'),
        meta: { title: '文章分类管理', breadcrumbs: ['文章管理', '文章分类管理'], role: [] }
      },
      {
        path: '/Articles/Articles',
        name: '所有文章',
        component: () => import('pages/Articles/Articles'),
        meta: { title: '所有文章', breadcrumbs: ['文章管理', '所有文章'], role: [] }
      },
      {
        path: '/Articles/AddArticle',
        name: '添加文章',
        component: () => import('pages/Articles/AddArticle'),
        meta: { title: '添加文章', breadcrumbs: ['文章管理', '添加文章'], role: [] }
      }
    ]
  },
  {
    path: '/Products',
    name: '产品管理',
    component: () => import('layouts/RouteView.vue'),
    meta: {
      title: '产品管理',
      icon: 'mdi-newspaper',
      breadcrumbs: [],
      role: [],
    },
    children: [
      {
        path: '/Products/Category',
        name: '产品分类管理',
        component: () => import('pages/Articles/Category'),
        meta: { title: '产品分类管理', breadcrumbs: ['产品管理', '产品分类管理'], role: [] }
      },
      {
        path: '/Products/Products',
        name: '所有产品',
        component: () => import('pages/Products/Products'),
        meta: { title: '所有产品', breadcrumbs: ['产品管理', '所有产品'], role: [] }
      },
      {
        path: '/Products/AddProduct',
        name: '添加产品',
        component: () => import('pages/Products/AddProduct'),
        meta: { title: '添加产品', breadcrumbs: ['产品管理', '添加产品'], role: [] }
      }
    ]
  }




  // {
  //   path: '/Articles',
  //   component: () => import('pages/Articles/Articles')
  // },
]
export default routes
