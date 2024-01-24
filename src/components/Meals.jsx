import useFetch from '../hooks/useFetch.js';
import { fetchMeals } from '../http.js';
// import { useState } from 'react';

export default function Meals({ handleSelectedMeals }){
    
    // Previously: useFetch('meals', setMeals, setError, setIsLoading); // However causes re-render/duplicate fetched data
    const {isFetching: isLoading, error, fetchedData: meals} = useFetch(fetchMeals, []);
    
    return (
        <div id="meals">
            { error && <p>{error}</p> }
            { isLoading && <p>Loading meals...</p> }
            { !isLoading && !error && meals.map(meal => {
                return (
                    <div key={meal.id} className="meal-item">
                        <article className>
                            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                            <h3>{meal.name}</h3>
                            <section className="meal-item-actions">
                                <div className="meal-item-price">£{meal.price}</div>
                                <p className="meal-item-description">{meal.description}</p>
                                <button
                                    className="button"
                                    onClick={ () => handleSelectedMeals(prevMeal => [
                                        ...prevMeal,
                                        meal.name]
                                    )}
                                    >Add to Cart</button>
                            </section>
                        </article>
                    </div>
                );
            })}
        </div>
    );
}