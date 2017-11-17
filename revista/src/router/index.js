import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Registro from '@/components/Registro'
import IndexEstudiante from '@/components/estudiante/Index'
import IndexDesigner from '@/components/revista/Designer'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Hello', component: Index },
    { path:'/login', name: 'Login', component: Login },
    { path: '/registro', name: 'Registro', component: Registro },
    { path: '/student', name: 'Student Dashboard', component: IndexEstudiante },
    { path: '/designer', name: 'Designer', component: IndexDesigner },
  ]
})
