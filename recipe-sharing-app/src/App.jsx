import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm.jsx";
import SearchBar from "./components/SearchBar.jsx";
import RecipeList from "./components/RecipeList.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";

function App() {
  return (
    <Router>
      <div style={{ padding: "1rem" }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
