<template>
  <div class="index">
      <label for="username"><input type="text"></label>
      <label for="password"><input type="text"></label>
      <input type="submit" value="Login" @click="login">
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
      this.$router.push({name: 'ViewStudents'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
