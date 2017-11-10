<template>
  <div id="admin-index">
    <admin-head></admin-head>

    <div class="container">
      <div class="row">
        <div class="col m12"><h4>REGISTERED MEMBER</h4></div>
        <table>
          <tr v-for="(student, index) in students" @click="update(student.username)">          
            <td>{{student.first_name + " " +student.last_name}}</td>
            <td><strong>@{{student.user.username}}</strong></td>
            <td>{{student.state}}</td>
            <td>{{programs(student.program)}}</td>
            <td>{{student.skill_set}}</td>
          </a>
        </td>
      </tr>
    </table>
  </div>
</div>

</div>
</template>

<script>
import adminhead from '@/components/_support/admin-head'
import axios from 'axios'
import SERVER_URL from '@/config/server_url'

export default {
  name: 'admin-index',
  components: {
    'admin-head': adminhead
  },
  data () {
    return {
      students: []
    }
  },
  methods: {
    programs (program) {
      var programs = ['Mobile Apps', 'Web Development', 'Product Design']
      return programs[--program]
    },
    update (username) {
      this.$router.push({name: 'UpdateStudentRecord', params: {'u': username}});
    }
  },
  mounted() {
    alert('changed');
  },
  created () {
    alert('ksldkldksdsfksfsjfjfjsdfjfsdj;ffjk;sjk');
    var _vm = this;
    var currentUser = this.$store.state.currentUser;
    if (currentUser == null || currentUser.account_type != 1) return this.$router.push({name: 'Index'});

    var urlProgram = this.$route.params.program || '';

    axios.defaults.withCredentials = true;
      axios.get(SERVER_URL.base + '/admin/students/' +urlProgram).then(function(res) {
        console.log(res.data);
        if (!res.data.errors){
          _vm.students = res.data
        }
      }).catch(function(e){console.log(e)})
  }
}
</script>