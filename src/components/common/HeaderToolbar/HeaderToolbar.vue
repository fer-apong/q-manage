<template>
  <q-toolbar>
    <q-btn
      flat
      dense
      icon="mdi-view-headline"
      aria-label="Menu"
      @click="leftDrawerOpen = !leftDrawerOpen"
    />
    <q-toolbar-title class="text-subtitle2">
      显示/隐藏菜单
    </q-toolbar-title>

    <div>
      <q-btn-group
        push
        flat
      >
        <q-btn
          label="个人中心"
          icon="mdi-account-circle"
          type="a"
        >
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item
                clickable
                v-close-popup
              >
                <q-item-section>修改密码</q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
              >
                <q-item-section>个人中心</q-item-section>
              </q-item>
              <q-separator />
              <q-item
                clickable
                v-close-popup
                to="/Login"
              >
                <q-item-section>退出登录</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-btn-group>
    </div>
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
.q-menu {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.08),
    0 3px 1px -2px rgba(0, 0, 0, 0.08);
}
</style>
