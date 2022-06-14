import ItemDetail from "../ItemDetail/ItemDetail"
import  productos from "../../MockProducts/MockProducts"
import { useEffect, useState } from "react"
import { useParams  } from "react-router-dom"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product , setProduct] = useState ({})

    const productFilter = productos.find ( (product) => {
        return product.id == id
    })    

    useEffect(() => {
        setProduct(productFilter)
    }, [productFilter]);

    return(
        <>
        <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer 