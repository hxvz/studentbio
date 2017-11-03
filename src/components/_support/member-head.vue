<template>
	<div id="member-head">
		    <nav class="top">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">ALC 2.0 Portal</a>
      <ul class="right hide-on-med-and-down">
        <li><router-link :to="{name: 'StudentIndex'}"><i class="material-icons left">home</i>Dash Board</router-link>></li>
        <li><router-link :to="{name: 'Profile'}"><i class="material-icons left">device_hub</i>Profile</router-link>></li>
        <li><router-link :to="{name: 'Logout'}"><i class="material-icons right">exit_to_app</i>Logout</router-link></li>
      </ul>
    </div>
  </nav>
	</div>
</template>

<script>
  export default {
    name: 'member-head'
  }
</script>