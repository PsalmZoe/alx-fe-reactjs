import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore.js'

const EditRecipeForm = () => {
  const { id } = useParams()
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id))
  const updateRecipe = useRecipeStore((s) => s.updateRecipe)
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title)
      setDescription(recipe.description)
    }
  }, [recipe])

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <a href="/">Back</a>
      </div>
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()   // ✅ now included

    if (!title.trim() || !description.trim()) return

    updateRecipe({ id, title: title.trim(), description: description.trim() })
    navigate(`/recipes/${id}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', width: '100%', marginBottom: 8 }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={6}
        placeholder="Description"
        style={{ display: 'block', width: '100%', marginBottom: 8 }}
      />
      <button type="submit">Save</button>{' '}
      <button type="button" onClick={() => navigate(-1)}>Cancel</button>
    </form>
  )
}

export default EditRecipeForm
