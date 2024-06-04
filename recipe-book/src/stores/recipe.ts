import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export interface Recipe {
  id: string;
  name: string;
  description: string;
}

type NewRecipe = Omit<Recipe, 'id'>;

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([]);
  const favoriteIds = ref<string[]>([]);

  const toggleFavorite = (id: string) => {
    if (favoriteIds.value.includes(id)) {
      favoriteIds.value = favoriteIds.value.filter((favId) => favId !== id);
    } else {
      favoriteIds.value.push(id);
    }
  };

  const isFavorite = (id: string) => favoriteIds.value.includes(id);

  const addRecipe = (recipe: NewRecipe) => {
    const newRecipe = {
      id: Date.now().toString(),
      ...recipe
    };
    recipes.value.push(newRecipe);
    return newRecipe;
  };

  const editRecipe = (updatedRecipe: Recipe) => {
    const index = recipes.value.findIndex((recipe) => recipe.id === updatedRecipe.id);
    if (index !== -1) {
      recipes.value[index] = updatedRecipe;
    }
  };

  const getRecipeById = (id: string) => recipes.value.find((recipe) => recipe.id === id);

  const filteredRecipes = (searchQuery: string) =>
    recipes.value.filter((recipe) =>
      recipe.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );

  const favotiteRecipes = computed(() =>
    recipes.value.filter((recipe) => favoriteIds.value.includes(recipe.id))
  );

  return {
    recipes,
    addRecipe,
    getRecipeById,
    filteredRecipes,
    editRecipe,
    favoriteIds,
    toggleFavorite,
    isFavorite,
    favotiteRecipes
  };
});
