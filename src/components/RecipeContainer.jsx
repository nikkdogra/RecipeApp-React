import { forwardRef } from "react"
import RecipeItem from "./RecipeItem"
import Spinner from "./Spinner"

const RecipeContainer = forwardRef(({ recipes, onViewRecipe, error }, ref) => {

    return (
            <div className="container py-5 d-flex flex-column flex-lg-row justify-content-center align-items-center flex-wrap gap-5" ref={ref}>
                {
                    recipes.length
                        ?
                        recipes.map((e, i) => <RecipeItem
                            key={i}
                            src={e.strMealThumb}
                            name={e.strMeal}
                            category={e.strCategory}
                            area={e.strArea}
                            onViewRecipe={() => onViewRecipe(i)} />)
                        :
                        <Spinner error={error}/>
                }

            </div>
    )
})

export default RecipeContainer
