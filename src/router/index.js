import Vue from 'vue'
import VueRouter from 'vue-router'

const Discover = () => import('../views/discover/Discover.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Clouds = () => import('../views/clouds/Clouds.vue')
const Video = () => import('../views/video/Video.vue')
const Login = () => import('../views/login/Login.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/discover'
  }, 
  {
    path: '/discover',
    component: Discover
  }, 
  {
    path: '/profile',
    component: Profile
  }, 
  {
    path: '/clouds',
    component: Clouds
  }, 
  {
    path: '/video',
    component: Video
  }, 
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
