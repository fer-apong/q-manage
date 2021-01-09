export default {
  // 格式化form数据为对象
  formatFormData (rawData, processedData) {
    for (const [name, value] of rawData.entries()) {
      processedData.push({
        name,
        value
      })
    }
    const addRowResult = {}
    processedData.forEach((item, index) => {
      addRowResult[item.name] = item.value
    })
    return addRowResult
  }
}
