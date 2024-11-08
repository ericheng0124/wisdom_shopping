<template>
  <div v-if="goodsItem.goods_id" class="goods-item" @click="$router.push(`/prodetail/${goodsItem.goods_id}`)">
    <div class="left">
      <img :src="goodsItem.goods_image" alt="" />
    </div>
    <div class="right">
      <p class="tit text-ellipsis-2">
        <!-- 三星手机 SAMSUNG Galaxy S23 8GB+256GB 超视觉夜拍系统 超清夜景 悠雾紫
        5G手机 游戏拍照旗舰机s23 -->
        {{goodsItem.goods_name}}
      </p>
      <p class="count">已售{{goodsItem.goods_sales}}件</p>
      <p class="price">
        <span class="new">¥{{goodsItem.goods_price_max}}</span>
        <span class="old">¥{{goodsItem.line_price_max}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    goodsItem: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.goods-item {
  height: 148px;
  margin-bottom: 6px;
  padding: 10px;
  background-color: #fff;
  display: flex;
  .left {
    width: 127px;
    img {
      display: block;
      width: 100%;
    }
  }
  .right {
    flex: 1;
    font-size: 14px;
    line-height: 1.3;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .count {
      color: #999;
      font-size: 12px;
    }
    .price {
      color: #999;
      font-size: 16px;
      .new {
        color: #f03c3c;
        margin-right: 10px;
      }
      .old {
        text-decoration: line-through;
        font-size: 12px;
      }
    }
  }
}
</style>
