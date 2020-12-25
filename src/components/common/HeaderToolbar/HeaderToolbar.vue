<template>
  <q-toolbar>
    <q-btn
      flat
      dense
      round
      icon="mdi-view-headline"
      aria-label="Menu"
      @click="leftDrawerOpen = !leftDrawerOpen"
    />
    <q-toolbar-title class="text-subtitle2">
      显示/隐藏菜单
    </q-toolbar-title>

    <div>Quasar v{{ $q.version }}</div>
  </q-toolbar>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  methods: {}
}
</script>
<style scoped>
</style>
