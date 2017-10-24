<template>
  <div id="students" class="container">
    <newstudent v-on:addnew="addNewStudent"></newstudent>


     <div id="editmodal" class="modal">
    <div class="modal-content">
      <h4>Edit New Student</h4>
      <p>* fields are required.</p>
      <div class="row">
        <div class="input-field col s6"><input v-model="activeStudent.first_name" type="text" class="validate"><label for="first_name">FIRST NAME</label></div>
        <div class="input-field col s6"><input v-model="activeStudent.last_name" type="text" class="validate"><label for="last_name">LAST NAME</label></div>
        <div class="input-field col s6"><input v-model="activeStudent.school" type="text" class="validate"><label for="school">SCHOOL</label></div>
        <div class="input-field col s6"><input type="text" v-model="activeStudent.department" class="validate"><label for="department">DEPARTMENT</label></div>
      </div>      
    </div>
    <div class="modal-footer">
      <a class="modal-action modal-close waves-effect waves-green btn">Save</a>
    </div>
  </div>




    <h2>Registered Students</h2>
    <ul>
      <li>
        <div class="row bold-header">
          <div class="col s1">S/N</div>
          <div class="col s2">Matric Number</div>
          <div class="col s2">First Name</div>
          <div class="col s2">Last Name</div>
          <div class="col s2">School</div>
          <div class="col s2">Department</div>
        </div>
      </li>
      <li v-for="(student, index) in sortedStudents">
        <div class="row student-list" @click="studentDetails(student.matric_number)"  @mouseover="showOperators(student.matric_number)">
          <div class="col s1">{{index+1}}</div>
          <div class="col s2">{{student.matric_number}}</div>
          <div class="col s2">{{student.first_name}}</div>
          <div class="col s2">{{student.last_name}}</div>
          <div class="col s2">{{student.school}}</div>
          <div class="col s2">{{student.department}}</div>
          <div class="col s1"><i class="material-icons red-text"  @click.stop="remove(student.matric_number)">close</i>
           <a class="modal-trigger" href="#editmodal" @click.stop.prevent="openEditModal(student)">
            <i class="material-icons">edit</i>
          </a>
        </div>
      </div>
    </li>
  </ul>
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
    studentDetails () {
      alert('moving')
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
