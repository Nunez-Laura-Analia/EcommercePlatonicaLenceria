import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cartListItems, setCartListItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState (0)

  const addProductToCart = ({ data, count }) => {
    let isInCart = cartListItems.find((cartItem) => cartItem.id == data.id);
    if (!isInCart) {
      setTotalPrice(totalPrice + data.price * count) 
      return setCartListItem((cartListItems) => [...cartListItems, data]);
    }
  };

  const removeProduct = ( data ) => {
    const copyItem = [...cartListItems];
    const newItemArray = copyItem.filter((cartItem) => cartItem.id !== data.id
    );
    setCartListItem(newItemArray);
  };

  const cleanCart=  () => {
    setCartListItem([])
  }

  const info = {
    cartListItems,
    addProductToCart,
    removeProduct,
    cleanCart,
    totalPrice,
  };
  return <CartContext.Provider value={info}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
