// import RouteView from 'layouts/RouteView'

const routes = [
  {
    path: '/dashboard',
    name: '系统看板',
    component: () => import('pages/dashboard/dashboard.vue'),
    meta: {
      title: '系统看板',
      icon: 'mdi-view-dashboard',
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
      role: [],
    },
    children: [
      {
        path: '/Articles/Category',
        name: '文章分类管理',
        component: () => import('pages/Articles/Category'),
        meta: {
          title: '文章分类管理', role: []
        }
      },
      {
        path: '/Articles/Articles',
        name: '所有文章',
        component: () => import('pages/Articles/Articles'),
        meta: { title: '所有文章', role: [] }
      },
      {
        path: '/Articles/AddArticle',
        name: '添加文章',
        component: () => import('pages/Articles/AddArticle'),
        meta: { title: '添加文章', role: [] }
      }
    ]
  },
  {
    path: '/Products',
    name: '产品管理',
    component: () => import('layouts/RouteView.vue'),
    meta: {
      title: '产品管理',
      icon: 'mdi-layers',
      role: [],
    },
    children: [
      {
        path: '/Products/Category',
        name: '产品分类管理',
        component: () => import('pages/Articles/Category'),
        meta: { title: '产品分类管理', role: [] }
      },
      {
        path: '/Products/Products',
        name: '所有产品',
        component: () => import('pages/Products/Products'),
        meta: { title: '所有产品', role: [] }
      },
      {
        path: '/Products/AddProduct',
        name: '添加产品',
        component: () => import('pages/Products/AddProduct'),
        meta: { title: '添加产品', role: [] }
      }
    ]
  },
  {
    path: '/Plans',
    name: '工作计划管理',
    component: () => import('layouts/RouteView.vue'),
    meta: {
      title: '工作计划管理',
      icon: 'mdi-calendar-clock',
      role: [],
    },
    children: [

      {
        path: '/Plans/CheckPending',
        name: '待审核工作计划',
        component: () => import('pages/Plans/CheckPending'),
        meta: { title: '待审核工作计划', role: [] }
      },
      {
        path: '/Plans/Plans',
        name: '所有工作计划',
        component: () => import('pages/Plans/Plans'),
        meta: { title: '所有工作计划', role: [] }
      },
      {
        path: '/Plans/Plan',
        name: '创建新计划',
        component: () => import('pages/Plans/Plan'),
        meta: { title: '创建新计划', role: [] }
      }
    ]
  }




  // {
  //   path: '/Articles',
  //   component: () => import('pages/Articles/Articles')
  // },
]
export default routes
