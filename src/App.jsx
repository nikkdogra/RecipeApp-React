import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import RecipeContainer from './components/RecipeContainer';
import { useEffect, useRef, useState } from 'react';
import PopUp from './components/PopUp';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const [viewRecipe, setViewRecipe] = useState(null);

  const [error, setError] = useState(null);

  const navbarRef = useRef(null);

  const recipeContainerRef = useRef(null);

  const showRecipes = async (search) => {
    setError(null);

    setRecipes([]);

    const url = search ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}` : 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

    const response = await fetch(url);

    const data = await response.json();

    if (!data.meals) {
      setError('Searched recipe not found!');
      return;
    }
    setRecipes(data.meals);

  }

  const handleViewRecipeClick = (i) => {

    setViewRecipe(recipes[i]);

    navbarRef.current.style.pointerEvents = 'none';
    recipeContainerRef.current.style.pointerEvents = 'none';

  }

  const handleClosePopUp = () => {

    setViewRecipe(null);

    navbarRef.current.style.pointerEvents = 'auto';
    recipeContainerRef.current.style.pointerEvents = 'auto';

  }

  useEffect(() => {

    recipeContainerRef.current.style.minHeight = `calc(100svh - ${navbarRef.current.offsetHeight}px)`;

    showRecipes(null);

  }, []);

  return (
    <div className='wrapper'>

      {
        viewRecipe
        &&
        <PopUp
          recipe={viewRecipe}
          onClosePopUp={handleClosePopUp}
        />
      }

      <Navbar
        ref={navbarRef}
        showRecipes={(search) => showRecipes(search)}
      />

      <RecipeContainer
        ref={recipeContainerRef}
        recipes={recipes}
        onViewRecipe={(i) => handleViewRecipeClick(i)}
        error={error}
      />

    </div>
  )
}

export default App
