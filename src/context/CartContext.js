import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cartListItems, setCartListItems] = useState(JSON.parse(localStorage.getItem('products')) || [])
  const [totalPrice, setTotalPrice] = useState (0)

  const addProductToCart = ({ data, count}) => {
    console.log('recibo ', count)
    let isInCart = cartListItems.find((cartItem) => cartItem.id == data.id);
    if (!isInCart) {
      setTotalPrice(totalPrice + data.price * count) 
      localStorage.setItem('products', JSON.stringify([...cartListItems, data], ))
      return setCartListItems(cartListItems => [...cartListItems, data])
    }
  };

  const removeProduct = ( data ) => {
    const copyItem = [...cartListItems];
    const newItemArray = copyItem.filter((cartItem) => cartItem.id !== data.id
    );
    setCartListItems(newItemArray);
  };

  const cleanCart=  () => {
    setCartListItems([])
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
