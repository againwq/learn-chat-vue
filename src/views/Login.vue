<template>
  <div class="login">
    <b-jumbotron  header="Vue.js Chat"
                  lead="Welcome to my ChatProject by vue"
                  bg-variant="info"
                  text-variant="white">
      <p>click there to register new user</p>
      <b-btn @click="register">register</b-btn>
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col lg="4" md="3"></b-col>
        <b-col lg="4" md="6">
          <LoginForm />
        </b-col>
        <b-col lg="4" md="3"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'login',
  components: {
    LoginForm
  },
  methods:{
    register(){
      this.$router.push('register')
    }
  }

}
</script>