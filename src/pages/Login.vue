<template>
  <div class="fullscreen q-pa-md flex flex-center container">
    <div class="row">
      <div class="col">
        <div class="content-container">
          <div class="content">
            <q-card-section
              flat
              bordered
            >
              <q-card-section>
                <img
                  src="~assets/logo.png"
                  alt="流年后台管理系统"
                >
              </q-card-section>

              <q-card-section>
                <q-form class="q-gutter-md">
                  <q-input
                    filled
                    v-model="name"
                    label="用户名/UID"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || '请输入用户名']"
                  />

                  <q-input
                    filled
                    type="password"
                    v-model="age"
                    label="密码/Password"
                    lazy-rules
                    :rules="[val => val !== null && val !== '' || '请输入密码']"
                  />
                  <div>
                  </div>
                </q-form>
              </q-card-section>

              <q-separator dark />
              <q-card-actions class="q-col-gutter-sm">
                <div class="col">
                  <q-btn
                    label="登录"
                    type="submit"
                    unelevated
                    color="primary"
                    icon="mdi-check-circle-outline"
                    align="around"
                    class="full-width"
                  />

                </div>
                <div class="col">
                  <q-btn
                    label="清空"
                    type="reset"
                    color="grey-4"
                    text-color="grey-8"
                    unelevated
                    class="full-width"
                  />
                </div>
              </q-card-actions>
            </q-card-section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
.container {
  background-image: url("~assets/bg-login.jpg");
  background-position: center center;
}
.content-container {
  background: rgba(255, 255, 255, 0.4);
  min-width: 30vw;
  max-width: 90vw;
  padding: 1em;
  border-radius: 5px;
  margin: 2.85714em;
}
.content {
  background: #fff;
}
</style>
