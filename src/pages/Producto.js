import productos from "../components/ItemListContainer/ItemListContainer"
import { useEffect, useState } from "react"
import ItemList from "../components/ItemList/ItemList"
import { useParams } from "react-router-dom"

const Producto = () => {
    const [products , setProducts] = useState ([])
    const { category } = useParams()

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            resolve(productos);
        });
    };    

    useEffect ( () => {
        getProducts()
        .then ((res) => {
            setProducts( category ? res.filter(product => product.category === category)  : res)
        })
    }, [category])    
    
    return(
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default Producto