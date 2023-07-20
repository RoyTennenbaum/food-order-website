import { useReducer } from "react";

import CartContext from "./cart-context";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (i) => i.id === action.item.id
      );
      const existingItem = state.items[existingItemIndex];
      let updatedItems;
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, action.item];
      }
      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };

    case "REMOVE_ITEM":
      const currentItemIndex = state.items.findIndex((i) => i.id === action.id);
      const currentItem = state.items[currentItemIndex];
      const updatedTotalAmount = state.totalAmount - currentItem.price;
      let updatedItemsArr;
      if (currentItem.amount === 1) {
        updatedItemsArr = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...currentItem,
          amount: currentItem.amount - 1,
        };
        updatedItemsArr = [...state.items];
        updatedItemsArr[currentItemIndex] = updatedItem;
      }
      return {
        items: updatedItemsArr,
        totalAmount: updatedTotalAmount,
      };
    default:
      return initialCartState;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
