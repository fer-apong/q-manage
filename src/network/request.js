import { requestApi } from 'boot/axios'


// 
export function $$Api (url, params) {
  return requestApi({
    url,
    method: 'post',
    params
  })
}
