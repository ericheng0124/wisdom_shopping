<template>
  <div class="order">
    <van-nav-bar title="我的订单" left-arrow @click-left="$router.go(-1)" />
    <van-tabs v-model="active" sticky>
    <van-tab name="all" title="全部"></van-tab>
    <van-tab name="payment" title="待支付"></van-tab>
    <van-tab name="delivery" title="待发货"></van-tab>
    <van-tab name="received" title="待收货"></van-tab>
    <van-tab name="comment" title="待评价"></van-tab>
  </van-tabs>

    <OrderListItem v-for="item in list" :key="item.order_id" :item="item" @orderCancelled="refreshOrderList"></OrderListItem>
  </div>
</template>

<script>
import OrderListItem from '@/components/OrderListItem.vue'
import { getMyOrderList } from '@/api/order'
export default {
  name: 'MyOrder',
  components: {
    OrderListItem
  },
  data () {
    return {
      active: this.$route.query.dataType || 'all',
      page: 1,
      list: []
    }
  },
  methods: {
    async getOrderList () {
      const { data: { list } } = await getMyOrderList(this.active, this.page)
      list.data.forEach((item) => {
        item.total_num = 0
        item.goods.forEach(goods => {
          item.total_num += goods.total_num
        })
      })
      this.list = list.data
      // console.log(list)
    },
    refreshOrderList () {
      // 在子组件触发取消订单后调用该方法刷新订单列表
      this.getOrderList()
    }
  },
  watch: {
    active: {
      immediate: true,
      handler () {
        this.getOrderList()
      }
    }
  }
}
</script>
<style>
</style>
