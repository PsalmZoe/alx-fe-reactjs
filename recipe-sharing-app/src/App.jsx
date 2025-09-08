import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm.jsx'
import RecipeList from './components/RecipeList.jsx'
import RecipeDetails from './components/RecipeDetails.jsx'
import EditRecipeForm from './components/EditRecipeForm.jsx'
import { useEffect } from 'react'
import { useRecipeStore } from './store/recipeStore.js'

function App() {
  const setRecipes = useRecipeStore((s) => s.setRecipes)

  // Optional: load some starter/demo data so the UI isn't empty.
  useEffect(() => {
    setRecipes([
      {
        id: 'demo-1',
        title: 'Classic Spaghetti',
        description: 'Tomato sauce, garlic, olive oil, parmesan. Quick and satisfying.',
      },
      {
        id: 'demo-2',
        title: 'Buttermilk Pancakes',
        description: 'Fluffy pancakes with a hint of vanilla and brown butter.',
      },
    ])
  }, [setRecipes])

  return (
    <Router>
      <div style={{ padding: 20, maxWidth: 800, margin: '0 auto' }}>
        <header style={{ marginBottom: 16 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>Recipe Sharing App</h1>
          </Link>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
