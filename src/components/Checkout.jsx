export default function Checkout({ customerMeals }){
    let subPriceTotals = [];
    let priceTotal = 0;
    Object.keys(customerMeals).map(id => (
        subPriceTotals.push(customerMeals[id].price * customerMeals[id].quantity)
        ));
    subPriceTotals.map(subtotal => (priceTotal += subtotal));

    return (
        <div className="control" style={{color: '#46443c'}}>
            <h2>Checkout</h2>
            <p>Total Amount: £{ priceTotal }</p>
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="street">Street</label>
            <input type="text" name="street" id="street" />
            <div className="control-row">
                <label htmlFor="postal-code">Postcode</label>
                <label htmlFor="city">City</label>
            </div>
            <div className="control-row">
                <input type="text" name="postal-code" id="postal-code" />
                <input type="text" name="city" id="city" />
            </div>
        </div>
    );
}