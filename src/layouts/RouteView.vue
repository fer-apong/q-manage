<template>
  <div>
    <breadcrumbs :breadcrumbsData="breadcrumbsData" />
    <router-view></router-view>
  </div>
</template>

<script>
import Breadcrumbs from '../components/common/breadcrumbs/breadcrumbs.vue'

export default {
    components: { Breadcrumbs },
    data() {
      return {
        breadcrumbsData: []
      }
    },
  methods: {
    getPageBreadcrumbs() {
      this.breadcrumbsData = this.$route.meta.breadcrumbs
      console.log(this.breadcrumbsData)
    }
  },
  mounted() {
    this.getPageBreadcrumbs()
  }

}
</script>


