<template>
  <div class="app-wrapper">
    <!-- 左侧 -->
    <sidebar
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    ></sidebar>
    <!-- 顶部 -->
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部 navbar -->
        <navbar />
      </div>
      <!-- 内容区 -->
      <app-main></app-main>
    </div>
    <!-- 内容 -->
  </div>
</template>
<script setup>
import Navbar from '@/layout/components/Navbar'
import Sidebar from '@/layout/components/Sidebar'
import AppMain from '@/layout/components/AppMain'
import variables from '@/styles/variables.scss'
import {} from 'vue'

console.log(
  '%c 🍹 variables: ',
  'font-size:20px;background-color: #7F2B82;color:#fff;',
  variables
)
</script>
<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100px;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 0;
  width: calc(100% - #{$sideBarWidth});
}
</style>
