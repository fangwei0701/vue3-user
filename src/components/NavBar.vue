<template>
  <div class="nav-bar van-hairline--top">
    <ul class="d-flex">
      <router-link class="nav-item active" to="home">
        <i><van-icon name="wap-home-o" /></i>
        <span class="nav-title mt-xs norem">首页</span>
      </router-link>
      <router-link class="nav-item" to="attention">
        <i><van-icon name="friends-o" /></i>
        <span class="nav-title mt-xs norem">关注</span>
      </router-link>
      <router-link class="nav-item" to="message">
        <i><van-icon name="chat-o" /></i>
        <span class="nav-title mt-xs norem">消息</span>
      </router-link>
      <router-link class="nav-item" to="user">
        <i><van-icon name="user-circle-o" /></i>
        <span class="nav-title mt-xs">我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 6px 0;
  z-index: 1000;
  background: #fff;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}
.nav-item {
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
  color: #595959;
  &.router-link-active {
    color: #178ce6;
  }
  i {
    text-align: center;
    font-size: 22px;
  }
  .nav-title {
    font-size: 12px;
  }
}
</style>
