import { useState, useEffect, useContext } from "react";
import CartContext from "./CartContext";
import AuthContext from "./AuthContext";
import axios from "axios";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const authCtx = useContext(AuthContext);
  const userEmail = authCtx.email ? authCtx.email.replace(/[@.]/g, "") : null;
  const crudCrudBaseUrl = `https://crudcrud.com/api/bc24e17a961f4c8598a615c9f45d8a53/cart${userEmail}`;
  useEffect(() => {
    if (!userEmail) {
      return;
    }
    axios
      .get(crudCrudBaseUrl)
      .then((response) => {
        const loadedItems = response.data.map((item) => ({
          id: item._id,
          title: item.title,
          quantity: item.quantity,
          price: item.price,
        }));
        setItems(loadedItems);
      })
      .catch((error) => {
        console.error("Failed to fetch cart items:", error);
      });
  }, [userEmail, crudCrudBaseUrl]);

  const addItemToCartHandler = (item) => {
    const existingItemIndex = items.findIndex(
      (prevItem) => prevItem.title === item.title
    );
    const existingItem = items[existingItemIndex];
    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + item.quantity,
      };
      updatedItems = [...items];
      updatedItems[existingItemIndex] = updatedItem;

      axios
        .put(`${crudCrudBaseUrl}/${updatedItem.id}`, updatedItem, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .catch((error) => {
          console.error("Failed to update cart item:", error);
        });
    } else {
      const newItem = { ...item, quantity: item.quantity };
      updatedItems = items.concat(newItem);

      axios
        .post(crudCrudBaseUrl, newItem, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          newItem.id = response.data._id;
          setItems(updatedItems);
        })
        .catch((error) => {
          console.error("Failed to add new cart item:", error);
        });
    }
    setItems(updatedItems);
  };

  const decreaseItemQty = (item) => {
    const existingItemIndex = items.findIndex(
      (prevItem) => prevItem.title === item.title
    );
    if (items[existingItemIndex].quantity === 1) {
      removeItemFromCartHandler(item.id);
      return;
    } else {
      let updatedItems = [...items];
      updatedItems[existingItemIndex] = {
        ...items[existingItemIndex],
        quantity: items[existingItemIndex].quantity - 1,
      };

      axios
        .put(
          `${crudCrudBaseUrl}/${updatedItems[existingItemIndex].id}`,
          updatedItems[existingItemIndex],
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .catch((error) => {
          console.error("Failed to update cart item:", error);
        });
      setItems(updatedItems);
    }
  };

  const removeItemFromCartHandler = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));

    fetch(`${crudCrudBaseUrl}/${id}`, {
      method: "DELETE",
    }).catch((error) => {
      console.error("Failed to delete cart item:", error);
    });
  };

  const cartContext = {
    items: items,
    totalQuantity: items.reduce((acc, item) => acc + item.quantity, 0),
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    decreaseItemQty: decreaseItemQty,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
