import { useState } from "react"
import './ItemCount.css'
import Modal from "../Modal/Modal";

const ItemCount = () => {

    const[count, setCount] = useState(0)
    const [stock, setStock] = useState(10)

    const [open, setOpen] = useState(false)
    const handClose = () => {
      setOpen(false)
    }

    const addCount = () =>{
        if (count < stock)
        setCount(count + 1)
        
    }

    return(
        <div className="container-contador">
            <div className="contador">
                <button className="boton" onClick={() => setCount(count - 1)} disabled={count==0}>-</button>
                <p>{count}</p>
                <button className="boton" onClick={addCount}>+</button>
            </div>
            <button className="boton" onClick={() =>setOpen(true)}>Comprar</button>
            <Modal handClose={handClose} open={open}>
                <h1>Compraste {count} productos</h1>
            </Modal>
        </div>    
    )
}

export default ItemCount