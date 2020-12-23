const navData = [
  {
    title: '工作桌面',
    caption: '系统首页仪表盘',
    icon: 'mdi-home',
    link: '/'
  },
  {
    title: '文章管理',
    caption: '所有文章类内容管理',
    icon: 'mdi-newspaper',
    children: [
      {
        title: '所有文章',
        link: '/Articles/Articles'
      },
      {
        title: '添加文章',
        link: '/Articles/AddArticle'
      }
    ]
  },
  {
    title: '站点统计',
    caption: '外链至百度统计',
    icon: 'mdi-chart-areaspline',
    link: 'http://www.baidu.com'
  },
  {
    title: '三级菜单',
    caption: '测试三级菜单显示',
    icon: 'mdi-newspaper',
    children: [
      {
        title: '二级菜单',
        link: 'pages/Articles/index.vue'
      },
      {
        title: '二级菜单',
        link: 'pages/Articles/AddArticle.vue',
        children: [
          {
            title: '三级菜单',
            link: 'pages/Articles/index.vue'
          },
          {
            title: '三级菜单',
            link: 'pages/Articles/AddArticle.vue'
          }
        ]
      }
    ]
  },
]

export default navData