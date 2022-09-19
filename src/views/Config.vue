<template>
  <v-card id="card" >
    <v-card-title class="text-left">用户设置</v-card-title>
    <v-row>
      <v-col>
      <v-container class="text-left" style="margin-left: 15px">
        <p>UID：{{user.id}}</p>
        <p>用户名：{{user.name}}</p>
        <p>QQ：{{user.qq}}</p>
        <p>权限：{{user.role}}</p>
      </v-container>
      </v-col>
      <v-col>
        <v-avatar size="128" rectangle><v-img :src="userQQAvatar"></v-img></v-avatar>
      </v-col>
    </v-row>
    <v-btn color="blue-darken-2">修改信息</v-btn>
    <v-btn color="error">注销账号</v-btn>
  </v-card>
</template>

<script setup lang="ts">
import {useUserStore} from '../ts/storage'
const user = useUserStore()

const userQQAvatar = `http://q1.qlogo.cn/g?b=qq&nk=${user.qq}&s=100`

</script>

<style scoped>
#card{
  width: 600px;
  padding: 10px;
}
v-btn{
  padding: 10px;
}
</style>