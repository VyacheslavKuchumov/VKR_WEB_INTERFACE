import { createRouter, createWebHistory } from "vue-router";
import instance from "@/middlewares";


import HomeView from "@/views/HomeView.vue";
import Register from "@/views/Auth/Register.vue";
import Login from "@/views/Auth/Login.vue";


import OkvedSectionsView from "@/views/okved/OkvedSectionsView.vue";
import EmploymentMinstatView from "@/views/Stats/EmploymentMinstatView.vue";
import EditMinstatDataView from "@/views/Stats/EditMinstatDataView.vue";

import ProfessionsView from "@/views/ProfessionsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // meta: { auth: true },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/okved",
    name: "okved",
    component: OkvedSectionsView,
    meta: { auth: true },
  },
  {
    path: "/employment_minstat",
    name: "employment_minstat",
    component: EmploymentMinstatView,
    meta: { auth: true },
  },
  {
    path: "/edit_minstat_data",
    name: "edit_minstat_data",
    component: EditMinstatDataView,
    meta: { auth: true },
  },
  
  {
    path: "/professions",
    name: "professions",
    component: ProfessionsView,
    meta: { auth: true },
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  try {
    const requireAuth = to.matched.some((record) => record?.meta.auth);
    if (requireAuth) {
      const uid = localStorage.getItem("uid");
      const response = await instance.get(`/api/users/${uid}`);
      if (response.status == 200) {
        return next();
      } else if (response.status == 403) {
        return next("/login");
      }
    }
    return next();
  } catch (error) {
    return next("/login");
  }
});

export default router;
