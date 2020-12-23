import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

// 数据接口API

export function requestApi (config) {
  // 创建实例
  const api = axios.create({
    baseURL: 'http://192.168.10.142:4391/',
    timeout: 5000,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })

  api.interceptors.request.use(config => {
    console.log(config)
    return config
  }, err => {
    console.log(err)
  })

  api.interceptors.response.use(result => {
    // console.log(result.data)
    return result.data
  }, err => {
    console.log(err)
  })

  return api(config)
}
