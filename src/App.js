import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import MealsSummary from "./components/Body/MealsSummary";
import AvailableMeals from "./components/Body/AvailableMeals";
import CartProvider from "./store/CartProvider";
import "./App.css";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const closeCartHandler = () => {
    setIsCartOpen(false);
  };
  const openCartHandler = () => {
    setIsCartOpen(true);
  };

  return (
    <CartProvider>
      {isCartOpen ? <Cart closeCartHandler={closeCartHandler} /> : null}
      <Header openCartHandler={openCartHandler} />
      <MealsSummary />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
