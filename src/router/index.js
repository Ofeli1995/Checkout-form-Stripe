import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Success from '../views/Success.vue'
import ErrorPage from '../views/ErrorPage.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/success",
    name: "Success",
    component: Success,
  },
  {
    path: "/error",
    name: "Error",
    component: ErrorPage,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router