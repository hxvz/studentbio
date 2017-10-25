<template>
  <div id="index" class="container">

    <div class="row center"> 
      <h3>ALC 2.0 - Moving you Forward</h3>
    </div>

    <div class="row">
      <div class="col m6 offset-m3">
      <div>
        <label for="username"><input type="text" placeholder="username"></label>  
      </div>
      <div><label for="password"><input type="password" placeholder="Password"></label>
      </div>
      <input class="btn" type="submit" value="Login" @click="login"> <router-link :to="{name: 'Register'}" class="btn">Signup</router-link>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  methods: {
    login () {
      this.$router.push({name: 'StudentIndex'})
    }
  }
}
</script>
