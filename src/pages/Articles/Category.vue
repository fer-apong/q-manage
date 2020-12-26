<template>
  <q-card-section>
    <p class="text-grey-6">页面示例的为：简单表格的弹出层编辑内容。</p>
    <q-table
      :data="tableContentData"
      :columns="columns"
      :visibleColumns="visibleColumns"
      row-key="index"
      flat
      bordered
      :pagination="initialPagination"
      rows-per-page-label="每页显示"
      :separator="separator"
    >
      <template v-slot:top>
        <div class="col-2">
          <q-select
            outlined
            dense
            v-model="model"
            :options="options"
            label="一级分类"
            clear-icon="mdi-close"
            clearable
          />
        </div>
        <q-space class="col" />
        <div class="col-4">
          <q-btn-group
            flat
            class="float-right"
          >
            <q-btn
              color="primary"
              icon="mdi-file-export"
              label="导出"
              size="md"
            />
            <q-btn
              color="primary"
              icon="mdi-delete"
              label="删除"
              size="md"
            />
            <q-btn
              color="primary"
              icon="mdi-table-row-plus-after"
              label="添加"
              size="md"
            />
          </q-btn-group>
        </div>
      </template>
      <template v-slot:body-cell-Action="props">
        <q-td :props="props">
          <q-btn-group flat>
            <q-btn
              icon="mdi-delete"
              label="删除"
              size="sm"
            />
            <q-btn
              icon="mdi-table-edit"
              label="编辑"
              size="sm"
            />
          </q-btn-group>
        </q-td>
      </template>
    </q-table>
  </q-card-section>
</template>

<script>
import { $$Api } from 'network/request'

export default {
  components: {
  },
  props: {},
  data () {
    return {
      model: null,
      options: [
        '资讯', '深度'
      ],
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        rowsPerPage: 20
        // rowsNumber: xx if getting data from a server
      },
      // 分割线模式可选值：horizontal (default)', 'vertical', 'cell', 'none'
      separator: 'horizontal',
      visibleColumns: ['ParentName', 'ColumnName', 'QuickExplain', 'Action'],
      columns: [
        {
          name: 'index',
          required: true,
          label: '序号',
          align: 'center',
          field: 'index'
        },
        { name: 'ParentName', align: 'left', label: '一级分类', field: 'ParentName', sortable: true },
        { name: 'ColumnName', align: 'left', label: '二级分类', field: 'ColumnName', sortable: true },
        { name: 'QuickExplain', align: 'left', label: '快速描述', field: 'QuickExplain' },
        { name: 'Action', align: 'center', label: '操作', field: '', style: 'width:300px' },
        { name: 'ID', align: 'left', label: 'ID', field: 'ID' },
        { name: 'UpLevelID', align: 'left', label: 'UpLevelID', field: 'UpLevelID' },
      ],
      tableContentData: []
    }
  },
  methods: {
    getArticleCategory() {
      $$Api('ColumnList/GetColumnHandler.ashx').then (result => {
        this.tableContentData = result
        // 生成序号
        this.tableContentData.forEach((row, index) => {
          row.index = index + 1
          // console.log(row.index)
        })
        console.log(result)
      }).catch (err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getArticleCategory()
  },
}
</script>
<style scoped>
</style>
