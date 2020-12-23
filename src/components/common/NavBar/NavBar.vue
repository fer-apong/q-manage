<template>
  <div>
    <div
      v-for="navItem in navData"
      :key="navItem.index"
    >
      <q-expansion-item
        group="nav"
        v-if="navItem.children"
        expand-separator
        expand-icon="mdi-chevron-down"
        :icon="navItem.meta.icon"
        :label="navItem.meta.title"
      >
        <q-card>
          <q-card-section>
            <nav-bar
              v-if="navItem.children.length>0"
              :navData="navItem.children"
            ></nav-bar>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-item
        v-else
        clickable
        tag="a"
        :to="navItem.path"
      >
        <q-item-section
          v-if="navItem.meta.icon"
          avatar
        >
          <q-icon :name="navItem.meta.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ navItem.meta.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar'

export default {
  name: 'NavBar',
  props:{
    navData: {
      type: Array,
      require: true,
      default() {
        return []
      }
    }
  },
  components: {
    NavBar
  },
  data () {
    return {

    }
  },
  mounted() {
    console.log(this.navData)
  },
}
</script>
<style scoped>
.q-item {
  min-height: 0;
}
.q-item__label {
  line-height: normal !important;
}
.q-card__section--vert {
  padding: 0;
}
</style>
