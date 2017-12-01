<template>
  <v-container fluid fill-height>
    <v-layout align-center>
      <v-flex xs12 sm4 offset-sm4>
        <v-card class="elevation-12">
          <v-card-title primary-title>
            <v-form v-model="valid">
              <v-text-field
                label="Name"
                v-model="name"
                :rules="nameRules"
                required
              ></v-text-field>
              <v-text-field
                label="E-mail"
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>
            </v-form>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">注册</v-btn>
            <v-btn flat color="orange">登录</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        valid: false,
        name: '',
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      }
    }
  }
</script>