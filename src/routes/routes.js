import login from '../components/login/login.vue'
import resetPassword from '../components/login/resetPassword.vue'
import admin from '../components/admin/admin.vue'
export const routes=[
    {path:'/',component:login},
    {path:'/reset',component:resetPassword},
    {path:'/admin',component:admin},


];