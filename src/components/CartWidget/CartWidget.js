import './CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from "../Modal/Modal";
import { useState } from 'react'

const CartWidget = () => {

    const [open, setOpen] = useState(false)
    const handClose = () => {
      setOpen(false)
    }
    
    return (
        <div className="Carrito">
            <ShoppingCartIcon onClick={() =>setOpen(true)}/>
            <Modal handClose={handClose} open={open}>
                <h1>carrito</h1>
            </Modal>
        </div>
    )
}

export default CartWidget