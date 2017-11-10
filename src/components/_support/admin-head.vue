<template>
	<div id="admin-head">
		 <nav class="top black">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">ALC 2.0 Portal</a>
      <ul class="right hide-on-med-and-down">        
        <li><router-link :to="{name: 'AdminIndex'}"><i class="material-icons left">home</i>Dash Board</router-link>></li>
        <li><router-link :to="{name: 'AdminIndex', params: {program: 1}}"><i class="material-icons left">home</i>Mobile App</router-link>></li>
        <li><router-link :to="{name: 'AdminIndex', params: {program: 2}}"><i class="material-icons left">home</i>Web Development</router-link>></li>
        <li><router-link :to="{name: 'AdminIndex', params: {program: 3}}"><i class="material-icons left">home</i>Product Design</router-link>></li>
        <li><router-link :to="{name: 'Logout'}"><i class="material-icons right">exit_to_app</i>Logout</router-link></li>
      </ul>
    </div>
  </nav>

	</div>
</template>