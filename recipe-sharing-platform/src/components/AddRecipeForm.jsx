// src/components/AddRecipeForm.jsx
import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // ✅ Validation function
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim())
      newErrors.ingredients = "Ingredients field cannot be empty.";
    if (!steps.trim())
      newErrors.steps = "Preparation steps field cannot be empty.";

    // Optional: require at least 2 ingredients
    if (ingredients && ingredients.split(",").length < 2)
      newErrors.ingredients = "Please include at least two ingredients.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Example submission
    console.log({
      title,
      ingredients: ingredients.split(","),
      steps,
    });

    // Reset fields and errors
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full md:w-2/3 lg:w-1/2"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Add a New Recipe
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Separate each ingredient with a comma"
            className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:ring focus:ring-blue-200"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 h-32 focus:ring focus:ring-blue-200"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 md:w-auto md:px-6 md:mx-auto md:block"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
