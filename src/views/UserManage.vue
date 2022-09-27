<template>
  <v-container>
    <v-card class="bg-indigo-lighten-3" style="width:auto">
      <v-row style="align-items: center">
        <v-col><v-card-title>用户管理</v-card-title></v-col>
        <v-col>
          <v-text-field></v-text-field>
        </v-col>
        <v-col><v-btn>搜索</v-btn></v-col>
        <v-col>
          <v-btn class="float-right text-white" color="green">新增</v-btn>
        </v-col>
      </v-row>
      <v-table :search="search">
        <thead class="bg-indigo-lighten-4 text-center">
        <tr class="text-center">
          <th class="text-center">ID</th>
          <th class="text-center">用户名</th>
          <th class="text-center">QQ</th>
          <th class="text-center">权限</th>
          <th class="text-center">操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in userList" :key="user.uuid">
          <td>{{ user.uuid }}</td>
          <td><v-row>
            <v-col><v-avatar size="32">头像</v-avatar></v-col>
            <v-col>{{ user.name}}</v-col>
          </v-row>
          </td>
          <td>{{user.qq}}</td>
          <td><template v-for="role in user.roles" :key="role">
            <v-chip :color="roleColor(role)">{{roleName(role)}}</v-chip>
          </template>
          </td>
          <td style="margin-top: 2%;">
            <v-btn dark color="blue-darken-2" @click="dialogDisplay(true,null)">编辑</v-btn>
            <v-btn color="error">删除</v-btn></td></tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>

  <v-dialog v-model="dialogShow"><v-container class="bg-white" style="width: auto;min-width: 500px;">
    <v-row>
      <v-col id="head" class="text-center">
        <h2>[操作]用户</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col id="text-fields">
        <v-row>
          <v-col>ID</v-col>
          <v-col>[uid]</v-col>
        </v-row>
        <v-row>
          <v-col>用户名</v-col>
          <v-col><v-text-field></v-text-field></v-col>
        </v-row>
        <v-row>
          <v-col>密码</v-col>
          <v-col>点击修改</v-col>
        </v-row>
        <v-row>
          <v-col>权限</v-col>
          <v-col>[roleComponents]</v-col>
        </v-row>
      </v-col>
      <v-col id="avatar" class="text-center">
        <v-row><v-col>
          <v-avatar class="bg-blue-grey-darken-2">
            用户头像
          </v-avatar>
        </v-col></v-row>
        <v-row>
          <v-col>QQ</v-col>
          <v-col>[QQ]</v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col><v-btn class="bg-blue-darken-1" dark>保存</v-btn></v-col>
      <v-col><v-btn class="error" @click="dialogDisplay(false,null)">取消</v-btn></v-col>
    </v-row>
    </v-container></v-dialog>
</template>

<script setup lang="ts">
import {ref} from "vue";

const dialogShow = ref(false)
const search = ref("search")

const userList = ref([
  {
    uuid:1,
    name:"张可莉",
    qq:1145141919,
    roles:["super","announcement"]
  }
])
const current = ref(-1)

function roleName(role: string){
  switch (role){
    case "super":
      return "超管";
    case "announcement":
      return "公告"
  }
}
function roleColor(role:string){
  switch (role){
    case "super":
      return "red-darken-1";
    case "announcement":
      return "blue-darken-1"
  }
}
function dialogDisplay(status: boolean,user:number){
  dialogShow.value = status
  if(status){
    current.value = user

  }
}
</script>

<style scoped>

</style>