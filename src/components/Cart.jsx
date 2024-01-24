// MODAL
import { createPortal } from "react-dom";
import { useState } from 'react';

export default function Cart({ selectedMeals }){
    const [showCart, setShowCart] = useState(false);
    return (
        <>
            {
            createPortal(
                showCart && (
                <div className="cart modal" style={{color: '#46443c'}}>
                    <h2>Your Cart</h2>
                    { selectedMeals.map((selectedMeal, index) => (
                        <div key={index} className="cart-item">
                            <p>{ selectedMeal } - 1 x £9.99</p>
                            <div className="cart-item-actions">
                                <button className="text-button">-</button>
                                <span>1</span>
                                <button className="text-button">+</button>
                            </div>
                        </div>
                    )) }
                    <div className="cart-total">£100.99</div>
                    <div className="modal-actions">
                        <button
                            className="text-button"
                            onClick={() => setShowCart(prevCart => false)}
                            >close</button>
                        <button className="button">Go to Checkout</button>
                    </div>
                </div>)
            , document.getElementById('modal'))
            }
            <button
                className="text-button"
                onClick={() => setShowCart(prevShow => true)}
                >Cart (1)
            </button>
        </>
    );
}