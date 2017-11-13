import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Registro from '@/components/Registro'
import IndexEstudiante from '@/components/estudiante/Index'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Hello', component: Index },
    { path:'/login', name: 'Login', component: Login },
    { path: '/registro', name: 'Registro', component: Registro },
    { path: '/studnet', name: 'Student Dashboard', component: IndexEstudiante },
  ]
})
