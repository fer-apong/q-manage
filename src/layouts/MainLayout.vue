<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="mdi-page-layout-sidebar-left"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-grey-1"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item-label
            header
            class="text-grey-8"
          >
            Essential Links
          </q-item-label>
          <NavBar :navData="routes" />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <Breadcrumbs />
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar.vue'
import Breadcrumbs from 'components/common/Breadcrumbs/Breadcrumbs.vue'
import routes from 'router/routes.js'

export default {
  name: 'MainLayout',
  components: { 
    NavBar,
    Breadcrumbs
  },
  data () {
    return {
      leftDrawerOpen: true,
      NavBar,
      routes
    }
  }
}
</script>

<style scoped>
.q-header {
  background: #fff;
  color: var(--q-color-primary);
}
.q-toolbar {
  height: 70px;
}
</style>


