import { requestApi } from 'boot/axios'

// 文章管理数据
export function getArticleApi (url, params) {
  return requestApi({
    url: 'HandlerForVUE/NewsList/' + url,
    method: 'post',
    params
  })
}
