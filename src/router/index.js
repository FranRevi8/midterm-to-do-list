import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';

// Función para comprobar si el token es válido
function isAuthenticated() {
  const token = sessionStorage.getItem('authToken');
  
  // Aquí podrías incluir más lógica para verificar si el token ha caducado
  return !!token; // Devuelve true si el token existe
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true } // Añade meta para rutas que necesitan autenticación
    },
    {
      path: '/api/login',
      name: 'login',
      component: LoginView
    }
  ]
});

// Añade un guardia global antes de cada navegación
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    // Si la ruta requiere autenticación y no hay token, redirige al login
    next({ name: 'login' });
  } else {
    // Si no requiere autenticación o hay token, permite la navegación
    next();
  }
});

export default router;
