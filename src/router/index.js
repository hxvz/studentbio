import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ViewStudents from '@/components/ViewStudents'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/students',
      name: 'ViewStudents',
      component: ViewStudents
    }
  ]
})
