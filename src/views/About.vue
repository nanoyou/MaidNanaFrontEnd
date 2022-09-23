<template>
  <h1>Nanoyou项目组</h1>
  <p>就是开发Maid Nana的项目组啊喂</p>
  <p>小女仆请安~</p>

  <h2>"NanaWatch"<br/></h2><h3>Maid Nana可视化后台系统 V{{Package.version}}</h3>

  <h3>Go Version: {{debugInfo.goVersion}}</h3>
  <a href="https://github.com/nanoyou" target="_blank">
    <img src="https://github.com/fluidicon.png" alt="Github" width="64" height="64">
  </a>
  <br/>
  <router-link to="/">&lt;&lt;返回主页</router-link>
</template>

<script setup lang="ts">
import Package from '../../package.json'
import {useDebugInfoStore} from "../ts/storage";

const debugInfo = useDebugInfoStore()


</script>

<style scoped>

</style>