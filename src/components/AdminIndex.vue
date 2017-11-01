<template>
  <div id="admin-index">
    <admin-head></admin-head>

    <div class="container">
      <div class="row">
        <div class="col m12"><h4>REGISTERED MEMBER</h4></div>
        <table>
          <tr v-for="(student, index) in students" @click="update(student.username)">          
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
import adminhead from '@/components/_support/admin-head'
import studentRecords from '@/data/students_record'

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
  created () {
    this.students = studentRecords
  }
}
</script>