import './Cart.css'
import { useContext } from "react"
import { Container } from "@mui/material"
import { Delete } from "@mui/icons-material"
import CartContext from "../context/CartContext"
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cartListItems, totalPrice, removeProduct } = useContext(CartContext)
    console.log("cartListItems desde checkout: ", cartListItems)
    return(
        <Container className='container-general'> 
        <h2>Checkout: </h2>
        <div className='cart-section'>
            <div className='col-cart-table__head'>
                <h5>Producto</h5>
                <h5>Descripcion</h5>
                <h5>Precio Unitario</h5>
                <h5>Cantidad</h5>
                <h5>Quitar</h5>
            </div>
            {cartListItems.map( (data) => {
                const {id, title, image, price} = data
                return(
                    <div className='cart-table__content' key={id}>
                        <div className='cart-table__content-img'>
                            <img className='imgCart' src={`/${image}`} />
                        </div>
                        <div className='cart-table__content-title'>
                            <p>{title}</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <p>$ {price}</p>
                        </div>
                        <div className='cart-table__content-quantity'>
                            <p>1</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <button className="btnDeleteIcon btn">
                                <Delete onClick={() => removeProduct(data)}/>
                            </button>
                        </div>
                    </div>
                )
            })}
            <div className='cart-footer'>
                <button className='selectorAdd selector cart'><Link className='linkCart' to='/product'>Seguir Comprando</Link></button>
                <div className='cart-checkout-details'>
                    <div className='cart-checkout__subtotal'>
                        <p>Subtotal</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <div className='cart-checkout__total'>
                        <p>Total</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <button className='selectorAdd selector cart'>Completar Compra</button>
                </div>
            </div>
        </div>
    </Container>
    )
}

export default Cart