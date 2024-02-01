
export default function Cart({ customerMeals, handleCustomerMeals }){
    let subPriceTotals = [];
    let priceTotal = 0;
    Object.keys(customerMeals).map(id => subPriceTotals.push(customerMeals[id].price * customerMeals[id].quantity));
    subPriceTotals.map(subtotal => (priceTotal += subtotal));

    function changeMealQuantity(id, value){
        handleCustomerMeals(prevMeals => {
            return customerMeals[id].quantity + value === 0
                ? {
                    ...Object.keys(prevMeals)
                        .filter(prevMeal => prevMeal !== id)
                        .reduce((newMeal, key) => { newMeal[key] = prevMeals[key]; return newMeal; }, {})
                }
                : {
                    ...prevMeals,
                    [id]: {
                        ...prevMeals[id],
                        quantity: prevMeals[id].quantity + value
                    }
                }
        });
    }

    return (
        <div className="cart" style={{color: '#46443c'}}>
            <h2>Your Cart</h2>
            { Object.keys(customerMeals).map(id => (
                <div key={id} className="cart-item">
                    <p>{ customerMeals[id].name } - { customerMeals[id].quantity } x £{ customerMeals[id].price }</p>
                    <div className="cart-item-actions">
                        <button type="button" onClick={ () => changeMealQuantity(id, -1) } className="text-button">-</button>
                        <span>{ customerMeals[id].quantity }</span>
                        <button type="button" onClick={ () => changeMealQuantity(id, 1) } className="text-button">+</button>
                    </div>
                </div>
            ))}
            <div className="cart-total">£{ priceTotal }</div>
        </div>
    );
}