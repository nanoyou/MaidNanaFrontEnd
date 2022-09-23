<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
const toPage=(url:string)=>{
  router.push(url)
}
</script>
<style scoped>
</style>