import { useRecipeStore } from '../store/recipeStore.js'
import { useNavigate } from 'react-router-dom'

const DeleteRecipeButton = ({ id, onDeleted }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)
  const navigate = useNavigate()

  const handleDelete = () => {
    // simple confirmation — you can swap this for a modal later
    if (!confirm('Delete this recipe? This cannot be undone.')) return
    deleteRecipe(id)
    if (onDeleted) onDeleted()
    else navigate('/')
  }

  return <button onClick={handleDelete}>Delete</button>
}

export default DeleteRecipeButton
