import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (prevItem) => prevItem.title === item.title
      );
      const existingItem = prevItems[existingItemIndex];
      let updatedItems;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = prevItems.concat({ ...item, quantity: 1 });
      }

      return updatedItems;
    });
  };

  const increaseItemQtyHandler = (title) => {
    setItems((prevItems) => {
      return prevItems.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decreaseItemQtyHandler = (title) => {
    setItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.title === title ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  const cartContext = {
    items: items,
    totalQuantity: totalQuantity,
    addItem: addItemToCartHandler,
    decreaseItemQty: decreaseItemQtyHandler,
    increaseItemQty: increaseItemQtyHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
