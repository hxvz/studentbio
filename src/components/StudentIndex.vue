<template>
  <div id="student-index">
    <member-head></member-head>
    <div class="container">
      <div class="row">
        <h4><span class="chip">231</span>Registered Students</h4>
        <p class="red-text">*When the header (currently Red) above is Green you are good to go.</p>
        <p class="green-text">Congratulations, you are good to go.</p>
    <table>

      <tr v-for="(student, index) in students">
          <td>{{student.first_name + " " +student.last_name}}</td>
          
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
import axios from 'axios'
import SERVER_URL from '@/config/server_url'

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
      // this.students = studentRecords
    },
    created() {
      var _vm = this;
      var currentUser = this.$store.state.currentUser;
      if (currentUser == null) return this.$router.push({name: 'Index'});

      var allRegisteredStudents = [];

      axios.defaults.withCredentials = true;
      axios.get(SERVER_URL.base + '/students').then(function(res) {
        console.log(res.data);
        if (!res.data.errors){
          _vm.students = res.data
        }
      }).catch(function(e){console.log(e)})
    }
  }
</script>