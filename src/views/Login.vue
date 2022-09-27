<template >
  <div id="page">
  <v-container class="position-absolute" fluid id="container">
    <v-card class="elevation-12" id="login-card">
      <v-window v-model="step" id="login-window">
        <v-window-item
            :value="1">

          <v-row>
            <v-col>
            <v-alert
                v-model="alertShow"
                border="left"
                type="warning"
                closable="closable">
              {{ alertText }}
            </v-alert>
          </v-col>
          </v-row>

          <v-row>
            <v-col>
              <h2 class="">登录</h2>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-form>
                <v-row><v-col>
                  <v-text-field
                      label="用户名"
                      v-model="userName"
                      clearable></v-text-field>
                </v-col></v-row>
                <v-row>
                  <v-col><v-text-field
                      label="密码"
                      clearable
                      v-model="password"
                      :type="'password'"
                  ></v-text-field></v-col>
                  <v-col style="margin-top: 5%;"><a href="#" @click="" class="text-right">え？忘记密码了？</a></v-col>
                </v-row>

                <v-btn color="purple-darken-1" @click="clickLogin(this)">登录</v-btn>
                <br/><!--css-->
              </v-form>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              え？没有账号？<a href="#" @click="step++" >注册一个</a>喵
            </v-col>
          </v-row>

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
            <v-tooltip bottom >
            <v-text-field
              label="验证码"
              ></v-text-field>
            <span>芝士提示</span>
            </v-tooltip>
            <br/><br/> <!--css-->
            <v-btn>注册</v-btn><br /><!--css-->
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
  import {useDebugInfoStore} from "../ts/storage";
  import {useRouter} from "vue-router";
  import axios from "axios";

  const debugInfo = useDebugInfoStore()
  const step = ref(0)
  const router = useRouter()

  const userName = ref("")
  const password = ref("")

  const alertShow = ref(false)
  const alertText = ref("Error")
  async function clickLogin() {
    if (userName.value == "" || password.value == "") {
      alertShow.value = true
      alertText.value = "用户名或密码不能为空捏！魂淡"
      return
    }

    const loginResponse = ref({
      "ok": false,
      "error": "",
      "error_message": ""
    })

    const response = await axios.post(`user/${userName.value}/login`, {
      password: password.value
    })
    loginResponse.value = response.data
    console.log(loginResponse)


    if (!loginResponse.value.ok) {
      console.log(loginResponse.value)
      alertShow.value = true
      alertText.value = loginResponse.value.error_message
      return
    }

    axios.get("about").then((response: any) => {
      debugInfo.goVersion = response.data.GoVersion
    })

    await router.push("/")
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