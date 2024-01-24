## React third project - Food Order App
<p align="center"><img style="width: 56px; height: 56px; margin: 7px 0; fill: #facc15;" src="public/logo.jpg" /></p>

React - The Complete Guide 2024 (incl. React Router & Redux)
- Build a Food Order App
- - Fetch meals from the backend
- - Allow users to add & remove meals to/from cart
- - Send cart data along with user data (address) to the backend
- - Handle any loading and error states

- Http requests (http.js)
- - A JavaScript file responsible for handling of fetch methods (i.e. GET/meals)

- Custom Hook (useFetch)
- - A custom hook that calls Http request functions and handles state for loading, errors and data

- Modal (Cart)
- - createPortal hook to mount the content to the 'modal' identifier located above root at the very top of the html
- - *Accesses the selectedMeals state object via Header component as a children slot (done so to avoid prop drilling) *to review useContext with useReducer hooks as the cart will also look to manage state updating

- Bugs to review on next iteration
- - Modal insertion inline rather than overlaying, also no backdrop showing
- - *To make selectedMeals accessible with useContext with useReducer for state updating through child component modals