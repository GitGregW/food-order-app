export default function Header({ children, cartMealsQuantity, setActiveModal }){
    return (
        <div id="main-header">
            <h1 id="title">
                <img src='logo.jpg' alt="fine dining in the city" />
                ReactFood
            </h1>
            {children}
            <button
                className="text-button"
                onClick={() => setActiveModal(prevActiveModal => 'cart')}
                >Cart ({ cartMealsQuantity })
            </button>
        </div>
    );
}