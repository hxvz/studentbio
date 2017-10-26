<template>
  <div id="admin-index">
  <admin-head></admin-head>
  </div>
</template>

<script>
import adminhead from '@/components/_support/admin-head'

  export default {
    name: 'admin-index',
    components: {
      'admin-head': adminhead
    }
  }
</script>