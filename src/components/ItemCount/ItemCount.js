import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ onAdd, stock, initial}) => {
    const [count, setCount] = useState (1)
    const restCount= () => {
        if (count > initial)
        count (count - 1)
    }

    const addCount = () =>{
        if (count < stock)
        setCount(count + 1) 
    }

    return(
        <div className="containerCount">
            <div className="count">
                <button className="btnCount" onClick={restCount} disabled={count===0}>-</button>
                <p>{count}</p>
                <button className="btnCount" onClick={addCount}>+</button>
            </div>
            <button className="btnCount" onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>    
    )
}

export default ItemCount
