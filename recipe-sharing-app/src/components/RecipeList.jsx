import { Link } from "react-router-dom";
import { useRecipeStore } from "../recipeStore.js";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  if (!recipes || recipes.length === 0) {
    return <p>No recipes found. Try adding or searching!</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
