<template>
	<div id="member-head">
    <nav class="top">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">ALC 2.0 Portal</a>
        <ul class="right hide-on-med-and-down">
          <li><router-link :to="{name: 'StudentIndex'}"><i class="material-icons left">home</i>Dash Board</router-link>></li>
          <li><router-link :to="{name: 'Profile'}"><i class="material-icons left">device_hub</i>Profile</router-link>></li>
          <li><a @click="logout"><i class="material-icons right">exit_to_app</i>Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from 'axios'
import SERVER_URL from '@/config/server_url'

export default {
  name: 'member-head',
  methods: {
    logout() {
     var _vm = this;

     axios.defaults.withCredentials = true;
     axios.post(SERVER_URL.base + '/logout').then(function(res) {
       _vm.$store.commit('REMOVE_CURRENT_USER');
      _vm.$router.push({name: 'Index'})
    }).catch(function(e){console.log(e)})
   }
 }
}
</script>