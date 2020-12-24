<template>
  <q-breadcrumbs class="q-pb-md q-pr-md q-pl-md">
    <q-breadcrumbs-el
      v-for="breadcrumb in breadcrumbsData"
      :icon="breadcrumb.meta.icon"
      :key="breadcrumb.index"
      :label="breadcrumb.name"
    />
  </q-breadcrumbs>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  data(){
    return{
      breadcrumbsData: []
    }
  },
  methods: {
    getBreadcrumbData () {
      let matched = this.$route.matched.filter(item => item.name)  //  this.$route.matched 可以获取到一个数组，包含当前路由的所有嵌套路径片段的路由记录
      const first = matched[0]
      // console.log(matched)
      if (first && first.name !== '首页') {
        matched = [{path: '/', meta: { title: '首页' }}].concat(matched)
      }
      this.breadcrumbsData = matched;
      // console.log(matched)
    }
  },
  mounted() {
    this.getBreadcrumbData();
  },
  watch: {
    $route(to, from) {
      this.getBreadcrumbData();
    }
  }
}
</script>


