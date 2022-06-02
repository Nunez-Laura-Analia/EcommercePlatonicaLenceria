import { useState } from "react"
import './ItemCount.css'
import Modal from "../Modal/Modal";

const ItemCount = ({stock, initial, onAdd}) => {

    const[count, setCount] = useState(initial)

    const [open, setOpen] = useState(false)

    // const handClose = () => {
    //   setOpen(false)
    // }

    const agregar = () => {
        setOpen(true)
        onAdd(count) 
    }

    const restCount= () => {
        if (count > initial)
        setCount (count - 1)
    }

    const addCount = () =>{
        if (count < stock)
        setCount(count + 1) 
    }

    return(
        <div className="containerCount">
            <div className="count">
                <button className="btnCount" onClick={restCount} disabled={count==0}>-</button>
                <p>{count}</p>
                <button className="btnCount" onClick={addCount}>+</button>
            </div>
            <button className="btnCount" onClick={() =>agregar()}>Agregar al Carrito</button>
            {/* <Modal handClose={handClose} open={open}>
                <h1>Compraste {count} productos</h1>
            </Modal> */}
        </div>    
    )
}

export default ItemCount