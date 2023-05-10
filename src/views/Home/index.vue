<template>
  <div class="home">
    <header class="header w-100 d-flex" :class="{ isScroll: isScroll }">
      <div class="search w-100 d-flex items-center justify-between">
        <div class="d-flex items-center justify-between">
          <van-icon
            name="search"
            size="20"
            color="#ee0a24"
            class="ml-md mr-sm"
          />
          <van-swipe
            vertical
            class="notice-swipe"
            :autoplay="3000"
            :touchable="false"
            :show-indicators="false"
          >
            <van-swipe-item v-for="v in news" :key="v">{{ v }}</van-swipe-item>
          </van-swipe>
        </div>
        <span class="s-text">搜索</span>
      </div>
    </header>
    <div style="height: 70px"></div>
    <van-tabs v-model:active="curTab" shrink @change="handleTabChange">
      <van-tab title="精选" name="a"></van-tab>
      <van-tab title="竞拍中" name="c"></van-tab>
      <van-tab title="待开拍" name="b"></van-tab>
    </van-tabs>
    <section class="px-sm py-sm" style="margin-bottom: 56px">
      <div v-if="curTab === 'a'"><goods-card></goods-card></div>
      <div v-if="curTab === 'b'"><goods-card></goods-card></div>
      <div v-if="curTab === 'c'"><goods-card></goods-card></div>
    </section>
    <nav-bar></nav-bar>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted } from "vue";
import navBar from "@/components/NavBar.vue";
import goodsCard from "@/components/GoodsCard.vue";
// 是否发生滚动
const isScroll = ref(false);
// 当前激活tab
const curTab = ref("a");
// 消息提示
const news = ref(["明月直入", "今人不见古时月"]);

// 切换tab
const handleTabChange = (name: string) => {
  console.log(name);
};

// 滚动事件
const handleScroll = () => {
  let scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  scrollTop > 70 ? (isScroll.value = true) : (isScroll.value = false);
};

nextTick(() => {
  document.body.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  document.body.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  font-size: 14px;
  z-index: 10000;
  padding: 16px;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #f1f1f1;
}
.search {
  height: 30px;
  border-radius: 15px;
  border: 1px solid #eb0045;
  background-color: #fff;

  .notice-swipe {
    height: 20px;
    line-height: 20px;
  }
  .s-text {
    margin-right: 4px;
    margin: 0px 4px 0px 8px;
    display: inline-block;
    height: 20px;
    border-radius: 10px;
    padding: 0px 10px;
    font-size: 14px;
    color: #eb0045;
    background-color: #fde6ec;
  }
}

section {
  background-color: #f1f1f1;
}
</style>
