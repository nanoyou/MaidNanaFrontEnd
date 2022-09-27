<template>
    <v-card class="bg-indigo-lighten-3" width="600px">
      <v-row>
        <v-col><v-card-title style="padding-left: 1%">公告管理</v-card-title></v-col>
        <v-col style="padding-top: 3%;padding-right: 5%">
          <v-btn class="float-right text-white" color="green">新增</v-btn>
        </v-col>
      </v-row>
    <v-table>
      <thead class="bg-indigo-lighten-4 text-center">
      <tr class="text-center">
        <th class="text-center">名称</th>
        <th class="text-center">触发器</th>
        <th class="text-center">操作</th></tr>
      </thead>
      <tbody>
      <tr v-for="item in announcements" :key="item.uuid">
        <td>{{ item.alias }}</td><td>{{ item.triggers }}</td>
      <td style="margin-top: 2%;">
        <v-btn dark color="blue-darken-2">编辑</v-btn>
        <v-btn color="error">删除</v-btn></td></tr>
      </tbody>
    </v-table>
    </v-card>

</template>

<script setup lang="ts">
import {ref} from "vue";

const announcements = ref([
  {
    uuid:1,
    alias:"计算机组成原理",
    triggers:[],
    memo:"芝士计算机组成原理"
  },{
    uuid:2,
    alias:"马克思主义基本原理",
    triggers:[]
  },{
    uuid:3,
    alias:"软件需求设计与分析",
    triggers: []
  },{
    uuid:4,
    alias: "概率论与数理统计",
    triggers: []
  }
])
</script>
<style scoped>
</style>