import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { useParams  } from "react-router-dom"
import { doc, getDoc, getDocs } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product , setProduct] = useState ({})

    // const productFilter = productos.find ( (product) => {
    //     return product.id == id
    // })    

    useEffect(() => {
        getProduct()
        .then ( (prod) => {
            setProduct(prod)
        })
    }, [id]);

    const getProduct = async() => {
        const docRef = doc(db, "productos", id)
        const docSnaptshop = await getDoc(docRef)
        let product = docSnaptshop.data()
        product.id = docSnaptshop.id
        return product

    }

    return(
        <>
        <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer 