<template>
  <div id="edit-student" style="display: inline">
    <a class="modal-trigger" href="#editmodal" @click.stop.prevent="openModal">
      <i class="material-icons">edit</i>
    </a>

  <!-- Modal Structure -->
 
  </div>
</template>
<script>
export default {
  name: 'edit-student',
  props: ['student'],
  data () {
    return {
      first_name: null,
      last_name: null,
      school: null,
      department: null,
      nstudent: null
    }
  },
  methods: {
    openModal () {
      $('#editmodal').modal('open');
    }
  },
  mounted () {
    $('#editmodal').modal()
  }
}
</script>