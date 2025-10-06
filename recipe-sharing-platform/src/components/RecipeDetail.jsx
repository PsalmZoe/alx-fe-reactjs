import { useParams } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find((r) => r.id === parseInt(id));

  if (!recipe) return <p className="text-center">Recipe not found!</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <img src={recipe.image} alt={recipe.title} className="rounded-lg w-full h-64 object-cover" />
      <h1 className="text-3xl font-bold mt-4 text-orange-600">{recipe.title}</h1>
      <p className="text-gray-700 mt-2">{recipe.summary}</p>

      <h2 className="text-2xl mt-6 font-semibold">Ingredients</h2>
      <ul className="list-disc ml-6 text-gray-600">
        {recipe.ingredients?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl mt-6 font-semibold">Preparation Steps</h2>
      <ol className="list-decimal ml-6 text-gray-600">
        {recipe.steps?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
