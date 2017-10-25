<template>
	<div id="student-index">
		<member-head userid="1111"></member-head>
		<div class="container">
			<div class="row">
				<h4><span class="chip">231</span>Registered Students</h4>
				<p class="red-text">*When the header (currently Red) above is Green you are good to go.</p>
				<p class="green-text">Congratulations, you are good to go.</p>
    <table>

      <tr v-for="(student, index) in students">          
          <td>{{student.first_name + " " +student.last_name}}</td>
          <td><strong>@{{student.username}}</strong></td>
          <td>{{student.state}}</td>
          <td>{{programs(student.program)}}</td>
          <td>{{student.skills}}</td>
          </a>
        </td>
    </tr>
  </table>
			</div>
		</div>
	</div>
</template>

<script>
import memberhead from '@/components/_support/member-head'
import studentRecords from '@/data/students_record'
	export default {
		name: 'student-index',
		data () {
			return {
				students: []
			}
		},
		components: {
			'member-head': memberhead
		},
		methods: {
			programs(program) {
				var programs = ["Mobile Apps", "Web Development", "Product Design"];
				return programs[--program];
			}
		},
		mounted () {
			this.students = studentRecords
		}
	}
</script>