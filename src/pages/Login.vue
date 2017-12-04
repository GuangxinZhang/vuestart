<template>
<v-app light color="grey lighten-3">
  <v-content>
    <v-container fill-height fluid>
      <v-flex md4 offset-md4>
        <v-card flat class="elevation-20">
          <v-card-text>
            <v-container fluid>
              <v-layout row>
                <v-flex xs12>
                  <h1 class="text-md-center ma-5"> <font color="teal">VUE APP</font> </h1>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs8 offset-md2>
                  <v-text-field v-model="username"label="Account" required></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs8 offset-md2>
                  <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-card-text class="text-md-right">
                    <v-btn flat color="primary" v-on:click="submit"><font color="teal">登录</font></v-btn>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-container>
  </v-content>
</v-app>
</template>
<style>
input:-webkit-autofill {
 -webkit-box-shadow: 0 0 0px 1000px white inset;
 -webkit-text-fill-color: #333;
}
</style>
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
        var self = this
        this.$http.post(this.api['login'], {username: this.username, password: this.password}).then(function (response) {
          if (response.data.code === 0) {
            console.log(response.data)
            localStorage.setItem('STORAGE_TOKEN', response.data.data.token)
            self.$router.push('/index')
          } else {
            self.messageShow = true
            self.message = response.data.msg
            console.log('error: ' + response.data.msg)
          }
        }, function (response) {
          self.messageShow = true
          self.message = response.data.msg || '服务器认证失败'
          self.$router.push('/login')
        })
      }
    }
  }
</script>