import { Link } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore.js'

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes)

  if (!recipes || recipes.length === 0) {
    return <p>No recipes yet — add one above!</p>
  }

  return (
    <div>
      {recipes.map((r) => (
        <div key={r.id} style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
          <h3 style={{ margin: 0 }}>{r.title}</h3>
          <p style={{ margin: '6px 0' }}>
            {r.description.length > 120 ? r.description.slice(0, 120) + '…' : r.description}
          </p>
          <Link to={`/recipes/${r.id}`}>View</Link>{' '}
          <Link to={`/recipes/${r.id}/edit`}>Edit</Link>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
