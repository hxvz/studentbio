import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ViewStudents from '@/components/ViewStudents'
import StudentDetails from '@/components/StudentDetails'
import Register from '@/components/Register'
import StudentIndex from '@/components/StudentIndex'
import Profile from '@/components/Profile'
import AdminIndex from '@/components/AdminIndex'
import UpdateStudentRecord from '@/components/UpdateStudentRecord'

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
    },
    {
      path: '/student',
      name: 'StudentIndex',
      component: StudentIndex
    },
    {
      path: '/admin',
      name: 'AdminIndex',
      component: AdminIndex
    },
    {
      path: '/admin/:u',
      name: 'UpdateStudentRecord',
      component: UpdateStudentRecord
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/student-details/:id',
      name: 'StudentDetails',
      component: StudentDetails
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
