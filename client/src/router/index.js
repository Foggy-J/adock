import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Dashboard.vue'),
      children: [
        {
          path: '',
          name: 'Apps',
          component: () => import('../views/Apps.vue')
        },
        {
          path: 'profile',
          name: 'Profile',
          component: () => import('../views/Profile.vue')
        },
        {
          path: 'admin',
          name: 'Admin',
          component: () => import('../views/Admin.vue')
        }
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
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
  document.title = `${to.name} | ADock` || 'ADock';
  next();
})

export default router
