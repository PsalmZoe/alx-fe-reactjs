import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // Required setter for tests
  setRecipes: (recipes) => set({ recipes }),

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, id: Date.now().toString() }],
    })),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.3
      );
      return { recommendations: recommended };
    }),
}));
