import { useParams, Link, useNavigate } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore.js'
import DeleteRecipeButton from './DeleteRecipeButton.jsx'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id))
  const navigate = useNavigate()

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back home</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${id}/edit`} style={{ marginRight: 8 }}>
          Edit
        </Link>

        <DeleteRecipeButton
          id={id}
          onDeleted={() => {
            // After delete, go back home
            navigate('/')
          }}
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <Link to="/">Back to list</Link>
      </div>
    </div>
  )
}

export default RecipeDetails
