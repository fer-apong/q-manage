<template>
  <div>
    <q-list
      bordered
      class="rounded-borders bg-white q-mb-md"
    >
      <q-expansion-item
        expand-separator
        icon="mdi-filter"
        label="过滤/搜索"
        expand-icon="mdi-chevron-down"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

    </q-list>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4">
        col
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
        col
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
        col
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleApi } from 'network/request'
export default {
  name: 'PageArticles',
  components: {},
  props: {},
  data () {
    return {
      breadcrumbs: []
    }
  },
  methods: {
    getArticle () {
      const data = {
        pageIndex: 1,
        pageSize: 3
      }
      getArticleApi ('NewsListHanlder.ashx', data).then (result => {
        console.log(result)
      }).catch (err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getArticle()
  }
}
</script>
<style scoped>
</style>
