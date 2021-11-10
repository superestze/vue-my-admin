<template>
  <div class="">
    <div class="login-container">
      <el-avatar
        size="44"
        shape="square"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
      ></el-avatar>
      <!-- <h1 class="logo-title" v-if="$store.getters.sidebarOpened"></h1> -->
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>
<script setup>
import SidebarMenu from '@/layout/components/Sidebar/SidebarMenu'
import {} from 'vue'
</script>
<style lang="scss" scoped></style>
