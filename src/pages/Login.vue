<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">用户登录</span> <v-chip v-model="messageShow" close>{{ message }}</v-chip>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="username"label="账号" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="password" label="密码" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat >注册</v-btn>
          <v-btn color="blue darken-1" flat v-on:click="submit">登录</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        dialog: true,
        username: '',
        password: '',
        message: '',
        messageShow: false
      }
    },

    methods: {
      // 登录逻辑
      submit () {
        if (this.username !== '' && this.password !== '') {
          this.login()
        } else {
          this.messageShow = true
          this.message = '请输入用户名和密码！'
        }
      },
      login () {
        let loginParam = {
          username: this.username,
          password: this.password
        }
        var self = this
        console.log(this.api['login'])
        this.$http.get(this.api['login'], {params: loginParam}).then(function (response) {
          // 响应成功回调
          if (response.data.code === 0) {
            localStorage.setItem('STORAGE_TOKEN', response.data.result)
            self.$router.push('/index')
          } else {
            self.messageShow = true
            self.message = response.data.message
            console.log('error: ' + response.data.message)
          }
        }, function (response) {
          // 响应错误回调
          self.messageShow = true
          self.message = response.data.message || '服务器认证失败'
          console.log(response)
          self.$router.push('/login')
        })
      }
    }
  }
</script>