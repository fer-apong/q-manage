<template>
  <div>
    <template v-for="(navItem, index) in navData">
      <q-expansion-item
        :key="index"
        :group="group"
        v-if="navItem.children"
        expand-separator
        expand-icon="mdi-chevron-down"
        :icon="navItem.meta.icon"
        :label="navItem.meta.title"
        :header-inset-level="indent"
      >
        <nav-bar
          v-if="navItem.children.length>0"
          :navData="navItem.children"
          :indent="indent + 0.5"
          :group="group + 1"
        ></nav-bar>
      </q-expansion-item>
      <q-item
        :key="index"
        v-else
        clickable
        tag="a"
        :to="navItem.path"
        :inset-level="indent"
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
    </template>
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
    },
    indent: {
      type: Number,
      require: false,
      default: 0
    },
    group: {
      type: String,
      require: false,
      default: '1'
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
  },
}
</script>
<style scoped>
.q-item.q-router-link--active,
.q-item--active {
  border-right: 3px solid var(--q-color-primary);
}
</style>
