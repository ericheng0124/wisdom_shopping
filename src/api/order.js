import request from '@/utils/request'

// 订单相关api

// 订单结算接口
// mode:cart => obj { cartIds }
// mode:buyNow => obj { goodsId, goodsNum, goodsSkuId }
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode, // buyNow立即购买 cart购物车
      delivery: 10, // 10快递配送 20上门自提
      couponId: 0, // 自提门店ID
      isUsePoints: 0, // 是否使用积分抵扣（1使用 0不使用）
      ...obj
    }
  })
}

// 提交订单
// mode:cart => obj { cartIds，remark }
// mode:buyNow => obj { goodsId, goodsNum, goodsSkuId，remark }
export const submitOrder = (mode, obj) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 10, // 取货方式默认为->物流方式:10  门店自提：20
    couponId: 0, // 优惠券ID 传0 不使用优惠券
    isUsePoints: 0, // 积分 传0 不使用积分
    payType: 10, // 余额支付
    ...obj
  })
}

// 获取订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}

// 取消订单
export const delMyOrder = (orderId) => {
  return request.post('/order/cancel', {
    orderId
  })
}
