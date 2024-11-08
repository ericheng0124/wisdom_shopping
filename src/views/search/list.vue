<template>
  <div class="search">
    <van-nav-bar fixed title="商品列表" left-arrow @click-left="$router.go(-1)" />

    <van-search
      readonly
      shape="round"
      background="#ffffff"
      :value="querySearch || '搜索商品'"
      show-action
      @click="$router.push('/search')"
    >
      <template #action>
        <van-icon class="tool" name="apps-o" />
      </template>
    </van-search>

    <!-- 排序选项按钮 -->
    <div class="sort-btns">
      <div class="sort-item" @click="sortSearch('all')">
        综合
      </div>
      <div class="sort-item" @click="sortSearch('sales')">
        销量
      </div>
      <div class="sort-item" @click="sortSearch('price',togglePrice?'-1':'0')">
        价格
        <div class="sort-type">
          <van-icon name="arrow-up" size="10" :color="togglePrice?'red':'black'"/>
          <van-icon name="arrow-down" size="10" :color="togglePrice?'black':'red'"/>
        </div>
      </div>
    </div>

    <div class="goods-list">
      <GoodsItem v-for="item in proList" :key="item.goods_id" :goodsItem="item"></GoodsItem>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem.vue'
import { getPorList } from '@/api/product'
export default {
  name: 'SearchIndex',
  components: {
    GoodsItem
  },
  data () {
    return {
      proList: [],
      page: '1',
      togglePrice: true
    }
  },
  computed: {
    querySearch () {
      return this.$route.query.search
    }
  },
  async created () {
    const { data: { list } } = await getPorList({
      categoryId: this.$route.query.categoryId,
      goodsName: this.querySearch,
      page: this.page
    })
    // console.log(res)
    this.proList = list.data
  },
  methods: {
    // 按条件查询商品
    async sortSearch (Searchtype, sortPrice = 0) {
      const { data: { list } } = await getPorList({
        sortType: Searchtype,
        sortPrice,
        goodsName: this.querySearch,
        page: this.page
      })
      this.proList = list.data
      this.togglePrice = !this.togglePrice
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  padding-top: 46px;
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .tool {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }

  .sort-btns {
    display: flex;
    height: 36px;
    line-height: 36px;
    .sort-item {
      text-align: center;
      flex: 1;
      font-size: 16px;
      display: flex;
      justify-content: center;
      .sort-type{
        display: flex;
        flex-direction: column;
        height: 20px;
        margin-top: 8px;
        margin-left: 2px;
        .van-icon{
          flex: 1;
          height: 10px;
          line-height: 10px;
        }
      }
    }
  }
}

// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>
