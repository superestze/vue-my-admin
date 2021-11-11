<template>
  <div @click="onToggle">
    <svg-icon
      :icon="isFullScreen ? 'exit-fullscreen' : 'fullscreen'"
    ></svg-icon>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import screenfull from 'screenfull'

const isFullScreen = ref(false)

const onToggle = () => {
  screenfull.toggle()
}

const change = () => {
  isFullScreen.value = screenfull.isFullscreen
}

onMounted(() => {
  screenfull.on('change', change)
})

onUnmounted(() => {
  screenfull.off('change', change)
})
</script>
<style lang="scss" scoped></style>
