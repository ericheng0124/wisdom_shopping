// 商品分类相关的请求

import request from '@/utils/request'

export const getCategoryData = () => {
  return request.get('/category/list')
}
