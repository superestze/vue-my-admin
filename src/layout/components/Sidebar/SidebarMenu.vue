<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :uniqueOpened="true"
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
  </el-menu>
</template>
<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'

const router = useRouter()

const routes = computed(() => {
  const fRoutes = filterRouters(router.getRoutes())
  console.log(
    '%c 🍨 fRoutes: ',
    'font-size:20px;background-color: #ED9EC7;color:#fff;',
    fRoutes
  )
  return generateMenus(fRoutes)
})
console.log(
  '%c 🍛 routes: ',
  'font-size:20px;background-color: #FCA650;color:#fff;',
  routes.value
)
</script>

<style lang="scss" scoped></style>
