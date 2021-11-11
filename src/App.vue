<template>
  <router-view></router-view>
</template>

<script setup>
import { useStore } from 'vuex'
import { getOriginalStyle, writeNewStye } from '@/utils/theme'
const store = useStore()

getOriginalStyle(store.getters.mainColor).then((newStyle) => {
  writeNewStye(newStyle)
})
</script>

<style></style>
