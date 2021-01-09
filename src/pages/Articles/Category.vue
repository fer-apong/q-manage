<template>
  <q-card-section>
    <p class="text-grey-6">页面示例的为：简单表格的弹出层编辑内容。</p>
    <q-table
      :data="table.tableContentData"
      :columns="table.columns"
      :visibleColumns="table.visibleColumns"
      row-key="index"
      :loading="table.loading"
      flat
      bordered
      :pagination.sync="table.initialPagination"
      @request="requestCategory"
      rows-per-page-label="每页显示"
      :separator="table.separator"
      :selected-rows-label="selectedRowMessage"
      selection="multiple"
      :selected.sync="table.selected"
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
            @input="getCategory(form.model, table.defaultPageIndex)"
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
              @click="getSelectedRows"
            />
            <q-btn
              color="primary"
              icon="mdi-table-row-plus-after"
              label="添加"
              size="md"
              @click="dialog.addRow = true"
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
              @click="getEditRow(props.row)"
            />
          </q-btn-group>
        </q-td>
      </template>
      <template v-slot:pagination="scope">
        <q-pagination
          v-model="table.initialPagination.current"
          :max="table.initialPagination.page"
          :boundary-links="true"
          @click="getCategory(form.model, table.initialPagination.current)"
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
    <q-dialog v-model="dialog.delConfirm">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar
            icon="mdi-alert-circle-outline"
            text-color="primary"
          />
          <span class="q-ml-sm">确定要删除所选记录吗？</span>
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
            @click="deleteRows(deleteID)"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- 对话框-编辑 -->
    <q-dialog
      v-model="dialog.editConfirm"
      persistent
    >
      <q-card style="width:400px">
        <q-card-section>
          <div class="q-pb-md text-h6">编辑分类</div>
          <q-separator />
        </q-card-section>
        <q-card-section class="row items-center">
          <q-form
            class="q-gutter-y-md full-width"
            @submit.prevent.stop="editRow"
          >
            <q-select
              outlined
              dense
              v-model="dialog.form.model"
              :options="dialog.form.options"
              :display-value="dialog.form.parentName"
              label="一级分类"
              name="Upid"
            />
            <q-input
              hide-bottom-space
              outlined
              v-model="dialog.form.columnName"
              label="请输入分类名称"
              name="Name"
              :rules="[val => !!val || '此项不能为空']"
            />
            <q-input
              hide-bottom-space
              outlined
              v-model="dialog.form.quickExplain"
              label="请输入快速介绍"
              name="Quick"
              :rules="[ val => val.length <= 10 || '最多输入10个字', val => !!val || '此项不能为空']"
            />
            <q-input
              hide-bottom-space
              outlined
              v-model="dialog.form.id"
              label="ID"
              name="ID"
              class="hidden"
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
                label="保存"
                color="primary"
                v-close-popup
                type="submit"
              />
            </q-card-actions>

          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
    <!-- 对话框-添加 -->
    <q-dialog
      v-model="dialog.addRow"
      persistent
    >
      <q-card style="width:400px">
        <q-card-section>
          <div class="q-pb-md text-h6">添加新分类</div>
          <q-separator />
        </q-card-section>
        <q-card-section class="row items-center">
          <q-form
            class="q-gutter-y-md full-width"
            @submit.prevent.stop="addRow"
          >
            <q-select
              outlined
              dense
              v-model="dialog.form.model"
              :options="dialog.form.options"
              label="一级分类"
              name="Upid"
            />
            <q-input
              hide-bottom-space
              outlined
              v-model="dialog.form.columnName"
              label="请输入分类名称"
              name="Name"
              :rules="[val => !!val || '此项不能为空']"
            />
            <q-input
              hide-bottom-space
              outlined
              v-model="dialog.form.quickExplain"
              label="请输入快速介绍"
              name="Quick"
              :rules="[ val => val.length <= 10 || '最多输入10个字', val => !!val || '此项不能为空']"
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
        quickExplain: ''
      },
      // ---------- 表格
      table: {
        // 默认$$Api参数
        defaultUpCategory: -1,
        defaultPageIndex: 1,
        // 初始化分页
        initialPagination: {
          sortBy: 'desc',
          descending: false,
          page: 1,
          // rowsPerPage: this.$store.state.default.page,
          rowsPerPage: 3,
          current: 1,
          rowsNumber: 0 //if getting data from a server
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
        selected: []
      },
      // ---------- 对话框
      dialog: {
        delConfirm: false,
        editConfirm: false,
        editData:{},
        addRow: false,
        form: {
          model: null,
          options: [],
          parentName: '',
          id: '',
          columnName: '',
          quickExplain: ''
      },
      },
      deleteID: [],
      addRowResult: {},
      editRowResult: {}
    }
  },
  methods: {
    getCategory(modelValue, currentPage) {
      const params = {
        pageIndex:currentPage,
        pageSize:this.table.initialPagination.rowsPerPage,
        upColumnID:this.table.defaultUpCategory
      }
      if (modelValue !== null) {
        params.upColumnID = modelValue.value
      }
      $$Api('ColumnList/GetColumnHandler.ashx', params).then (result => {
        this.table.tableContentData = result.data
        this.table.initialPagination.rowsNumber = result.count
        this.table.initialPagination.page = Math.ceil(this.table.initialPagination.rowsNumber / this.table.initialPagination.rowsPerPage)
        // 生成序号
        this.table.tableContentData.forEach((row, index) => {
          row.index = index + 1
        })
        // 关闭加载动画
        this.table.loading = false
      }).catch (err => {
        console.log(err)
      })
    },
    // 动态分页(下拉选择每页显示条数)
    requestCategory(props) {
      const { rowsNumber, rowsPerPage } = props.pagination

      if ( rowsPerPage === 0 ) {
        this.table.initialPagination.rowsPerPage = rowsNumber
      } else {
        this.table.initialPagination.rowsPerPage = rowsPerPage
      }

      this.table.initialPagination.current = 1
      this.getCategory(this.form.model, this.table.initialPagination.current)
    },
    // 获取分类过滤数据
    getUpCategory() {
      $$Api('ColumnList/GetUpColumnForNews.ashx').then (result => {
        this.form.options = result
        this.dialog.form.options = result
      }).catch (err => {
        console.log(err)
      })
    },
    // 显示多条选择行数量信息
    selectedRowMessage() {
      return this.table.selected.length === 0 ? '' : `选择了全部${this.table.tableContentData.length}条记录中的${this.table.selected.length} 条`
    },
    // 获取多条选择行ID值数组
    getSelectedRows() {
      this.table.selected.map((row) => {
        this.deleteID.push( row.ID)
      })
      if (this.table.selected.length > 0) {
        this.dialog.delConfirm = true
      } else {
        this.$q.notify({
          message: '请选择要删除的记录',
          position: 'center',
          color: 'red-10'
        })
      }
    },
    // 获取单条删除的row信息
    getDeleteRow(value) {
      this.deleteID.push(value.ID)
      this.dialog.delConfirm = true
    },
    // 提交服务器并删除本地预存信息
    deleteRows(rowid) {
      // 删除脚本
      const params = {
        id: rowid
      }
      $$Api('ColumnList/DeleteColumnHandler.ashx', params).then (result => {
         if ( result === 'success') {
          //  重新请求数据列表
           this.getCategory(this.form.model, this.table.defaultPageIndex)
         } else if ( result === 'Database Error' ) {
           this.$q.notify({
            message: '数据库操作错误，请联系管理员',
            position: 'center',
            color: 'red-10'
          })
         }
      }).catch (err => {
        console.log(err)
      })
      // 删除本地数组中的数据
      // rowid.forEach(item => {
      //   this.table.tableContentData.forEach((row, index) => {
      //     if (row.ID === item) {
      //       this.table.tableContentData.splice(index === 0 ? index : index-1, 1)
      //     }
      //   })
      // })
      this.deleteID = []
      this.table.selected = []
    },
    // 获得编辑的行数据
    getEditRow(value) {
      this.dialog.editConfirm = true
      this.dialog.form.model = value.UpLevelID
      this.dialog.form.columnName = value.ColumnName
      this.dialog.form.quickExplain = value.QuickExplain
      this.dialog.form.parentName = value.ParentName
      this.dialog.form.id = value.ID

    },
    // 提交编辑数据
    editRow (evt) {
      const formData = new FormData(evt.target)
      const newRowResult = []

      this.editRowResult = this.$utils.formatFormData(formData, newRowResult)
      
      $$Api('ColumnList/UpdateColumnHandler.ashx', this.editRowResult).then (result => {
         if ( result === 'success') {
          //  重新请求数据列表
           this.getCategory(this.form.model, this.table.defaultPageIndex)
         } else if ( result === 'error' ) {
           this.$q.notify({
            message: '数据库操作错误，请联系管理员',
            position: 'center',
            color: 'red-10'
          })
         } else if ( result === 'exist' ) {
           this.$q.notify({
            message: '该分类已存在，请更换分类名称',
            position: 'center',
            color: 'red-10'
          })
         }
      }).catch (err => {
        console.log(err)
      })
    },
    // 添加新行
    addRow(evt) {
      const formData = new FormData(evt.target)
      const newRowResult = []

      this.addRowResult = this.$utils.formatFormData(formData, newRowResult)
      console.log(this.addRowResult)
      
      $$Api('ColumnList/AddColumnHandler.ashx', this.addRowResult).then (result => {
        if ( result === 'success') {
        //  重新请求数据列表
          this.getCategory(this.form.model, this.table.defaultPageIndex)
        } else if ( result === 'error' ) {
          this.$q.notify({
          message: '数据库操作错误，请联系管理员',
          position: 'center',
          color: 'red-10'
        })
        } else if ( result === 'exist' ) {
          this.$q.notify({
          message: '该分类已存在，请更换分类名称',
          position: 'center',
          color: 'red-10'
        })
        }

        this.dialog.form.model = null
        this.dialog.form.columnName = ''
        this.dialog.form.quickExplain = ''
      }).catch (err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getCategory(this.form.model, this.table.defaultPageIndex)
    this.getUpCategory()
    console.log(this.$route)
    console.log(this.$route.matched)
  },
}
</script>
<style>
.q-pagination .q-btn__wrapper:before {
  box-shadow: none;
}
</style>
