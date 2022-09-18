<template >
  <div id="page">
  <v-container class="position-absolute" fluid id="container">
    <v-card class="elevation-12" id="login-card">
      <v-window v-model="step" id="login-window">
        <v-window-item
            :value="1">
          <h2 class="">登录</h2>
            <v-form>
          <v-text-field
              label="用户名"
              clearable></v-text-field>
              <div>
                <v-text-field
                    label="密码"
                    clearable
                    :type="'password'"
                ></v-text-field><a href="#" @click="" class="text-right">え？忘记密码了？</a>
              </div>

          <v-btn color="purple-darken-1" @click="clickLogin">登录</v-btn>
          <br/>
          </v-form>
          <br/>
          <a href="#" @click="step++" >え？没有账号？注册一个喵</a><br/>

        </v-window-item>
        <v-window-item
            :value="2"
            >
          <h2>注册</h2>
          <v-form>
            <v-text-field
                label="用户名"
                clearable></v-text-field>
            <v-text-field
                label="密码"
                clearable
                :type="'password'"></v-text-field>
            <v-text-field
                label="确认密码"
                clearable
                :type="'password'"></v-text-field>
            <v-btn>注册</v-btn><br />
          </v-form>
          <br/>
          <a href="#" @click="step--" >え？已有账号？那就登录喵</a>
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue";

  const step = ref(0)

  function clickLogin(){
    //this.axios.defaults.baseURL='/dev'

  }
</script>

<style scoped>
  #page{
    background: url("https://s6.jpg.cm/2022/09/16/PcjcT5.jpg") no-repeat center center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  #container{
    margin-top:5%;
    padding: 5px;
    display: flex;
    justify-content: center;
  }
  #login-window {
    margin: 60px;

  }
  #login-card {
    width: 600px;
    max-width: 600px;
  }

</style>