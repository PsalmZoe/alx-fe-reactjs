import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{recipe.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{recipe.summary}</p>
        <Link
          to={`/recipe/${recipe.id}`}
          className="text-orange-500 font-medium hover:underline"
        >
          View Recipe →
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
