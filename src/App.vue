<template>
<v-app>
  <v-navigation-drawer
      class="bg-deep-purple-lighten-5 "
      v-model="drawer"
      theme="dark">
    <v-list><v-list-item v-for="item in naviMenu" :key="item.title">
      <v-icon>{{item.icon}}</v-icon>
      <v-list-item-title>
        <router-link v-bind:to="item.path">{{item.title}}</router-link>
      </v-list-item-title>
    </v-list-item></v-list>
  </v-navigation-drawer>
  <v-app-bar id="header"
  class="bg-deep-purple-darken-2"
  light>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>{{title}}</v-toolbar-title>
  </v-app-bar>
    <v-main id="content">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <footer id="footer">
      <p>Nanoyou 项目组</p>
      <p>Copyright 2022</p>
    </footer>
</v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import naviMenu from "./ts/naviMenu";


export default defineComponent({
  name: 'App',
  data(){
    return{
      drawer: null,
      title:"欢迎",
      naviMenu: naviMenu
    }
  },
  methods:{
   // setTitle(index: number){
   //   this.title = this.menuList[index][1].toString();
   // }
  }
})

</script>
<style scoped>
</style>