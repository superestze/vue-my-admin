<template>
  <el-dropdown
    v-bind="$attrs"
    trigger="click"
    class="theme"
    @command="handleSetTheme"
  >
    <!-- 图标 -->
    <div>
      <el-tooltip effect="dark" :content="$t('msg.navBar.themeChange')">
        <svg-icon icon="change-theme"></svg-icon>
      </el-tooltip>
    </div>
    <!-- menu -->
    <template #dropdown>
      <el-dropdown-item command="color">
        {{ $t('msg.theme.themeColorChange') }}
      </el-dropdown-item>
    </template>
  </el-dropdown>
  <div>
    <select-color v-model="selectColorVisible"></select-color>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import SelectColor from './components/SelectColor.vue'

const selectColorVisible = ref(false)
const handleSetTheme = (command) => {
  selectColorVisible.value = true
}
</script>
<style lang="scss" scoped></style>
