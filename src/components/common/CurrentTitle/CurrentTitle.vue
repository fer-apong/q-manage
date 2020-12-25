<template>
  <div class="text-subtitle1 text-grey-8">{{CurrentTitle}}</div>
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
}
</script>
<style scoped>
</style>
