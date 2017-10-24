<template>
  <div id="new-student">
    <div class="fixed-action-btn">
    <a class="btn-floating btn-large waves-effect waves-light btn modal-trigger green" href="#modal">
      <i class="large material-icons">account_circle</i>
    </a>
  </div>

  <!-- Modal Structure -->
  <div id="modal" class="modal">
    <div class="modal-content">
      <h4>Register New Student</h4>
      <p>* fields are required.</p>
      <div class="row">
        <div class="input-field col s6"><input v-model="first_name" type="text" class="validate"><label for="first_name">FIRST NAME</label></div>
        <div class="input-field col s6"><input v-model="last_name" type="text" class="validate"><label for="last_name">LAST NAME</label></div>
        <div class="input-field col s6"><input v-model="school" type="text" class="validate"><label for="school">SCHOOL</label></div>
        <div class="input-field col s6"><input type="text" v-model="department" class="validate"><label for="department">DEPARTMENT</label></div>
      </div>      
    </div>
    <div class="modal-footer">
      <a class="modal-action modal-close waves-effect waves-green btn" @click="addNewStudent">Save</a>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'new-student',
  data () {
    return {
      first_name: null,
      last_name: null,
      school: null,
      department: null
    }
  },
  methods: {
    addNewStudent () {
      this.$emit('addnew', {first_name: this.first_name, last_name: this.last_name, school: this.school, department:this.department});
    }
  },
  mounted () {
    $('#modal').modal()
  }
}
</script>