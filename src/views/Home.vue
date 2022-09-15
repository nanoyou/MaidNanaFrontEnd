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

      </v-col>
    </v-row>
    <v-row><v-col>
      <hr />
      <h4>
        <router-link to="/announcement">公告管理</router-link> |
        <router-link to="/announcement/template">模板管理</router-link> |
        <router-link to="/config">用户设置</router-link> |
        <router-link to="/about">关于俺们</router-link> |
        <router-link to="/logout">退出系统</router-link>
      </h4>
    </v-col>
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