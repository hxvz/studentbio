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
        <label for="username"><input type="text" placeholder="username"></label>  
      </div>
      <div><label for="password"><input type="password" placeholder="Password"></label>
      </div>
      <input class="btn" type="submit" value="Login" @click="login"> <router-link :to="{name: 'Register'}" class="btn">Signup</router-link>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    login () {
      this.$router.push({name: 'AdminIndex'})
    }
  }
}
</script>
