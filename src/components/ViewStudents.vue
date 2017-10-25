<template>
  <div id="students" class="container">
    <newstudent v-on:addnew="addNewStudent"></newstudent>


     <div id="editmodal" class="modal">
    <div class="modal-content">
      <h4>Edit New Student</h4>
      <p>* fields are required.</p>
      <div class="row">
        <div class="input-field col s6"><input v-model="activeStudent.first_name" type="text" class="validate"><label for="first_name"></label></div>
        <div class="input-field col s6"><input v-model="activeStudent.last_name" type="text" class="validate"><label for="last_name"></label></div>
        <div class="input-field col s6"><input v-model="activeStudent.school" type="text" class="validate"><label for="school"></label></div>
        <div class="input-field col s6"><input type="text" v-model="activeStudent.department" class="validate"><label for="department"></label></div>
      </div>      
    </div>
    <div class="modal-footer">
      <a class="modal-action modal-close waves-effect waves-green btn">Save</a>
    </div>
  </div>




    <h2>Registered Students</h2>
    <table>
      <thead>
        <tr>
          <th>S/N</th>
          <th>Matric Number</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tr v-for="(student, index) in sortedStudents" @click="studentDetails(student.matric_number)"  @mouseover="showOperators(student.matric_number)">
          <td>{{index+1}}</td>
          <td>{{student.matric_number}}</td>
          <td>{{student.first_name}}</td>
          <td>{{student.last_name}}</td>
          <td>{{student.department}}</td>
          <td><i class="material-icons red-text"  @click.stop="remove(student.matric_number)">close</i>
           <a class="modal-trigger" href="#editmodal" @click.stop.prevent="openEditModal(student)">
            <i class="material-icons">edit</i>
          </a>
        </td>
    </tr>
  </table>
</div>
</template>

<script>
import studentRecords from '@/data/students_record'
import newstudent from '@/components/NewStudent'
import editstudent from '@/components/EditStudent'

export default {
  name: 'students',
  data () {
    return {
      students: null,
      showid: null,
      activeStudent: {first_name: null, last_name: null, school: null, department: null}
    }
  },
  components: {
    newstudent: newstudent,
    editstudent: editstudent
  },
  methods: {
    remove (id) {
      alert('Removing things ' + id)
    },
    showOperators (id) {
      this.showid = id
    },
    studentDetails (id) {
      this.$router.push({name: 'StudentDetails', params: {id:id}});
    },
    addNewStudent (newStudent) {
      var newId = this.students[0].id;
      newStudent.id = ++newId;
      newStudent.matric_number = Math.floor(Math.random() * 100000)
      this.students.push(newStudent)
      //toast
    },
    openEditModal (student) {
      this.activeStudent = student;
      $('#editmodal').modal('open');
    }
  },
  computed: {
    sortedStudents () {
      return this.students.sort(function(a,b) { return b.id - a.id; })
    }
  },
  created () {
    this.students = studentRecords
    document.title = "Students Records"
  },
  mounted () {
    $('#editmodal').modal()
  }
}
</script>
