import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItem] = useState([])

    const addProductToCart= ({ data }) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id == data.id)
        if(!isInCart) {
            console.log("se agrego el producto, ", data)
            setCartListItem(cartListItems => [...cartListItems, data])
        }
        console.log("El producto ya se encuentra en el carrito")
    }

    const info = {
        cartListItems,
        addProductToCart
    }
    return(
        <CartContext.Provider value ={info}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }