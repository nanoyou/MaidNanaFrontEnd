<template>
  <v-container>
    <v-row>
      <v-col>
        <v-avatar size="128" class="deep-purple accent-2--border">
          <img src="/img/maid-nana-logo.png"
               alt="Maid-Nana" width="128" height="128"/>
        </v-avatar>

      </v-col>
      <v-col class="align-center" style="padding-top:15%">
        <h2>主人，欢迎回来</h2>
        <h3>请问需要什么服务呢</h3>
        <hr />
      </v-col>
    </v-row>
    <v-row>
      <h4>
        <router-link to="/announcement">通知管理</router-link> | <a>模板管理</a> | <a>触发器设置</a> |
        <a>用户设置</a> | <router-link to="/about">关于俺们</router-link> | <a>退出系统</a>
      </h4>
    </v-row>

    <dashboard></dashboard>
  </v-container>

</template>

<script lang="ts">
import Dashboard from "../components/Dashboard.vue";
export default {
  name: "Home",
  components: {Dashboard}
}
</script>

<style scoped>
</style>