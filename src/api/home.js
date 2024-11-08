// 用于存放首页相关的请求
import request from '@/utils/request'

export const getHomeData = () => {
  return request.get('/page/detail', {
    params: {
      pageId: 0
    }
  })
}
