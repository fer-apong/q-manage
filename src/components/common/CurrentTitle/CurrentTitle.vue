<template>
  <div class="text-subtitle1 text-primary">{{CurrentTitle}}</div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      CurrentTitle: ''
    }
  },
  methods: {
    getCurrentTitle() {
      this.CurrentTitle = this.$route.meta.title
    }
  },
  mounted() {
    this.getCurrentTitle()
  },
  watch: {
    $route(to, from) {
      this.getCurrentTitle();
    }
  }
}
</script>
<style scoped>
</style>
