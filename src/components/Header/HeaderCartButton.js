import { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import CartIcon from "./CartIcon";

const HeaderCartButton = ({ openCartHandler }) => {
  const [btnIsUsed, setBtnIsUsed] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const cartItemNum = items.reduce(
    (acc, currentItem) => acc + currentItem.amount,
    0
  );

  const btnClasses = `${classes.button} ${btnIsUsed ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsUsed(true);
    const timer = setTimeout(() => {
      setBtnIsUsed(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={openCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemNum}</span>
    </button>
  );
};

export default HeaderCartButton;
