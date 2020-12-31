<template>
  <q-card-section>
    <p class="text-grey-6">页面示例的为：简单表格的弹出层编辑内容。</p>
    <q-table
      :data="tableContentData"
      :columns="columns"
      :visibleColumns="visibleColumns"
      row-key="index"
      :loading="loading"
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
            v-model="form.model"
            :options="form.options"
            label="一级分类"
            clear-icon="mdi-close"
            clearable
            @input="getCategory(form.model, defaultPageIndex)"
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
              @click="qDialog.addRow = true"
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
              @click="getDeleteRow(props.row)"
            />
            <q-btn
              icon="mdi-table-edit"
              label="编辑"
              size="sm"
            />
          </q-btn-group>
        </q-td>
      </template>
      <template v-slot:pagination>
        <q-pagination
          v-model="initialPagination.current"
          :max="initialPagination.page"
          :boundary-links="true"
          @click="getCategory(form.model, initialPagination.current)"
        >
        </q-pagination>
      </template>
      <template v-slot:loading>
        <q-inner-loading
          showing
          color="primary"
        />
      </template>
    </q-table>
    <!-- 对话框-删除确认 -->
    <q-dialog v-model="qDialog.delConfirm">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar
            icon="mdi-alert-circle-outline"
            text-color="primary"
          />
          <span class="q-ml-sm">确定要删除这条记录吗？</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            flat
            label="取消"
            color="primary"
            v-close-popup
          />
          <q-btn
            flat
            label="确定删除"
            color="primary"
            v-close-popup
            @click="deleteRow(deleteID)"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- 对话框-添加 -->
    <q-dialog
      v-model="qDialog.addRow"
      persistent
    >
      <q-card style="width:400px">
        <q-card-section>
          <div class="q-pb-md text-h6">添加新分类</div>
          <q-separator />
        </q-card-section>
        <q-card-section class="row items-center">
          <q-form
            action="http://192.168.10.142:4391/ColumnList/AddColumnHandler.ashx"
            method="post"
            class="q-gutter-y-md full-width"
            @submit.prevent="addRow"
          >
            <q-select
              outlined
              dense
              v-model="form.model"
              :options="form.options"
              label="一级分类"
              name="Upid"
            />
            <q-input
              outlined
              v-model="form.columnName"
              label="请输入分类名称"
              name="Name"
            />
            <q-input
              outlined
              v-model="form.quickExplain"
              label="请输入快速介绍"
              name="Quick"
              :rules="[ val => val.length <= 10 || '最多输入10个字']"
            />
            <q-separator />
            <q-card-actions align="right">
              <q-btn
                flat
                label="取消"
                color="primary"
                v-close-popup
              />
              <q-btn
                flat
                label="添加"
                color="primary"
                v-close-popup
                type="submit"
              />
            </q-card-actions>

          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
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
      // ---------- 下拉框
      form: {
        model: null,
        options: [],
        columnName: '',
        quickExplain: '',
        submitURL: ''
      },
      // ---------- 表格
      // 默认$$Api参数
      defaultUpCategory: -1,
      defaultPageIndex: 1,
      // 初始化分页
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: this.$store.state.default.page,
        current: 1
        // rowsNumber: xx if getting data from a server
      },
      // 分割线模式可选值：horizontal (default)', 'vertical', 'cell', 'none'
      separator: 'horizontal',
      loading: true,
      // 可见列
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
      tableContentData: [],
      // ---------- 对话框
      qDialog: {
        delConfirm: false,
        addRow: false,
      },
      deleteID: 0,
      addRowResult: []
    }
  },
  methods: {
    getCategory(modelValue, currentPage) {
      const params = {
        pageIndex:currentPage,
        pageSize:this.initialPagination.rowsPerPage,
        upColumnID:this.defaultUpCategory
      }
      if (modelValue !== null) {
        params.upColumnID = modelValue.value
      }
      $$Api('ColumnList/GetColumnHandler.ashx', params).then (result => {
        this.tableContentData = result.data
        this.initialPagination.page = Math.ceil(result.count / this.initialPagination.rowsPerPage)
        console.log(this.initialPagination.page)
        // 生成序号
        this.tableContentData.forEach((row, index) => {
          row.index = index + 1
        })
        // 关闭加载动画
        this.loading = false
        console.log(this.tableContentData)
      }).catch (err => {
        console.log(err)
      })
    },
    getUpCategory() {
      $$Api('ColumnList/GetUpColumnForNews.ashx').then (result => {
        this.form.options = result
      }).catch (err => {
        console.log(err)
      })
    },
    getDeleteRow(value) {
      this.deleteID = value.ID
      this.qDialog.delConfirm = true
    },
    deleteRow(rowid) {
      // 删除脚本
      console.log(rowid)
    },
    addRow(evt) {
      const formData = new FormData(evt.target)
      console.log(formData)
      const newRowResult = []

      for (const [ name, value ] of formData.entries()) {
        newRowResult.push({
          name,
          value
        })
      }

      this.addRowResult = newRowResult
      console.log(this.addRowResult)
      // evt.target.submit()
    }
  },
  mounted() {
    this.getCategory(this.form.model, this.defaultPageIndex)
    this.getUpCategory()
  },
}
</script>
<style>
.q-pagination .q-btn__wrapper:before {
  box-shadow: none;
}
</style>
