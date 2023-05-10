<template>
  <div class="d-flex justify-between" style="flex-wrap: wrap">
    <div v-for="item in goods" :key="item.goodsId" class="goods-item">
      <div class="goods-img"><img :src="item.imgUrl" alt="" /></div>
      <div class="goods-info mt-xs">
        <div class="goods-name text-ellipsis-two">{{ item.name }}</div>
        <div class="goods-tags mt-xs">
          <span v-for="v in item.tags" :key="v">{{ v }}</span>
        </div>
        <div class="goods-promise mt-xs">
          <span v-for="v in item.promise" :key="v">{{ v }}</span>
        </div>
        <div class="goods-price mt-sm">
          <span class="text-red-c">
            补贴后<span class="fav-price">{{ thousandthSign(3334) }}万</span>
          </span>
          <span class="text-grey-7">
            ¥<span class="origin-price ml-xs">322万</span>
          </span>
        </div>
        <div class="text-grey-7 mt-sm">122人购买</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { thousandthSign } from "@/utils/index";
// 产品列表
const goods = ref([
  {
    goodsId: 1,
    imgUrl: "https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png",
    name: "全新劳力士日志型蓝盘41mm自动机械男士手表126334-0002",
    tags: ["自动机械表", "Rolex/劳力士"],
    promise: ["自营服务", "假一赔十"],
  },
  {
    goodsId: 2,
    imgUrl: "https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png",
    name: "全新劳力士日志型蓝盘41mm自动机械男士手表126334-0002",
    tags: ["自动机械表", "Rolex/劳力士"],
    promise: ["自营服务"],
  },
  {
    goodsId: 3,
    imgUrl: "https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png",
    name: "全新劳力士日志型蓝盘41mm自动机械男士手表126334-0002",
    tags: ["自动机械表", "Rolex/劳力士"],
    promise: ["假一赔十"],
  },
]);
</script>

<style lang="scss">
.goods-item {
  width: calc(50% - 4px);
  height: auto;
  border-radius: 4px;
  margin-bottom: 8px;
  background-color: #fff;
  position: relative;

  .goods-img {
    width: 100%;
    height: auto;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .goods-info {
    padding: 8px;

    .goods-name {
      font-size: 14px;
      font-weight: 500;
    }

    .goods-tags {
      font-size: 12px;
      color: #595959;

      span:first-child {
        margin-right: 4px;
      }
    }

    .goods-promise {
      span {
        display: inline-block;
        padding: 1px 6px;
        border-radius: 4px;
        font-size: 12px;
        border: 1px solid #f092aa;
        color: #eb0045;

        &:first-child {
          margin-right: 4px;
        }
      }
    }

    .fav-price {
      font-size: 16px;
    }

    .origin-price {
      text-decoration: line-through;
    }
  }
}
</style>
