import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FavoritesView from '@/views/FavoritesView.vue';
import AddRecipeView from '@/views/AddRecipeView.vue';

// mydomain.com
// mydomain.com/app
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView
    },
    {
      path: '/add-recipe',
      name: 'add-recipe',
      component: AddRecipeView
    }
  ]
});

export default router;
