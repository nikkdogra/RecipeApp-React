import { FaRegWindowClose } from "react-icons/fa";
const PopUp = ({ recipe, onClosePopUp }) => {

    const ingredientsArr = [];

    for (let i = 1; i <= 20; i++) {

        if (!recipe[`strIngredient${i}`]) {
            break;
        }

        ingredientsArr.push(
            {
                ingredient: recipe[`strIngredient${i}`],
                measurement: recipe[`strMeasure${i}`]
            }
        )

    }

    return (

        <div className="pop-up text-white p-3 rounded">

            <FaRegWindowClose className="close-btn fs-1 position-absolute text-danger" onClick={onClosePopUp}/>

            <h4 className="text-center fs-1">{recipe.strMeal}</h4>

            <h5 className="mt-4 fs-3 text-secondary">Ingredients:</h5>

            <ul className="text-white">
                {
                    ingredientsArr.map((e, i) => <li
                        className="d-flex justify-content-between fs-5"
                        key={i}>
                        {e.measurement} <span className="text-secondary">{e.ingredient}</span>
                    </li>)
                }
            </ul>

            <h5 className="mt-5 fs-3 text-secondary">Instructions:</h5>
            <p className="lh-3 fs-5">{recipe.strInstructions}</p>

        </div>

    )
}

export default PopUp
