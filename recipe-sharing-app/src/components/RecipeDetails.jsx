import { useParams } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const recipe = recipes.find((r) => r.id === recipeId);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      {isFavorite ? (
        <button onClick={() => removeFavorite(recipe.id)}>Remove Favorite</button>
      ) : (
        <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
      )}
    </div>
  );
};

export default RecipeDetails;
