import { requestApi } from 'boot/axios'

// 文章分类
export function getArticleCategoryApi (url, params) {
  return requestApi({
    url: 'HandlerForVUE/ColumnList/' + url,
    method: 'post',
    params
  })
}

// 文章管理
export function getArticleApi (url, params) {
  return requestApi({
    url: 'HandlerForVUE/NewsList/' + url,
    method: 'post',
    params
  })
}
