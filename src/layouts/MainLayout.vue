<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-grey-1 text-dui">
      <HeaderToolbar />
    </q-header>

    <q-drawer
      elevated
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-grey-1 text-grey-9 "
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item-label
            header
            class="q-pt-sm q-pb-sm"
          >
            <img
              src="~assets/logo.png"
              alt="流年后台管理系统"
            >
          </q-item-label>
          <NavBar
            :navData="routes"
            class="q-mb-xl"
          />
        </q-list>
        <q-separator />
        <q-card flat>
          <q-card-section>
            <div class="text-body2 text-grey-6">Copyright © 2020. DUI All rights reserved.</div>
          </q-card-section>
        </q-card>
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
import HeaderToolbar from 'components/common/HeaderToolbar/HeaderToolbar.vue'
import NavBar from 'components/common/NavBar/NavBar.vue'
import Breadcrumbs from 'components/common/Breadcrumbs/Breadcrumbs.vue'
import routes from 'router/routes.js'

export default {
  name: 'MainLayout',
  components: {
    HeaderToolbar, 
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

<style>
.q-layout__shadow:after {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.08), 0 0 5px rgba(0, 0, 0, 0.08);
}
.q-header > .q-toolbar {
  height: 55px;
}
</style>


