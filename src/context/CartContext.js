import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListItems, setCartListItems] = useState([]);

  const addProductToCart = (data) => {
    let isInCart = cartListItems.find((cartItem) => cartItem.data.id === data.data.id);
    if (!isInCart) {
      return setCartListItems([...cartListItems, data]);
    }
  };

  const removeProduct = (data) => {
    setCartListItems(cartListItems.filter((cartProduct) => cartProduct.data.id !== data.id));
  };

  const cleanCart = () => {
    setCartListItems([]);
  };

  const totalQuantity = () => {
    return cartListItems.reduce((quantity, data) => (quantity + data.count), 0);
  };

  const totalPrice = () => {
    return cartListItems.reduce((prc, data) => (prc + data.data.price * data.count),0);
  };

  const info = {
    cartListItems,
    addProductToCart,
    removeProduct,
    cleanCart,
    totalQuantity,
    totalPrice
  };
  return <CartContext.Provider value={info}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
