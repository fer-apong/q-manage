<template>
  <q-breadcrumbs class="q-pb-md q-pr-md q-pl-md">
    <q-breadcrumbs-el
      label="首页"
      icon="mdi-home"
    />
    <q-breadcrumbs-el
      v-for="breadcrumb in breadcrumbsData"
      :key="breadcrumb.index"
      :label="breadcrumb"
    />
  </q-breadcrumbs>
</template>

<script>
export default {
  props: {
    breadcrumbsData: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

