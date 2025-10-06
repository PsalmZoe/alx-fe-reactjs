import { useState } from "react";

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Recipe title is required.";
    if (!formData.ingredients.trim())
      newErrors.ingredients = "Please include at least one ingredient.";
    if (!formData.steps.trim())
      newErrors.steps = "Please include preparation steps.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    alert("🎉 Recipe submitted successfully!");
    setFormData({ title: "", ingredients: "", steps: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md md:max-w-lg"
      >
        <h2 className="text-3xl font-semibold text-orange-600 mb-6 text-center">
          🍲 Add a New Recipe
        </h2>

        {/* Title Field */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Spaghetti Carbonara"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none transition ${
              errors.title ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients Field */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients
          </label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            placeholder="List the ingredients, separated by commas"
            rows="4"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none transition ${
              errors.ingredients ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            placeholder="Write step-by-step instructions"
            rows="5"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none transition ${
              errors.steps ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-105 active:scale-95"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
