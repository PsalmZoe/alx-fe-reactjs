import AddRecipeForm from "../components/AddRecipeForm";

function AddRecipe() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-orange-600">
        Add a New Recipe
      </h1>
      <AddRecipeForm />
    </div>
  );
}

export default AddRecipe;
