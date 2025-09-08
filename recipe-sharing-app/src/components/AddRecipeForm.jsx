import { useState } from 'react'
import { useRecipeStore } from '../store/recipeStore.js'
import { useNavigate } from 'react-router-dom'

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) return
    const id = Date.now().toString()
    const newRecipe = { id, title: title.trim(), description: description.trim() }
    addRecipe(newRecipe)
    setTitle('')
    setDescription('')
    // navigate to the new recipe's detail page
    navigate(`/recipes/${id}`)
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe title"
        style={{ display: 'block', width: '100%', marginBottom: 8 }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe description"
        rows={4}
        style={{ display: 'block', width: '100%', marginBottom: 8 }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  )
}

export default AddRecipeForm
