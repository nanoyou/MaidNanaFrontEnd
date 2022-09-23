<template>
  <v-app>
    <v-navigation-drawer
        app
        class="bg-deep-purple-lighten-5"
        v-model="drawer"
    >
      <!-- 我知道你很急但你先别急，往后菜单栏上会加上图标 -->
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

        <v-list v-for="item in naviMenu" :key="item.title" class="text-left">
          <template v-if="itemVisible(item.role,user.role) && !item.subItems" >
            <v-list-item :to="item.path">
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
          </template>
          <template v-if="itemVisible(item.role,user.role) && item.subItems">
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
            <v-divider></v-divider>
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

      <footer id="footer">
        <p>"NanaWatch"——Maid Nana可视化后台系统</p>
        <p>V{{ Package.version }}</p>
        <p>Nanoyou 项目组 2022</p>
      </footer>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Package from '../../package.json'
import naviMenu from '../ts/naviMenu'
import {ref} from "vue";
import {useUserStore} from '../ts/storage'

const drawer = ref(true)
const title = ref('欢迎')

const user = useUserStore()


function itemVisible(itemRole: string, userRole: string) {
  return (import.meta.env.DEV ||!itemRole || itemRole == userRole)
}


</script>

<style scoped>

</style>