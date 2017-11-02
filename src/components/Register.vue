<template>
	<div id="register">
		<nav class="top">
			<div class="nav-wrapper">
				<a href="#" class="brand-logo">ALC 2.0</a>
				<ul class="right hide-on-med-and-down">
					<li><router-link :to="{name: 'Index'}"><i class="material-icons left">add</i>Login</router-link>></li>
				</ul>
			</div>
		</nav>
<div class="container">
	<h4 class="space-down-5">Fresh Registration</h4>
		<div class="card padding-left-5 padding-top-5 padding-down-5">
			<div class="row">
			<div class="col m5"><label for=""><input v-model="candidate.first_name" type="text" placeholder="First Name"></label></div>
			<div class="col m5 offset-m1"><label for=""><input v-model="candidate.last_name" type="text" placeholder="Last Name"></label></div>
		</div>
		<div class="row">
			<div class="col m5"><label for=""><input v-model="candidate.address" type="text" placeholder="Address"></label></div>
			<div class="col m5 offset-m1"><label for=""><input v-model="candidate.state" type="text" placeholder="State"></label></div>
		</div>
		<div class="row">
			<div class="col m5">
				<div>Gender</div>
				<input class="with-gap" value="1" name="gender" type="radio" id="male" v-model="candidate.gender" />
    <label for="male">Male</label>

    <input class="with-gap" name="gender" value="0" type="radio" id="female" v-model="candidate.gender" />
    <label for="female">Female</label>
	
			</div>
			<div class="col m5 offset-m1 input-field">
				<select v-model="candidate.program">
      <option value="1">Mobile App</option>
      <option value="2">Web Development</option>
      <option value="3">Product Design</option>
    </select>
    <label>Select ALC Program</label>

			</div>
		</div>
		<div class="row">
			<div class="col m5"><label for=""><input v-model="candidate.username" type="text" placeholder="Username"></label></div>
			<div class="col m5 offset-m1"><label for=""><input v-model="candidate.email" type="text" placeholder="Email"></label></div>
		</div>
		<div class="row">
			<div class="col m5"><label for=""><input v-model="candidate.password" type="text" placeholder="Password"></label></div>
			<div class="col m5 offset-m1"><label for=""><input v-model="candidate.repassword" type="text" placeholder="Re-Password"></label></div>
		</div>
		<div class="row">
			<div class="col m11"><div class="chips"></div></div>
		</div>
		<div class="row">
			<div class="col m4"><button @click="register" class="waves-effect waves-light btn-large"><i class="material-icons left">send</i>Let's Roll</button></div>
		</div>
		</div>
</div>
	</div>
</template>

<script>
import axios from 'axios'

	export default {
		name: 'register',
		data () {
			return {
				candidate: {
					first_name: 'Taiwo',
					last_name: 'Kolawole',
					gender: 1,
					username: 'omokolataiwo',
					password: 'snakman',
					skill_set: ['PHP', 'JavaScript', 'Photoshop'],
					address: '11 Oguntade street',
					state: 13,
					program: 1,
					email: 'omokolataiwo@yahoo.com'
				}
			}
		},
		methods: {
			register() {
				var _vm = this;

				axios.post('http://localhost:5000/create', {candidate: this.candidate}).then(function(res) {
					
					if (!res.data.error) {
						_vm.$store.commit('SET_CURRENT_USER', {currentUser: res.data.uid});
						_vm.$router.push({name:'StudentIndex'});
					}

				});
			},			
		},
		mounted() {
			var _vm = this;
			$('select').material_select();
			$('select').change(function() {
				_vm.candidate.program = this.value
			});
			$('.chips').material_chip();
			$('.chips').on('chip.add', function(e, chip){
				_vm.candidate.skills.push(chip.tag);
			})
		}
	}
</script>