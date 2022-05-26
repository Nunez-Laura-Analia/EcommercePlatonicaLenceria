import ItemDetail from "../ItemDetail/ItemDetail"
import { producto } from '../ItemList/ItemList'
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {

    const [product , setProduct ] = useState ({})
    const getItem = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(producto);
          }, 2000);
        });
    };

    useEffect(() => {
        getItem()
        .then( (res) => {
            console.log("item : ", res)
            setProduct(res)
        })

    }, [])

    return(
        <>
            <div>Item</div>
            <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer 