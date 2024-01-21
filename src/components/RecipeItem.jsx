const RecipeItem = ({ src, name, area, category, onViewRecipe }) => {

    return (
        <div className="recipe-item p-3">

            <div className='d-flex flex-column flex-sm-row justify-content-between align-items-center'>

                <div className="img-box mb-3 mb-sm-0">
                    <img src={src} alt="recipe-img" />
                </div>

                <div className="text-center">
                    <h4>{name}</h4>
                    <p>{area} dish</p>
                    <p>Belongs to {category} category</p>
                </div>

            </div>

            <button className='btn btn-danger d-block mx-auto' onClick={onViewRecipe}>View Recipe</button>

        </div>
    )
}

export default RecipeItem
