import { useState, useEffect } from "react";
import recipesData from "../data.json";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulating fetch from local JSON
    setRecipes(recipesData);
  }, []);

<Link to={`/recipe/${recipe.id}`} key={recipe.id}>
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-4">
    <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-md mb-3" />
    <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
    <p className="text-gray-600">{recipe.summary}</p>
  </div>
</Link>

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🍳 Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
