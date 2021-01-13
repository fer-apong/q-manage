import { Notify } from 'quasar'

export default {
  // 格式化form数据为对象格式的Json字符串
  formatFormData (evt) {
    const formData = new FormData(evt.target)
    const newRowData = []
    const formatFormData = {}

    for (const [name, value] of formData.entries()) {
      newRowData.push({
        name,
        value
      })
    }
    newRowData.forEach((item, index) => {
      formatFormData[item.name] = item.value
    })

    return formatFormData
    // 转换为Json字符串
    return JSON.stringify(formatFormData)
  },

  // notify全局定义
  notify (message, color) {
    Notify.create({
      message,
      color,
      position: 'center',
      timeout: 2000
    })
  }
}
