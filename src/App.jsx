import Meals from './components/Meals.jsx';
import Header from './components/Header.jsx';
import Cart from './components/Cart.jsx';
import { useState } from 'react';

function App() {
  const [selectedMeals, setSelectedMeals] = useState([]);
  return (
    <>
      <Header>
        <Cart selectedMeals={selectedMeals} />
      </Header>
      <Meals handleSelectedMeals={setSelectedMeals} />
    </>
  );
}

export default App;
