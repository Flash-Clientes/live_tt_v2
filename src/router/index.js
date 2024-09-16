import { createRouter, createWebHistory } from 'vue-router';
import { supabase } from '../main'; // Importando o Supabase
import Home from '../views/home/Home.vue';
import Dashboard from '../views/dashboard//Dashboard.vue';
import Tasks from '../views/dashboard/views/tasks/Tasks.vue';
import ProductsManagement from '../views/dashboard/views/products-management/ProductsManagement.vue';

const routes = [
  {
    path: '/',
    redirect: '/dashboard/tasks'
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'Dashboard',
    meta: { requiresAuth: false }, // Requer autenticação
    children: [
      {
        path: 'tasks',
        component: Tasks,
        name: 'Tasks',
        meta: { requiresAuth: false },
      },
      {
        path: 'products',
        component: ProductsManagement,
        name: 'Products',
        meta: { requiresAuth: false },
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guardião de Rotas Global
// router.beforeEach(async (to, from, next) => {
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

//   // Verifica se a rota requer autenticação
//   if (requiresAuth) {
//     const {
//       data: { session },
//     } = await supabase.auth.getSession();

//     // Se não há uma sessão, redireciona para a página de login
//     if (!session) {
//       next({ name: 'Login' });
//     } else {
//       next(); // Se o usuário está autenticado, permite o acesso
//     }
//   } else {
//     next(); // Se a rota não requer autenticação, segue normalmente
//   }
// });

export default router;
