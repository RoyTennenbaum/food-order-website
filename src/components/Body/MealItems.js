import { useContext } from "react";

import classes from "./MealItems.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

const MealItems = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li key={props.id} className={classes.meal}>
      <p>
        <h3>{props.name}</h3>
        <span className={classes.description}>{props.description}</span>
        <span className={classes.price}>${props.price.toFixed(2)}</span>
      </p>
      <p>
        <MealItemForm onAddToCart={addToCartHandler} />
      </p>
    </li>
  );
};

export default MealItems;
