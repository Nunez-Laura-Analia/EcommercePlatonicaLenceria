import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListItems, setCartListItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState (0)
  const addProductToCart = ({ data, count }) => {
    let isInCart = cartListItems.find((cartItem) => cartItem.id == data.id);
    if (!isInCart) {
      console.log("se agrego el producto, ", data);
      console.log("se recibe el count", count)
      setTotalPrice(totalPrice + data.price) 
      return setCartListItem((cartListItems) => [...cartListItems, data]);
    }
    console.log("El producto ya se encuentra en el carrito");
  };

  const removeProduct = ( data ) => {
    console.log("data", data.id)  
    const copyItem = [...cartListItems];
    const newItemArray = copyItem.filter((cartItem) => cartItem.id !== data.id
    );
    setCartListItem(newItemArray);
  };

  const clearCart= () => {
    console.log("se esta eliminando")
  }

  const info = {
    cartListItems,
    addProductToCart,
    removeProduct,
    clearCart,
    totalPrice,
  };
  return <CartContext.Provider value={info}>{children}</CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
