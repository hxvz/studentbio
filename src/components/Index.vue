<template>
  <div id="index">
    <div class="intro header">
      <h1>Some Nice Header</h1>
    </div>
    <div id="index" class="container">
      <div class="row center"> 
        <h3>ALC 2.0</h3>
      </div>

      <div class="row">
        <div class="col m6 offset-m3">
          <div>
            <label for="username"><input type="text" placeholder="username" v-model="loginDetails.username"></label>  
          </div>
          <div><label for="password"><input v-model="loginDetails.password" type="password" placeholder="Password"></label>
          </div>
          <input class="btn" type="submit" value="Login" @click="login"> <router-link :to="{name: 'Register'}" class="btn">Signup</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SERVER_URL from '@/config/server_url' 
export default {
  name: 'index',
  data () {
    return {
      loginDetails: {username: null, password: null}
    }
  },
  methods: {
    login () {
      var _vm = this;
      
      axios.defaults.withCredentials = true;
      axios.post(SERVER_URL.base + '/login', {param: this.loginDetails}).then(function(res) {
        if (!res.data.error){
          _vm.$store.commit('SET_CURRENT_USER', {currentUser: res.data});        
          res.data.account_type == 1 ? _vm.$router.push({name: 'AdminIndex'}) : _vm.$router.push({name: 'StudentIndex'});
        }
      }).catch(function(e){console.log(e)})
    }
  },
  created () {

  }
}
</script>
