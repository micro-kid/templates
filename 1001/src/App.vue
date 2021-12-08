<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
console.log(router.currentRoute.value)
</script>
<template>
  <router-view />
</template>
<style>
#app {
  height: 100%;
}
</style>
