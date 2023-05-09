<template>
  <div class="home">
    <header
      class="header w-100 d-flex justify-between"
      :class="{ isScroll: isScroll }"
    >
      <div>页面顶部部分</div>
    </header>
    <nav-bar></nav-bar>
    <div style="height: 800px"></div>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted } from "vue";
import navBar from "@/components/NavBar.vue";
// 是否发生滚动
const isScroll = ref(false);

// 滚动事件
const handleScroll = () => {
  let scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  scrollTop > 100 ? (isScroll.value = true) : (isScroll.value = false);
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
  line-height: 50px;
  padding: 0 15px;
  font-size: 15px;
  z-index: 10000;
  &.isScroll {
    color: #fff;
    background-color: #178ce6;
  }
}
</style>
