import ItemDetail from "../ItemDetail/ItemDetail"
import  productos from "../../MockProducts/MockProducts"
import { useEffect, useState } from "react"
import { useParams  } from "react-router-dom"


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product , setProduct] = useState ({})

    useEffect(() => {
        setProduct(productFilter)
    }, [])

    const productFilter = productos.find ( (product) => {
        return product.id == id
    })

    return(
        <>
        <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer 