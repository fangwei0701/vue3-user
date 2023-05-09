<template>
  <router-view></router-view>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter, RouterView } from "vue-router";
// 路由信息
const router = useRouter();
// 动画名称
const state = reactive({
  transitionName: "slide-left",
});

router.beforeEach((to, from) => {
  if (to.meta.pageIndex > from.meta.pageIndex) {
    state.transitionName = "slide-left";
  } else if (to.meta.pageIndex < from.meta.pageIndex) {
    state.transitionName = "slide-right";
  } else {
    state.transitionName = "";
  }
});
</script>
