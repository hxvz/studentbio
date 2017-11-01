<template>
  <div id="update-student-record">
    <admin-head></admin-head>
    <div class="container">
      <div class="row">
        <div class="card col m11">
          {{$route.params.u}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminhead from '@/components/_support/admin-head'

  export default {
    name: 'update-student-record',
    components: {
      'admin-head': adminhead
    }
  }
</script>