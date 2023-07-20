import { useRef } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = ({ onAddToCart }) => {
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    onAddToCart(enteredAmountNum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: Math.random().toString(),
          type: "number",
          min: "1",
          max: "9",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button}>+ ADD</button>
    </form>
  );
};

export default MealItemForm;
