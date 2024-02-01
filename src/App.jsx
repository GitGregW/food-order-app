import Meals from './components/Meals.jsx';
import Header from './components/Header.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import OrderConfirmation from './components/OrderConfirmation.jsx';
import Modal from './components/Modal.jsx';
import { useState, useRef } from 'react';

function App() {
  const [customerMeals, setCustomerMeals] = useState([]);
  
  const [activeModal, setActiveModal] = useState(null);
  let quantityTotal = 0;
  Object.keys(customerMeals).map(id => (quantityTotal += customerMeals[id].quantity));
  const [checkoutForm, setCheckoutForm] = useState({});
  const dialog = useRef();
  
  if(activeModal !== null){
    dialog.current.showModal();
  }
  // const customerMeals = useContext([]);
  // const [customerMeals, dispatch] = useReducer();

  function handleCheckout(event){
    event.preventDefault();
    setActiveModal(prevActiveModal => "checkout");
  }

  function handleOrder(event){
    event.preventDefault();
    const fd = new FormData(event.target);
    const orderData = {
      ["customer"]: Object.fromEntries(fd.entries()),
      ["items"]: customerMeals
    };
    
    setCheckoutForm(prevForm => ({
      ...prevForm,
      ...orderData
    }));
    setActiveModal(prevActiveModal => 'ordered');
  }

  function resetOrder(event){
    event.preventDefault();
    setCheckoutForm(prevForm => ({}));
    setCustomerMeals(prevForm => ([]));
    setActiveModal(prevActiveModal => null);
  }

  let modalAction;
  let buttonText;
  if(activeModal === 'cart'){ modalAction = handleCheckout; buttonText = "Go to Checkout"; }
  else if(activeModal === 'checkout'){ modalAction = handleOrder; buttonText = "Submit Order"; }
  else if(activeModal === 'ordered') { modalAction = resetOrder; buttonText = "Okay"; } 

  return (
    <>
      <Modal
        ref={dialog}
        buttonText={buttonText}
        setActiveModal={() => setActiveModal(prevActiveModal => null)}
        handleModalAction={modalAction}
        >
          {activeModal === 'cart' && <Cart customerMeals={customerMeals} handleCustomerMeals={setCustomerMeals} />}
          {activeModal === 'checkout' && <Checkout customerMeals={customerMeals} />}
          {activeModal === 'ordered' && <OrderConfirmation formData={checkoutForm} />}
      </Modal>

      <Header
        cartMealsQuantity={quantityTotal}
        setActiveModal={setActiveModal}
      />
      <Meals handleCustomerMeals={setCustomerMeals} />
    </>
  );
}

export default App;
