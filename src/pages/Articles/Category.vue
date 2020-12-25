<template>
  <q-card flat>
    <q-card-section>
      <CurrentTitle class="text-h6" />
      <p class="text-grey-6">页面示例的为：简单表格的弹出层编辑内容。</p>
    </q-card-section>
    <q-separator inset />
    <!-- 主要内容 -->
    <q-card-section>
      <q-table
        title="测试用表格"
        :data="data"
        :columns="columns"
        row-key="name"
        flat
        bordered
        :pagination="initialPagination"
        rows-per-page-label="每页显示"
      >
        <template v-slot:top-right>
          <q-btn-group flat>
            <q-btn
              color="primary"
              icon="timeline"
              label="导出"
            />
            <q-btn
              color="primary"
              icon="visibility"
              label="删除"
            />
            <q-btn
              color="primary"
              icon="update"
              label="添加"
            />
          </q-btn-group>
          <q-space />
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import CurrentTitle from 'components/common/CurrentTitle/CurrentTitle'
import { getArticleCategoryApi } from 'network/request'

export default {
  components: {
    CurrentTitle
  },
  props: {},
  data () {
    return {
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        rowsPerPage: 8
        // rowsNumber: xx if getting data from a server
      },
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ]
    }
  },
  methods: {
    getArticleCategory() {
      this.getArticleCategoryApi('GetColumnHandler.ashx').then (result => {
        console.log(result)
      }).catch (err => {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
</style>
