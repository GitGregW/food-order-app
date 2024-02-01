import useFetch from '../hooks/useFetch.js';
import { fetchMeals } from '../http.js';

export default function Meals({ handleCustomerMeals }){
    const {isFetching: isLoading, error, fetchedData: meals} = useFetch(fetchMeals, []);
    
    function selectMeal(meal){
        handleCustomerMeals(prevMeal => ({
            ...prevMeal,
            [meal.id]: { 
                name: meal.name,
                quantity: prevMeal[meal.id] === undefined
                    ? 1
                    : prevMeal[meal.id]["quantity"] + 1,
                price: parseFloat(meal.price)
            }
        }));
    }
    
    return (
        <div id="meals">
            { error && <p>{error}</p> }
            { isLoading && <p>Loading meals...</p> }
            { !isLoading && !error && meals.map(meal => {
                return (
                    <div key={meal.id} className="meal-item">
                        <article>
                            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                            <h3>{meal.name}</h3>
                            <section className="meal-item-actions">
                                <div className="meal-item-price">£{meal.price}</div>
                                <p className="meal-item-description">{meal.description}</p>
                                <button
                                    className="button"
                                    onClick={ () => selectMeal(meal)}
                                    >Add to Cart</button>
                            </section>
                        </article>
                    </div>
                );
            })}
        </div>
    );
}