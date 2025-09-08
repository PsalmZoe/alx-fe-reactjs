import AddRecipeForm from "./components/AddRecipeForm.jsx";
import SearchBar from "./components/SearchBar.jsx";
import RecipeList from "./components/RecipeList.jsx";

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
