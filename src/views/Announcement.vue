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
        <td>{{ item.alias }}</td><td>{{ item.trigger }}</td>
      <td style="margin-top: 2%;">
        <v-btn dark color="blue-darken-2">编辑</v-btn>
        <v-btn color="error">删除</v-btn></td></tr>
      </tbody>
    </v-table>
    </v-card>

</template>

<script lang="ts">
export default {
  name: "announcement",
  data(){
    return{
      announcements:[
        {
          uuid:'0d2cc79d-17eb-4790-b5e9-37c499dd2fc9',
          alias:'雷普数学',
          triggers:[],
          groups:['114514'],
          body:{
            uuid:'db41d0e7-7a29-4d8b-a04c-90210fcf49c0',
            content:'哈密瓜丝来哈密瓜，哈密瓜丝伊格里纳米',
          }
        },{
          uuid:'0d2cc79d-17eb-4790-b5e9-37c499dd2fc9',
          alias:'野兽诗歌',
          trigger:[],
          groups:['1919810'],
          body:{
            uuid:'db41d0e7-7a29-4d8b-a04c-90210fcf49c0',
            content:'逸一时，误一世',
          }
        }
      ]
    }
  }
}
</script>
<style scoped>
</style>