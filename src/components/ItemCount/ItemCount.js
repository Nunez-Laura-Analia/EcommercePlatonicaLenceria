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
        <div className="container-contador">
            <div className="contador">
                <button className="boton" onClick={restCount} disabled={count==0}>-</button>
                <p>{count}</p>
                <button className="boton" onClick={addCount}>+</button>
            </div>
            <button className="boton" onClick={() =>agregar()}>Agregar al Carrito</button>
            {/* <Modal handClose={handClose} open={open}>
                <h1>Compraste {count} productos</h1>
            </Modal> */}
        </div>    
    )
}

export default ItemCount