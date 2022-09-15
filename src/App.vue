<template>
<v-app>
  <v-navigation-drawer
      app
      class="bg-deep-purple-lighten-5"
      v-model="drawer"
    >
    <v-list>
      <v-list-item>
          <v-list-item-title class="title">
            <span class="font-weight-bold">"NanaWatch"</span>
          </v-list-item-title>
          <v-avatar size="64">
            <img src="/img/maid-nana-logo.png" width="64" height="64" />
          </v-avatar>
          <v-list-item-subtitle>Maid Nana可视化后台系统</v-list-item-subtitle>
      </v-list-item>
      <v-divider></v-divider>

      <v-list v-for="item in naviMenu" :key="item.title">
        <template v-if="!item.subItems" >
          <v-list-item :to="item.path">
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </template>
        <template v-else>
          <v-list-group :value="item.title">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props">
                <v-list-item-title>{{item.title}}</v-list-item-title>
              </v-list-item>
            </template>
              <v-list-item
                  v-for="sub in item.subItems"
                  :key="sub.title" :to="sub.path">
                {{sub.title}}
              </v-list-item>
          </v-list-group>
        </template>
      </v-list>

    </v-list>

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
      <p>"NanaWatch" V0.0.0  Maid Nana可视化后台系统</p>
      <p>使用Vue.js 3构建</p>
      <p>Copyright© Nanoyou 项目组 2022</p>
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