import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/Admin.vue')
    }
  ],
})

router.beforeEach((to, from, next) => {
  // If the route does not have a name, redirect to Dashboard
  if (to.name === undefined) {
    return next({ name: 'Dashboard' });
  }
  /** Set the document title based on the route name
  Fallback to 'aDock' if the name is not defined */
  document.title = `${to.name} | aDock` || 'aDock';
  next();
})

export default router
