<template>
  <div id="profile">
    <member-header></member-header>
    <div class="container">
      <div class="row">
        <div>
          <div class="col m12">
            <h2>{{student.first_name + " " + student.last_name}}</h2>
            <div class="card padding-down-5"> 
              <div class="row">
                <div class="input-field col m5 offset-m1 ">
                  <input type="text" v-model="student.first_name">
                </div>

                <div class="col m5 input-field"><input type="text" v-model="student.last_name"></div>
              </div>
              <div class="row">
                <div class="col m5 offset-m1"><label for=""><input v-model="student.address" type="text"></label></div>
                <div class="col m5"><label for=""><input v-model="student.state" type="text"></label></div>
              </div>

              <div class="row">
                <div class="col m5 offset-m1"><label for=""><input v-model="student.password" type="text" placeholder="Password"></label></div>
                <div class="col m5"><label for=""><input v-model="student.repassword" type="text" placeholder="Re-Password"></label></div>
              </div>
              <div class="row">
                <div class="col m9 offset-m1"><div class="chips"></div></div>
              </div>


              <div class="row">
                <div class="col m4 offset-m1"><button @click="update" class="waves-effect waves-light btn-large"><i class="material-icons left">edit</i>Update Profile</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import students from '@/data/students_record'
import memberheader from '@/components/_support/member-head'
import axios from 'axios'
import SERVER_URL from '@/config/server_url'
export default {
  name: 'profile',
  components: {
    'member-header': memberheader
  },
  data () {
    return {
      student: {}
    }
  },
  created() {
    var _vm = this;
    var currentUser = this.$store.state.currentUser;
    axios.get(SERVER_URL.base + '/student/' + currentUser).then(function (res) {
      _vm.student = {};
      if (!res.data.error)
        _vm.student = res.data;
    });
  },
  mounted () {
    var _vm = this
    this.student = students.slice(0, 1)[0]
    this.student.password = ''
    var skills = ['Javascript', 'VueJs', 'PHP', 'ActionScript', 'Python', 'HTML', 'CSS3', 'Angular4', 'PhotoShop']
    var data = skills.map(function (skill) { return {tag: skill} })

    $('.chips').material_chip({data: data})
    $('.chips').on('chip.add', function (e, chip) {
      _vm.candidate.skills.push(chip.tag)
    })
  },
  methods: {
    update () {
      var _vm = this;
      var studentid = this.$store.state.currentUser;
      axios.get(SERVER_URL.base + '/student/edit/' + studentid).then(function (res) {
        if (res.data.error)
        {
          // toastr error
          return;
        }
        // toastr updated successfully;
      });
    }
  }
}
</script>