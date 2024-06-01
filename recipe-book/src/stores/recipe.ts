import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Recipe {
  id: string;
  name: string;
  description: string;
}

type NewRecipe = Omit<Recipe, 'id'>;

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([]);

  const addRecipe = (recipe: NewRecipe) => {
    const newRecipe = {
      id: Date.now().toString(),
      ...recipe
    };
    recipes.value.push(newRecipe);
    return newRecipe;
  };

  const getRecipeById = (id: string) => recipes.value.find((recipe) => recipe.id === id);

  return { recipes, addRecipe, getRecipeById };
});
