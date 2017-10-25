<template>
   <div id="details" class="container">
      <h3>{{student.first_name}} {{student.last_name}}</h3>
      <div class="row card">
        <div class="col m5"><div class="label">Department</div>{{student.department}}</div>
        <div class="col m5"><div class="label">School</div>{{student.school}}</div>

        <div class="col m5"><div class="label">Department</div>{{student.department}}</div>
        <div class="col m5"><div class="label">School</div>{{student.school}}</div>

        <div class="col m5"><div class="label">Department</div>{{student.department}}</div>
        <div class="col m5"><div class="label">School</div>{{student.school}}</div>
      </div>
      <button class="btn light-blue"><i class="material-icons">edit</i> Edit</button>
   </div>
</template>

<script>
import students from '@/data/students_record'
   export default {
      name: 'details',
      data () {
         return {
            student: null
         }
      },
      created () {
        this.student = students.slice(0,1)[0]
      }
   }
</script>